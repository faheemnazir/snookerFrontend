import React, { useState } from "react";
import { createTimeSlot } from "../../Services/api";
import { useNavigate } from "react-router-dom";
import SectionCard from "../common/SectionCard";

const CreateTimeSlot = () => {
  const [slotName, setSlotName] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!slotName || hour === "" || minute === "") {
      return alert("Please fill all fields");
    }

    const payload = {
      slotName,
      startTime: {
        hour: Number(hour),
        minute: Number(minute),
        second: 0,
        nano: 0,
      },
    };

    try {
      setLoading(true);
      await createTimeSlot(payload);

      navigate("/admin/slots");
    } catch (err) {
      console.error(err);
      alert("Failed to create slot");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">

      {/* PAGE HEADER */}
      <div className="border-b border-gray-800 pb-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Create Time Slot
        </h2>
        <p className="text-gray-500 mt-1">
          Define when tables can be booked
        </p>
      </div>

      {/* LAYOUT */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* LEFT - FORM */}
        <SectionCard
          title="Slot Details"
          description="Configure the slot name and start time"
        >
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* SLOT NAME */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Slot Name
              </label>
              <input
                type="text"
                value={slotName}
                onChange={(e) => setSlotName(e.target.value)}
                placeholder="e.g. Morning Slot"
                className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition"
              />
            </div>

            {/* TIME PICKER */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Start Time
              </label>

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">Hour</p>
                  <input
                    type="number"
                    min="0"
                    max="23"
                    value={hour}
                    onChange={(e) => setHour(e.target.value)}
                    placeholder="HH"
                    className="w-full bg-transparent outline-none text-white text-lg"
                  />
                </div>

                <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">Minute</p>
                  <input
                    type="number"
                    min="0"
                    max="59"
                    value={minute}
                    onChange={(e) => setMinute(e.target.value)}
                    placeholder="MM"
                    className="w-full bg-transparent outline-none text-white text-lg"
                  />
                </div>

              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-black font-semibold transition disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Slot"}
            </button>

          </form>
        </SectionCard>

        {/* RIGHT - INFO PANEL */}
        <div className="hidden md:flex flex-col gap-6">

          <div className="bg-[#111] border border-gray-800 rounded-xl p-5">
            <h3 className="text-lg mb-2">Tips</h3>
            <p className="text-gray-400 text-sm">
              • Use clear naming like “Morning”, “Evening” <br />
              • Keep time spacing consistent <br />
              • Avoid overlapping slots
            </p>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-xl p-5">
            <h3 className="text-lg mb-2">Preview</h3>
            <p className="text-gray-500 text-sm">
              {slotName || "Slot Name"} —{" "}
              {hour !== "" && minute !== ""
                ? `${hour.padStart(2, "0")}:${minute.padStart(2, "0")}`
                : "HH:MM"}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default CreateTimeSlot;