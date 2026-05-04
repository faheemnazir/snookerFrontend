import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png"
import {
  initiateBooking,
  getAllTables,
   getAllSlots,
  verifyPayment,
} from "../../Services/api"

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
const [tables, setTables] = useState([]);
const [slots, setSlots] = useState([]);

const [error, setError] = useState("");

const [loading, setLoading] = useState(false);

const [formData, setFormData] = useState({
  tableId: "",
  slotId: "",
  guestName: "",
  guestEmail: "",
  guestPhone: "",
  bookingDate: "",
});

  const data = type === "premium" ? premiumRates : regularRates;
  const baseRate = type === "premium" ? 600 : 480;


useEffect(() => {
  fetchTables();
   fetchSlots();
}, [type]);

const fetchTables = async () => {
  try {
    const response = await getAllTables(type);
console.log(response)

    setTables(response);
  } catch (err) {
    console.log(err);
  }
};


const fetchSlots = async () => {
  try {
    const response = await getAllSlots();

    console.log("SLOTS:", response);

    if (Array.isArray(response)) {
      setSlots(response);
    } else {
      setSlots([]);
    }

  } catch (err) {
    console.log(err);
    setSlots([]);
  }
};



const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });

  setError("");
};

const validateForm = () => {
  if (!formData.guestName.trim()) {
    setError("Name is required");
    return false;
  }

  const phoneRegex = /^[0-9]{10}$/;

  if (!phoneRegex.test(formData.guestPhone)) {
    setError("Phone number must be exactly 10 digits");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(formData.guestEmail)) {
    setError("Enter a valid email");
    return false;
  }

  if (!formData.bookingDate) {
    setError("Please select booking date");
    return false;
  }

  if (!formData.tableId) {
    setError("Please select a table");
    return false;
  }

if (!formData.slotId) {
  setError("Please select a time slot");
  return false;
}

  return true;
};


const loadRazorpaySDK = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");

    script.src =
      "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => resolve(true);

    script.onerror = () => resolve(false);

    document.body.appendChild(script);
  });
};







const handleSubmit = async () => {
  if (!validateForm()) return;

  try {
    setLoading(true);

    // Load Razorpay SDK
    const isLoaded = await loadRazorpaySDK();

    if (!isLoaded) {
      setError("Razorpay SDK failed to load");
      return;
    }

    // Step 1 → Create booking
    const response = await initiateBooking({
      tableId: Number(formData.tableId),
      slotId: Number(formData.slotId),
      guestName: formData.guestName,
      guestEmail: formData.guestEmail,
      guestPhone: formData.guestPhone,
      bookingDate: formData.bookingDate,
    });

    console.log("BOOKING RESPONSE:", response);


    // Step 2 → Open Razorpay
    const options = {
     key: import.meta.env.VITE_RAZORPAY_KEY,

      amount: response.amount * 100,

      currency: response.currency || "INR",

      name: "Snooker Club",

      description: `${type} Table Booking`,

      order_id: response.razorpayOrderId,

handler: async function (paymentResponse) {

  try {

    console.log("PAYMENT SUCCESS:", paymentResponse);

    // Verify payment with backend
    const verifyResponse = await verifyPayment({
      bookingId: response.bookingId,

      razorpayOrderId:
        paymentResponse.razorpay_order_id,

      razorpayPaymentId:
        paymentResponse.razorpay_payment_id,

      razorpaySignature:
        paymentResponse.razorpay_signature,
    });

    console.log("VERIFY RESPONSE:", verifyResponse);

    alert("Booking Confirmed Successfully!");

    setOpen(false);

    // Optional reset
    setFormData({
      tableId: "",
      slotId: "",
      guestName: "",
      guestEmail: "",
      guestPhone: "",
      bookingDate: "",
    });

  } catch (err) {

    console.log(err);

    alert(
      err.response?.data ||
      "Payment verification failed"
    );
  }
},



      prefill: {
        name: formData.guestName,
        email: formData.guestEmail,
        contact: formData.guestPhone,
      },

      theme: {
        color: "#22c55e",
      },

      modal: {
        ondismiss: function () {
          console.log("Payment popup closed");
        },
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.open();

  } catch (err) {

    console.log(err);

    setError(
      err.response?.data?.message ||
      "Booking failed"
    );

  } finally {

    setLoading(false);

  }
};

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
{error && (
  <div className="mb-4 bg-red-500/10 border border-red-500 text-red-400 text-sm rounded-lg p-3 text-center">
    {error}
  </div>
)}
        {type === "premium" ? "Premium" : "Regular"} •{" "}
        {selected?.hours} hr • ₹{selected?.total}
      </p>

      <form className="space-y-4">
        <input
  type="text"
  name="guestName"
  placeholder="Your Name"
  value={formData.guestName}
  onChange={handleChange}
  className="w-full p-3 text-xl rounded-lg bg-black border border-gray-700 text-white outline-none focus:border-green-500"
/>

<input
  type="tel"
  name="guestPhone"
  placeholder="Phone Number"
  value={formData.guestPhone}
  onChange={handleChange}
  className="w-full p-3 text-xl rounded-lg bg-black border border-gray-700 text-white outline-none focus:border-green-500"
/>

    <input
  type="date"
  name="bookingDate"
  value={formData.bookingDate}
  onChange={handleChange}
  className="w-full p-3 text-xl rounded-lg bg-black border border-gray-700 text-white outline-none focus:border-green-500"
/>
         
         <input
  type="email"
  name="guestEmail"
  placeholder="Email Address"
  value={formData.guestEmail}
  onChange={handleChange}
  className="w-full p-3 text-xl rounded-lg bg-black border border-gray-700 text-white outline-none focus:border-green-500"
/>

<select
  name="tableId"
  value={formData.tableId}
  onChange={handleChange}
  className="w-full p-3 rounded-lg text-xl bg-black border border-gray-700 text-white outline-none focus:border-green-500"
>
  <option value="">Select Table</option>
{Array.isArray(tables) &&
  tables.map((table) => (
    <option key={table.id} value={table.id}>
      {table.tableName}
    </option>
))}
  
</select>



<select
  name="slotId"
  value={formData.slotId}
  onChange={handleChange}
  className="w-full p-3 rounded-lg text-xl bg-black border border-gray-700 text-white outline-none focus:border-green-500"
>
  <option value="">Select Time Slot</option>

  {Array.isArray(slots) &&
    slots.map((slot) => (
      <option key={slot.id} value={slot.id}>
        {slot.slotName}
      </option>
    ))}
</select>





       <button
  type="button"
  onClick={handleSubmit}
  disabled={loading}
  className="w-full py-3 text-xl bg-green-500 text-black rounded-xl font-semibold hover:bg-green-600 transition disabled:opacity-50"
>
  {loading ? "Processing..." : "Confirm Booking"}
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