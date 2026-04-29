import React, { useState } from "react";
import { X, CalendarDays, Clock } from "lucide-react";

const BookingModal = ({ table, onClose, onConfirm, initialData }) => {
  const [date, setDate] = useState(initialData?.date || "");
  const [startTime, setStartTime] = useState(initialData?.startTime || "");
  const [endTime, setEndTime] = useState(initialData?.endTime || "");

  const handleSubmit = () => {
    if (!date || !startTime || !endTime) return;

    if (startTime >= endTime) {
      alert("End time must be after start time");
      return;
    }

    onConfirm({
      tableId: table.id,
      tableName: table.name,
      date,
      startTime,
      endTime,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 px-4">
      <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl w-full max-w-md p-7 relative shadow-xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-heading font-semibold mb-8 tracking-wide">
          {initialData ? "Edit Booking" : "Book"} {table?.name}
        </h2>

        <div className="space-y-6">
          {/* Date */}
          <div>
            <label className="text-sm text-gray-400 mb-2 flex items-center gap-2">
              <CalendarDays size={16} /> Select Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white
              focus:outline-none focus:border-green-500 transition-all duration-300
              appearance-none [color-scheme:dark] hover:border-green-500/50"
            />
          </div>

          {/* Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                <Clock size={16} /> Start
              </label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white
                focus:outline-none focus:border-green-500 transition-all duration-300
                appearance-none [color-scheme:dark] hover:border-green-500/50"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                <Clock size={16} /> End
              </label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white
                focus:outline-none focus:border-green-500 transition-all duration-300
                appearance-none [color-scheme:dark] hover:border-green-500/50"
              />
            </div>
          </div>
        </div>

        {/* Action */}
        <button
          onClick={handleSubmit}
          className="mt-10 w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.04] shadow-lg hover:shadow-green-500/30"
        >
          {initialData ? "Update Booking" : "Confirm Booking"}
        </button>
      </div>
    </div>
  );
};

export default BookingModal;