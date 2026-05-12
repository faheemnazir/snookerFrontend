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
<<<<<<< HEAD
      {/* ================= BASIC INFO ================= */}
      <div className="bg-card/50 backdrop-blur-md border border-white/5 p-5 space-y-4">
        <h3 className="font-heading text-white font-bold text-lg uppercase">
=======
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-5 space-y-4">
        <h3 className="text-white font-semibold text-lg">
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
          Basic Info
        </h3>

        <input
          required
          name="tableName"
          value={formData.tableName || ""}
          onChange={onInputChange}
          placeholder="Enter table name"
<<<<<<< HEAD
          className="w-full bg-background border border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition text-sm"
=======
          className="w-full bg-[#111] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500"
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
        />

        <select
          name="tableType"
          value={formData.tableType || "premium"}
<<<<<<< HEAD
          onChange={(e) => {
            const newType = e.target.value;
            onInputChange(e); // Updates tableType
            
            // Clear tiers that don't match the new type
            const matchingTiers = tiers.filter(t => t.tableType === newType.toUpperCase());
            const newTierIds = (formData.availableTierIds || []).filter(id => 
              matchingTiers.some(t => t.id === id)
            );
            handleChange({ target: { name: "availableTierIds", value: newTierIds } });
          }}
          className="w-full bg-background border border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition text-sm"
=======
          onChange={onInputChange}
          className="w-full bg-[#111] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500"
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
        >
          <option value="premium">Premium</option>
          <option value="regular">Regular</option>
        </select>
      </div>

      {/* ================= IMAGE UPLOAD ================= */}
<<<<<<< HEAD
      <div className="bg-card/50 backdrop-blur-md border border-white/5 p-5 space-y-4">
        <h3 className="font-heading text-white font-bold text-lg uppercase">
=======
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-5 space-y-4">
        <h3 className="text-white font-semibold text-lg">
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
          Upload Images
        </h3>

        <input
          type="file"
          multiple
          onChange={handleImageUpload}
<<<<<<< HEAD
          className="text-xs text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:uppercase file:bg-accent file:text-background hover:file:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all"
=======
          className="text-sm text-gray-400"
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
        />

        {/* Preview */}
        {previewUrls.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {previewUrls.map((url, i) => (
              <img
                key={i}
                src={url}
                alt="preview"
<<<<<<< HEAD
                className="w-24 h-24 object-cover rounded-lg border border-white/5"
=======
                className="w-24 h-24 object-cover rounded-lg border border-gray-700"
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
              />
            ))}
          </div>
        )}
      </div>

      {/* ================= TIERS ================= */}
<<<<<<< HEAD
      <div className="bg-card/50 backdrop-blur-md border border-white/5 p-5 space-y-4">
        <h3 className="font-heading text-white font-bold text-lg uppercase">
=======
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-5 space-y-4">
        <h3 className="text-white font-semibold text-lg">
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
          Pricing Tiers
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {tiers.map((tier) => {
            const tierId = tier.id || tier._id;

            const isActive =
              formData.availableTierIds?.includes(tierId);
<<<<<<< HEAD
            
            const isDisabled = formData.tableType?.toUpperCase() !== tier.tableType?.toUpperCase();
=======
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389

            return (
              <button
                key={tierId}
                type="button"
<<<<<<< HEAD
                disabled={isDisabled}
                onClick={() => handleTierToggle(tierId)}
                className={`p-4 rounded-lg border text-left transition-all duration-300
                ${
                  isActive
                    ? "bg-accent/10 border-accent text-accent"
                    : isDisabled
                    ? "bg-background border-white/5 text-muted-foreground cursor-not-allowed opacity-50"
                    : "bg-background border-white/5 text-white hover:border-accent/40"
                }`}
              >
                <p className="font-bold text-sm">
                  {tier.hours} Hours
                </p>

                <p className="text-xs mt-1 text-muted-foreground">
=======
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
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
                  ₹{tier.basePrice}
                </p>

                {tier.discountPercentage && (
<<<<<<< HEAD
                  <p className="text-[10px] font-bold text-accent mt-1">
=======
                  <p className="text-[11px] opacity-60 mt-1">
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
                    {tier.discountPercentage}% OFF
                  </p>
                )}
              </button>
            );
          })}
        </div>

        {formData.availableTierIds?.length > 0 && (
<<<<<<< HEAD
          <p className="text-xs text-muted-foreground font-light">
=======
          <p className="text-xs text-gray-500">
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
            {formData.availableTierIds.length} tier(s) selected
          </p>
        )}
      </div>

      {/* ================= SUBMIT ================= */}
      <button
        type="submit"
        disabled={loading}
<<<<<<< HEAD
        className="w-full py-4 bg-accent text-background font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all disabled:opacity-50"
=======
        className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-black font-semibold transition disabled:opacity-50"
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
      >
        {loading ? "PROCESSING..." : buttonText}
      </button>
    </form>
  );
};

export default TableForm;