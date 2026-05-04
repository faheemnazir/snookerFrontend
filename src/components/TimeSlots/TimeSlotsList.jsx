import React, { useEffect, useState } from "react";
import { getAllSlots, deleteTimeSlot } from "../../Services/api";
import { useNavigate } from "react-router-dom";

const TimeSlotsList = () => {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchSlots = async () => {
    try {
      const res = await getAllSlots();
      setSlots(res);
    } catch (err) {
      console.error(err);
      alert("Failed to load slots");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSlots();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this slot?")) return;

    try {
      await deleteTimeSlot(id);
      setSlots((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  const formatTime = (time) => {
    if (!time) return "";
    return `${String(time.hour).padStart(2, "0")}:${String(
      time.minute
    ).padStart(2, "0")}`;
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-800 pb-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
            Time Slots
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Manage all available time slots
          </p>
        </div>

        <button
          onClick={() => navigate("/admin/create-slot")}
          className="bg-green-500 hover:bg-green-600 text-black px-5 py-2.5 rounded-xl font-semibold transition"
        >
          + Create Slot
        </button>
      </div>

      {/* STATES */}
      {loading ? (
        <div className="text-center text-gray-500 py-10">
          Loading slots...
        </div>
      ) : slots.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          No slots available.
        </div>
      ) : (

        /* GRID */
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {slots.map((slot) => (
            <div
              key={slot.id}
              className="bg-[#111] border border-gray-800 rounded-xl p-5 hover:border-green-500/40 transition-all duration-300"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">
                  {slot.slotName}
                </h3>

                <p className="text-sm text-gray-400">
                  Time:{" "}
                  <span className="text-green-400">
                    {formatTime(slot.startTime)}
                  </span>
                </p>
              </div>

              {/* ACTION */}
              <button
                onClick={() => handleDelete(slot.id)}
                className="w-full mt-4 border border-gray-700 hover:border-red-500 text-gray-300 hover:text-red-400 py-2 rounded-xl text-sm font-semibold transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeSlotsList;