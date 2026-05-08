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
const [isModalOpen, setIsModalOpen] = useState(false);

return (
  <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-8">

    {/* HEADER */}
    <div className="flex items-center justify-between border-b border-gray-800 pb-4">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Pricing Tiers
        </h2>
        <p className="text-gray-500 mt-1">
          Define pricing based on duration
        </p>
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-green-500 hover:bg-green-600 text-black px-5 py-2 rounded-xl font-medium transition"
      >
        + Create Tier
      </button>
    </div>

    {/* TIER LIST */}
    <SectionCard
      title="All Pricing Tiers"
      description="View and manage existing tiers"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {listLoading ? (
          <p className="text-gray-500">Loading tiers...</p>
        ) : tiers.length === 0 ? (
          <p className="text-gray-500">No tiers found</p>
        ) : (
          tiers.map((t) => (
            <div
              key={t.id}
              className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-4 space-y-4"
            >

              {/* TITLE */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  {t.hours} Hours
                </h3>

                <button
                  onClick={async () => {
                    if (!window.confirm("Delete this tier?")) return;

                    try {
                      await deleteTier(t.id);
                      setTiers((prev) =>
                        prev.filter((tier) => tier.id !== t.id)
                      );
                    } catch (err) {
                      alert("Delete failed");
                    }
                  }}
                  className="text-red-400 hover:text-red-500 text-sm"
                >
                  Delete
                </button>
              </div>

              {/* PRICE */}
              <div>
                <p className="text-gray-400 text-sm">Base Price</p>
                <p className="text-2xl font-bold text-white">
                  ₹{t.basePrice}
                </p>
              </div>

              {/* DISCOUNT */}
              <div>
                <p className="text-gray-400 text-sm">Discount</p>
                <p className="text-green-400 font-medium">
                  {t.discountPercentage}% OFF
                </p>
              </div>

              {/* FINAL PRICE */}
              <div>
                <p className="text-gray-400 text-sm">Final Price</p>
                <p className="text-xl font-semibold text-green-500">
                  ₹
                  {(
                    t.basePrice *
                    (1 - t.discountPercentage / 100)
                  ).toFixed(0)}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={async () => {
                    const newHours = prompt("Enter hours", t.hours);
                    const newPrice = prompt("Enter base price", t.basePrice);
                    const newDiscount = prompt(
                      "Enter discount %",
                      t.discountPercentage
                    );

                    if (!newHours || !newPrice || !newDiscount) return;

                    try {
                      await updateTier(t.id, {
                        hours: Number(newHours),
                        basePrice: Number(newPrice),
                        discountPercentage: Number(newDiscount),
                      });

                      await fetchTiers();
                    } catch {
                      alert("Update failed");
                    }
                  }}
                  className="flex-1 border border-green-500 py-2 rounded-xl text-sm hover:bg-green-500 hover:text-black transition"
                >
                  Edit
                </button>
              </div>

            </div>
          ))
        )}

      </div>
    </SectionCard>

    {/* MODAL */}
    {isModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

        <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 w-full max-w-md relative">

          {/* CLOSE */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-white"
          >
            ✕
          </button>

          <h3 className="text-xl font-semibold mb-4">
            Create Tier
          </h3>

          {/* SAME FORM (UNCHANGED) */}
          <form
            onSubmit={async (e) => {
              await handleSubmit(e);
              setIsModalOpen(false);
            }}
            className="space-y-6"
          >

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Hours
              </label>
              <input
                required
                type="number"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Base Price
              </label>
              <input
                required
                type="number"
                value={basePrice}
                onChange={(e) => setBasePrice(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Discount (%)
              </label>
              <input
                required
                type="number"
                value={discountPercentage}
                onChange={(e) =>
                  setDiscountPercentage(e.target.value)
                }
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-black font-semibold"
            >
              {loading ? "Creating..." : "Create Tier"}
            </button>

          </form>

        </div>
      </div>
    )}

  </div>
);
};

export default Tier;