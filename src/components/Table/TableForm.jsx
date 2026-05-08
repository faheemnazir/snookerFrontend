import React, { useEffect, useState } from "react";
import { getAllTiers } from "../../Services/api";

const TableForm = ({
  formData,
  handleChange,
  handleSubmit,
  loading,
  buttonText,
}) => {
  const [tiers, setTiers] = useState([]);
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  // 🔥 Fetch tiers from API
  useEffect(() => {
    const fetchTiers = async () => {
      try {
        const data = await getAllTiers();
        setTiers(data);
      } catch (err) {
        console.error("Tier fetch failed:", err);
      }
    };

    fetchTiers();
  }, []);

  // 🔥 Handle input change safely
  const onInputChange = (e) => {
    handleChange(e);
  };

  // 🔥 Image upload + preview
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || []);
    setImages(files);

    const previews = files.map((file) =>
      URL.createObjectURL(file)
    );
    setPreviewUrls(previews);
  };

  // 🔥 Tier toggle
  const handleTierToggle = (tierId) => {
    const current = [...(formData.availableTierIds || [])];

    const exists = current.includes(tierId);

    const updated = exists
      ? current.filter((id) => id !== tierId)
      : [...current, tierId];

    handleChange({
      target: {
        name: "availableTierIds",
        value: updated,
      },
    });
  };

  // 🔥 Submit wrapper
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e, images);
  };

  // safety
  if (!formData) return null;

  return (
    <form onSubmit={onSubmit} className="space-y-8">

      {/* ================= BASIC INFO ================= */}
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-5 space-y-4">
        <h3 className="text-white font-semibold text-lg">
          Basic Info
        </h3>

        <input
          required
          name="tableName"
          value={formData.tableName || ""}
          onChange={onInputChange}
          placeholder="Enter table name"
          className="w-full bg-[#111] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500"
        />

        <select
          name="tableType"
          value={formData.tableType || "premium"}
          onChange={onInputChange}
          className="w-full bg-[#111] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500"
        >
          <option value="premium">Premium</option>
          <option value="regular">Regular</option>
        </select>
      </div>

      {/* ================= IMAGE UPLOAD ================= */}
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-5 space-y-4">
        <h3 className="text-white font-semibold text-lg">
          Upload Images
        </h3>

        <input
          type="file"
          multiple
          onChange={handleImageUpload}
          className="text-sm text-gray-400"
        />

        {/* Preview */}
        {previewUrls.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {previewUrls.map((url, i) => (
              <img
                key={i}
                src={url}
                alt="preview"
                className="w-24 h-24 object-cover rounded-lg border border-gray-700"
              />
            ))}
          </div>
        )}
      </div>

      {/* ================= TIERS ================= */}
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-5 space-y-4">
        <h3 className="text-white font-semibold text-lg">
          Pricing Tiers
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {tiers.map((tier) => {
            const tierId = tier.id || tier._id;

            const isActive =
              formData.availableTierIds?.includes(tierId);

            return (
              <button
                key={tierId}
                type="button"
                onClick={() => handleTierToggle(tierId)}
                className={`p-4 rounded-xl border text-left transition
                ${
                  isActive
                    ? "bg-green-500/10 border-green-500 text-green-400"
                    : "bg-[#111] border-gray-800 text-gray-300 hover:border-green-500/40"
                }`}
              >
                <p className="font-semibold text-sm">
                  {tier.hours} Hours
                </p>

                <p className="text-xs mt-1">
                  ₹{tier.basePrice}
                </p>

                {tier.discountPercentage && (
                  <p className="text-[11px] opacity-60 mt-1">
                    {tier.discountPercentage}% OFF
                  </p>
                )}
              </button>
            );
          })}
        </div>

        {formData.availableTierIds?.length > 0 && (
          <p className="text-xs text-gray-500">
            {formData.availableTierIds.length} tier(s) selected
          </p>
        )}
      </div>

      {/* ================= SUBMIT ================= */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-black font-semibold transition disabled:opacity-50"
      >
        {loading ? "PROCESSING..." : buttonText}
      </button>
    </form>
  );
};

export default TableForm;