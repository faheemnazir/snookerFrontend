import React, { useState } from "react";
import logo from "../../assets/logo.png"

const premiumRates = [
  { hours: 1, rate: 600 },
  { hours: 2, rate: 550 },
  { hours: 3, rate: 500 },
];

const regularRates = [
  { hours: 1, rate: 480 },
  { hours: 2, rate: 400 },
  
];

const BookingPage = () => {
  const [type, setType] = useState("premium");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const data = type === "premium" ? premiumRates : regularRates;
  const baseRate = type === "premium" ? 600 : 480;

  return (
<div className="bg-black">
          {/* STICKY WATERMARK */}
          <img
            src={logo}
            className="fixed opacity-5 w-[900px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
          />
    <div className="bg-black text-white min-h-screen py-24 px-6">
      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6">
          Book a Table
        </h1>
        <div className="w-20 h-[2px] bg-green-500 mx-auto mb-6" />
        <p className="text-gray-500 max-w-xl mx-auto text-xl">
          Choose your table type and preferred session duration. Longer sessions offer better value.
        </p>
      </div>

      {/* TOGGLE */}
      <div className="flex justify-center mb-16">
        <div className="bg-[#111] rounded-xl p-1 border border-gray-800 flex text-2xl">
          <button
            onClick={() => setType("premium")}
            className={`px-6 py-2 rounded-lg transition ${
              type === "premium"
                ? "bg-green-500 text-black"
                : "text-gray-400"
            }`}
          >
            Premium Tables (2)
          </button>
          <button
            onClick={() => setType("regular")}
            className={`px-6 py-2 rounded-lg transition ${
              type === "regular"
                ? "bg-green-500 text-black "
                : "text-gray-400"
            }`}
          >
            Regular Tables (3)
          </button>
        </div>
      </div>

      {/* CARDS */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        {data.map((item, i) => {
          const total = item.rate * item.hours;
          const original = baseRate * item.hours;
          const discount = Math.round(((original - total) / original) * 100);

          return (
            <div
              key={i}
              className="flex flex-col justify-between bg-[#111]/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-green-500/40 transition duration-300 hover:-translate-y-1"
            >
              <div>
                <h3 className="text-2xl mb-3">
                  {item.hours}Hour{item.hours > 1 ? "s+" : "+"}
                </h3>

                <p className="text-gray-400 text-xl mb-2">₹{item.rate}/hr</p>

                {item.hours > 1 && (
                  <p className="text-xl text-gray-500 line-through mb-2">
                    ₹{original}
                  </p>
                )}

                <div className="flex items-center gap-3 mb-6">
                  <p className="text-3xl text-green-500 font-semibold">
                    ₹{total}
                  </p>

                  {item.hours > 1 && (
                    <span className="text-lg bg-green-500/10 text-green-500 px-2 py-1 rounded-full">
                      {discount}% OFF
                    </span>
                  )}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelected({ ...item, total });
                  setOpen(true);
                }}
                className="w-full py-3 text-2xl bg-green-500 text-black rounded-xl font-semibold hover:bg-green-600 transition"
              >
                Book Now
              </button>
            </div>
          );
        })}
      </div>

      {/* BOOKING MODAL */}
      {/* BOOKING MODAL */}
{open && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
    onClick={() => setOpen(false)}
  >
    <div
      className="bg-[#111] p-8 rounded-2xl max-w-md w-full border border-gray-800"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-3xl mb-4 text-center">Complete Booking</h2>

      <p className="text-gray-400 text-xl text-center mb-6">
        {type === "premium" ? "Premium" : "Regular"} •{" "}
        {selected?.hours} hr • ₹{selected?.total}
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 text-xl rounded-lg bg-black border border-gray-700 text-white outline-none focus:border-green-500"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-3 text-xl rounded-lg bg-black border border-gray-700 text-white outline-none focus:border-green-500"
        />

        <input
          type="date"
          className="w-full p-3 text-xl rounded-lg bg-black border border-gray-700 text-white outline-none focus:border-green-500"
        />

        <select className="w-full p-3 rounded-lg text-xl bg-black border border-gray-700 text-white outline-none focus:border-green-500">
          <option>Select Time Slot</option>
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
          <option>Night</option>
        </select>

        <button
          type="button"
          className="w-full py-3 text-xl bg-green-500 text-black rounded-xl font-semibold hover:bg-green-600 transition"
        >
          Confirm Booking
        </button>
      </form>

      <button
        onClick={() => setOpen(false)}
        className="mt-4 text-xl text-gray-400 hover:text-white w-full text-center"
      >
        Cancel
      </button>
    </div>
  </div>
)}
    </div>
    </div>

  );
};

export default BookingPage;