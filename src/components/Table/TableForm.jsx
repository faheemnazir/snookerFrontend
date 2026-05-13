import React, { useEffect, useState } from "react";
import { getAllTiers } from "../../Services/api";

const TableForm = ({
  formData,
  handleChange,
  handleSubmit,
  loading,
  buttonText,
  error,
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

      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-400 text-xs p-3 text-center rounded-lg">
          {error}
        </div>
      )}

      {/* ================= BASIC INFO ================= */}
      {/* ================= BASIC INFO ================= */}
      <div className="bg-card/50 backdrop-blur-md border border-white/5 p-5 space-y-4">
        <h3 className="font-heading text-white font-bold text-lg uppercase">
          Basic Info
        </h3>

        <input
          required
          name="tableName"
          value={formData.tableName || ""}
          onChange={onInputChange}
          placeholder="Enter table name"
          className="w-full bg-background border border-white/5 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition text-sm"
        />

        <select
          name="tableType"
          value={formData.tableType || "premium"}
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
        >
          <option value="premium">Premium</option>
          <option value="regular">Regular</option>
        </select>
      </div>

      {/* ================= IMAGE UPLOAD ================= */}
      <div className="bg-card/50 backdrop-blur-md border border-white/5 p-5 space-y-4">
        <h3 className="font-heading text-white font-bold text-lg uppercase">
          Upload Images
        </h3>

        <input
          type="file"
          multiple
          onChange={handleImageUpload}
          className="text-xs text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:uppercase file:bg-accent file:text-background hover:file:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all"
        />

        {/* Preview */}
        {previewUrls.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {previewUrls.map((url, i) => (
              <img
                key={i}
                src={url}
                alt="preview"
                className="w-24 h-24 object-cover rounded-lg border border-white/5"
              />
            ))}
          </div>
        )}
      </div>

      {/* ================= TIERS ================= */}
      <div className="bg-card/50 backdrop-blur-md border border-white/5 p-5 space-y-4">
        <h3 className="font-heading text-white font-bold text-lg uppercase">
          Pricing Tiers
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {tiers.map((tier) => {
            const tierId = tier.id || tier._id;

            const isActive =
              formData.availableTierIds?.includes(tierId);
            
            const isDisabled = formData.tableType?.toUpperCase() !== tier.tableType?.toUpperCase();

            return (
              <button
                key={tierId}
                type="button"
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
                  ₹{tier.basePrice}
                </p>


              </button>
            );
          })}
        </div>

        {formData.availableTierIds?.length > 0 && (
          <p className="text-xs text-muted-foreground font-light">
            {formData.availableTierIds.length} tier(s) selected
          </p>
        )}
      </div>

      {/* ================= SUBMIT ================= */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-accent text-background font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all disabled:opacity-50"
      >
        {loading ? "PROCESSING..." : buttonText}
      </button>
    </form>
  );
};

export default TableForm;