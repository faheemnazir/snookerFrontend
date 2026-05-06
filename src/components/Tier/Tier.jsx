import React, { useEffect, useState } from "react";
import {
  createTier,
  getAllTiers,
  updateTier,
  deleteTier
} from "../../Services/api";
import { useNavigate } from "react-router-dom";
import SectionCard from "../common/SectionCard";

const Tier = () => {
  const [hours, setHours] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [loading, setLoading] = useState(false);


  const [tiers, setTiers] = useState([]);
  const [listLoading, setListLoading] = useState(false);
  const fetchTiers = async () => {
    try {
      setListLoading(true);

      const res = await getAllTiers();

      // handle both API response styles
      setTiers(Array.isArray(res) ? res : res?.data || []);

    } catch (err) {
      console.error("FETCH TIERS ERROR:", err);
      setTiers([]);
    } finally {
      setListLoading(false);
    }
  };
  const navigate = useNavigate();



  useEffect(() => {
    fetchTiers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (hours === "" || basePrice === "" || discountPercentage === "") {
      return alert("Please fill all fields");
    }

    if (
      hours <= 0 ||
      basePrice < 0 ||
      discountPercentage < 0 ||
      discountPercentage > 100
    ) {
      return alert("Invalid values");
    }

    const payload = {
      hours: Number(hours),
      basePrice: Number(basePrice),
      discountPercentage: Number(discountPercentage),
    };

    try {
      setLoading(true);
      await createTier(payload);

      await fetchTiers();

      // reset form
      setHours("");
      setBasePrice("");
      setDiscountPercentage("");
    } catch (err) {
      console.error(err);
      alert(
        err.response?.data ||
        err.message ||
        "Failed to create tier"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">

      {/* PAGE HEADER */}
      <div className="border-b border-gray-800 pb-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Create Pricing Tier
        </h2>
        <p className="text-gray-500 mt-1">
          Define pricing based on duration
        </p>
      </div>

      {/* LAYOUT */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* LEFT - FORM */}
        <SectionCard
          title="Tier Details"
          description="Set hours, base price and discount"
        >
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Hours
              </label>
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                placeholder="e.g. 2"
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Base Price
              </label>
              <input
                type="number"
                value={basePrice}
                onChange={(e) => setBasePrice(e.target.value)}
                placeholder="e.g. 1000"
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Discount (%)
              </label>
              <input
                type="number"
                value={discountPercentage}
                onChange={(e) =>
                  setDiscountPercentage(e.target.value)
                }
                placeholder="e.g. 10"
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-black font-semibold transition disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Tier"}
            </button>

          </form>
        </SectionCard>


      </div>

      {/* ================= TIER LIST ================= */}
      <SectionCard
        title="All Pricing Tiers"
        description="View and manage existing tiers"
      >
        <div className="grid md:grid-cols-3 gap-6">

       {listLoading ? (
  <p className="text-gray-500">Loading tiers...</p>
) : tiers.length === 0 ? (
  <p className="text-gray-500">No tiers found</p>
) : (
  tiers.map((t) => (
    <div
      key={t.id}
      className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-4 space-y-3"
    >
      <h3 className="text-lg">{t.hours} Hours</h3>

      <p className="text-gray-400 text-sm">
        ₹{t.basePrice} — {t.discountPercentage}% off
      </p>

      <div className="flex gap-2">

        {/* ✅ EDIT BUTTON */}
        <button
          onClick={async () => {
            const newHours = prompt("Enter hours", t.hours);
            const newPrice = prompt("Enter base price", t.basePrice);
            const newDiscount = prompt(
              "Enter discount %",
              t.discountPercentage
            );

            if (
              newHours === null ||
              newPrice === null ||
              newDiscount === null
            ) return;

            try {
              await updateTier(t.id, {
                hours: Number(newHours),
                basePrice: Number(newPrice),
                discountPercentage: Number(newDiscount),
              });

              // refresh list after update
              await fetchTiers();

            } catch (err) {
              console.error("UPDATE ERROR:", err);
              alert(
                err.response?.data ||
                err.message ||
                "Failed to update tier"
              );
            }
          }}
          className="flex-1 border border-green-500 py-2 rounded-xl text-sm"
        >
          Edit
        </button>

        {/* ❌ DELETE BUTTON */}
        <button
          onClick={async () => {
            if (!window.confirm("Delete this tier?")) return;

            try {
              await deleteTier(t.id);

              setTiers((prev) =>
                prev.filter((tier) => tier.id !== t.id)
              );
            } catch (err) {
              console.error("DELETE ERROR:", err);
              alert(
                err.response?.data ||
                err.message ||
                "Failed to delete tier"
              );
            }
          }}
          className="flex-1 border border-gray-700 py-2 rounded-xl text-sm"
        >
          Delete
        </button>

      </div>
    </div>
  ))
)}

        </div>
      </SectionCard>

    </div>
  );
};

export default Tier;