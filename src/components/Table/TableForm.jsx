import React, { useEffect, useState } from "react";
// import { getAllSlots, getAllTiers } from "../../Services/api";
import { getAllSlots } from "../../Services/api";

const TableForm = ({ onSubmit, initialData = {}, mode = "create" }) => {
  const [formData, setFormData] = useState({
    tableName: initialData.tableName || "",
    tableType: initialData.tableType || "REGULAR",
    availableSlots: initialData.availableSlots || [],
    tierId: initialData.tierId || "", // ✅ NEW
  });

  const [allSlots, setAllSlots] = useState([]);
  const [allTiers, setAllTiers] = useState([]); // ✅ NEW
  const [images, setImages] = useState([]);

  // ✅ INIT DATA (only once)
  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setFormData({
        tableName: initialData.tableName || "",
        tableType: initialData.tableType || "REGULAR",
        availableSlots: initialData.availableSlots || [],
        tierId: initialData.tierId || "", // ✅ NEW
      });
    }
  }, []);

  // ✅ FETCH SLOTS
  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const res = await getAllSlots();
        setAllSlots(res);
      } catch (err) {
        console.error("Failed to load slots", err);
      }
    };

    fetchSlots();
  }, []);

  // ✅ FETCH TIERS
  useEffect(() => {
    const fetchTiers = async () => {
      try {
        const res = await getAllTiers();
        setAllTiers(res);
      } catch (err) {
        console.error("Failed to load tiers", err);
      }
    };

    fetchTiers();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleSlot = (slot) => {
    const exists = formData.availableSlots.find((s) => s.id === slot.id);

    if (exists) {
      setFormData({
        ...formData,
        availableSlots: formData.availableSlots.filter(
          (s) => s.id !== slot.id
        ),
      });
    } else {
      setFormData({
        ...formData,
        availableSlots: [...formData.availableSlots, slot],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData, images);
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>

      {/* ================= BASIC INFO ================= */}
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-5 space-y-4">
        <h3 className="text-lg font-semibold text-white">Basic Info</h3>

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Table Name
          </label>
          <input
            name="tableName"
            value={formData.tableName}
            onChange={handleChange}
            placeholder="Enter table name"
            className="w-full bg-[#111] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">
            Table Type
          </label>
          <select
            name="tableType"
            value={formData.tableType}
            onChange={handleChange}
            className="w-full bg-[#111] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition"
          >
            <option value="REGULAR">REGULAR</option>
            <option value="PREMIUM">PREMIUM</option>
          </select>
        </div>
      </div>

      {/* ================= SLOTS ================= */}
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-5 space-y-4">
        <h3 className="text-lg font-semibold text-white">Available Slots</h3>

        <div className="grid grid-cols-2 gap-3 max-h-48 overflow-y-auto pr-1">
          {allSlots.map((slot) => {
            const isActive = formData.availableSlots.some(
              (s) => s.id === slot.id
            );

            return (
              <div
                key={slot.id}
                onClick={() => toggleSlot(slot)}
                className={`cursor-pointer px-3 py-2 rounded-xl border text-sm transition-all
                ${
                  isActive
                    ? "bg-green-500/10 border-green-500 text-green-400"
                    : "bg-[#111] border-gray-800 text-gray-300 hover:border-green-500/40"
                }`}
              >
                {slot.slotName}
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= PRICING TIERS (CLEAN DROPDOWN) ================= */}
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-5 space-y-4">
        <h3 className="text-lg font-semibold text-white">
          Pricing Tier
        </h3>

        <select
          name="tierId"
          value={formData.tierId}
          onChange={handleChange}
          className="w-full bg-[#111] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition"
        >
          <option value="">Select a pricing tier</option>

          {allTiers.map((tier) => (
            <option key={tier.id} value={tier.id}>
              {tier.hours} hr — ₹{tier.basePrice} ({tier.discountPercentage}% off)
            </option>
          ))}
        </select>

        {formData.tierId && (
          <p className="text-xs text-gray-500">
            Selected tier will be applied to this table
          </p>
        )}
      </div>

      {/* ================= IMAGES ================= */}
      {mode === "create" && (
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-5 space-y-3">
          <h3 className="text-lg font-semibold text-white">
            Upload Images
          </h3>

          <input
            type="file"
            multiple
            onChange={(e) => setImages([...e.target.files])}
            className="text-gray-400 text-sm"
          />
        </div>
      )}

      {/* ================= SUBMIT ================= */}
      <button className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-black font-semibold transition">
        {mode === "create" ? "Create Table" : "Update Table"}
      </button>

    </form>
  );
};

export default TableForm;