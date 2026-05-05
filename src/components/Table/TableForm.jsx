import React, { useEffect, useState } from "react";
import { getAllSlots } from "../../Services/api";

const TableForm = ({ onSubmit, initialData = {}, mode = "create" }) => {
  const [formData, setFormData] = useState({
    tableName: initialData.tableName || "",
    tableType: initialData.tableType || "REGULAR",
    availableSlots: initialData.availableSlots || [],
    availableTiers: initialData.availableTiers || [],
  });

  const [allSlots, setAllSlots] = useState([]);
  const [images, setImages] = useState([]);


useEffect(() => {
  if (initialData && Object.keys(initialData).length > 0) {
    setFormData({
      tableName: initialData.tableName || "",
      tableType: initialData.tableType || "REGULAR",
      availableSlots: initialData.availableSlots || [],
      availableTiers: initialData.availableTiers || [],
    });
  }
}, []); // 🔥 RUN ONLY ONCE




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

  const addTier = () => {
    setFormData({
      ...formData,
      availableTiers: [
        ...formData.availableTiers,
        { hours: 1, basePrice: 0, discountPercentage: 0 },
      ],
    });
  };

  const updateTier = (index, field, value) => {
    const updated = [...formData.availableTiers];
    updated[index][field] = value;
    setFormData({ ...formData, availableTiers: updated });
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

      {/* ================= PRICING ================= */}
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-5 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white">
            Pricing Tiers
          </h3>

          <button
            type="button"
            onClick={addTier}
            className="text-sm text-green-400 hover:text-green-300 transition"
          >
            + Add Tier
          </button>
        </div>

        <div className="space-y-3">
          {formData.availableTiers.map((tier, i) => (
            <div
              key={i}
              className="grid grid-cols-3 gap-3 bg-[#111] border border-gray-800 p-3 rounded-xl"
            >
              <input
                type="number"
                value={tier.hours}
                onChange={(e) =>
                  updateTier(i, "hours", +e.target.value)
                }
                placeholder="Hours"
                className="bg-transparent outline-none text-white"
              />

              <input
                type="number"
                value={tier.basePrice}
                onChange={(e) =>
                  updateTier(i, "basePrice", +e.target.value)
                }
                placeholder="Price"
                className="bg-transparent outline-none text-white"
              />

              <input
                type="number"
                value={tier.discountPercentage}
                onChange={(e) =>
                  updateTier(i, "discountPercentage", +e.target.value)
                }
                placeholder="% Discount"
                className="bg-transparent outline-none text-white"
              />
            </div>
          ))}
        </div>
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