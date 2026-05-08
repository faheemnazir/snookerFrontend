import React, { useEffect, useMemo, useState } from "react";
import logo from "../../assets/logo.png";

import {
  initiateBooking,
  getBookingTables,
  verifyPayment,
} from "../../Services/api";

const BookingPage = () => {
  const [type, setType] = useState("premium");

  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState(null);

  const [tables, setTables] = useState([]);

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    tableId: "",
    tierId: "",
    guestName: "",
    guestEmail: "",
    guestPhone: "",
    bookingDate: new Date().toISOString().split("T")[0],
    startTime: "",
  });

  // FETCH TABLES
  const fetchTables = async () => {
    try {
      const response = await getBookingTables(
        formData.bookingDate
      );

      setTables(Array.isArray(response) ? response : []);

    } catch (err) {
      console.log(err);
      setTables([]);
    }
  };

  useEffect(() => {
    fetchTables();
  }, [formData.bookingDate]);

  // FILTER TABLES
  const filteredTables = useMemo(() => {
    return tables.filter(
      (t) =>
        t.tableType?.toUpperCase() ===
        type.toUpperCase()
    );
  }, [tables, type]);

  const premiumCount = useMemo(
    () =>
      tables.filter(
        (t) =>
          t.tableType?.toUpperCase() === "PREMIUM"
      ).length,
    [tables]
  );

  const regularCount = useMemo(
    () =>
      tables.filter(
        (t) =>
          t.tableType?.toUpperCase() === "REGULAR"
      ).length,
    [tables]
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  // VALIDATION
  const validateForm = () => {
    if (!formData.guestName.trim()) {
      setError("Name is required");
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(formData.guestPhone)) {
      setError(
        "Phone number must be exactly 10 digits"
      );
      return false;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

    if (!formData.startTime) {
      setError("Please select start time");
      return false;
    }

    return true;
  };

  // LOAD RAZORPAY
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

  // SUBMIT BOOKING
  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);

      const isLoaded = await loadRazorpaySDK();

      if (!isLoaded) {
        setError("Razorpay SDK failed to load");
        return;
      }

      // CREATE BOOKING
      const response = await initiateBooking({
        tableId: Number(formData.tableId),

        tierId: Number(formData.tierId),

        guestName: formData.guestName,

        guestEmail: formData.guestEmail,

        guestPhone: formData.guestPhone,

        bookingDate: formData.bookingDate,

        startTime: formData.startTime,
      });

      // RAZORPAY
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,

        amount: response.amount * 100,

        currency: response.currency || "INR",

        name: "Snooker Club",

        description: `${type} Table Booking`,

        order_id: response.razorpayOrderId,

        handler: async function (paymentResponse) {
          try {
            await verifyPayment({
              bookingId: response.bookingId,

              razorpayOrderId:
                paymentResponse.razorpay_order_id,

              razorpayPaymentId:
                paymentResponse.razorpay_payment_id,

              razorpaySignature:
                paymentResponse.razorpay_signature,
            });

            setSuccess(true);

            await fetchTables();

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

      {/* WATERMARK */}
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
            Choose your table type and preferred
            session duration.
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
              Premium Tables ({premiumCount})
            </button>

            <button
              onClick={() => setType("regular")}
              className={`px-6 py-2 rounded-lg transition ${
                type === "regular"
                  ? "bg-green-500 text-black"
                  : "text-gray-400"
              }`}
            >
              Regular Tables ({regularCount})
            </button>

          </div>
        </div>

        {/* TABLES */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {filteredTables.map((table) => (
            <div
              key={table.id}
              className="bg-[#111]/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-800"
            >

              <h2 className="text-3xl font-semibold mb-2">
                {table.tableName}
              </h2>

              <p className="text-gray-500 mb-8">
                {table.tableType}
              </p>

              {/* TIERS */}
              <div className="space-y-4">

                {table.availableTiers
                  ?.sort((a, b) => a.hours - b.hours)
                  .map((tier) => {

                    const total =
                      tier.basePrice *
                      (1 -
                        tier.discountPercentage / 100);

                    return (
                      <button
                        key={tier.id}
                        onClick={() => {
                          setSelected({
                            ...tier,
                            total,
                            table,
                          });

                          setFormData((prev) => ({
                            ...prev,
                            tableId: table.id,
                            tierId: tier.id,
                          }));

                          setOpen(true);
                        }}
                        className="w-full border border-gray-700 rounded-xl p-4 text-left hover:border-green-500 transition"
                      >

                        <div className="flex justify-between items-center">

                          <div>
                            <p className="text-xl">
                              {tier.hours} Hour
                            </p>

                            <p className="text-gray-500">
                              {tier.discountPercentage}% OFF
                            </p>
                          </div>

                          <div className="text-right">
                            <p className="text-2xl font-semibold text-green-500">
                              ₹{total.toFixed(0)}
                            </p>
                          </div>

                        </div>
                      </button>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {open && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
            onClick={() => setOpen(false)}
          >

            <div
              className="bg-[#111] p-8 rounded-2xl max-w-md w-full border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >

              {success ? (
                <div className="text-center">

                  <h2 className="text-4xl text-green-500 mb-4">
                    Booking Confirmed
                  </h2>

                  <p className="text-gray-400 mb-6">
                    Your table has been reserved successfully.
                  </p>

                  <button
                    onClick={() => {
                      setOpen(false);

                      setSuccess(false);

                      setFormData({
                        tableId: "",
                        tierId: "",
                        guestName: "",
                        guestEmail: "",
                        guestPhone: "",
                        bookingDate:
                          new Date()
                            .toISOString()
                            .split("T")[0],
                        startTime: "",
                      });
                    }}
                    className="w-full py-3 bg-green-500 text-black rounded-xl font-semibold"
                  >
                    Close
                  </button>

                </div>
              ) : (
                <>
                  <h2 className="text-3xl mb-4 text-center">
                    Complete Booking
                  </h2>

                  {error && (
                    <div className="mb-4 bg-red-500/10 border border-red-500 text-red-400 text-sm rounded-lg p-3 text-center">
                      {error}
                    </div>
                  )}

                  <p className="text-gray-400 text-xl text-center mb-6">
                    {selected?.table?.tableName} •{" "}
                    {selected?.hours} hr • ₹
                    {selected?.total?.toFixed(0)}
                  </p>

                  {/* OCCUPIED */}
                  {selected?.table?.occupiedRanges
                    ?.length > 0 && (
                    <div className="mb-6">
                      <p className="text-red-400 mb-2">
                        Occupied Slots
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {selected.table.occupiedRanges.map(
                          (range, i) => (
                            <span
                              key={i}
                              className="bg-red-500/10 border border-red-500 text-red-400 px-3 py-1 rounded-full text-sm"
                            >
                              {range}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}

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
                      type="email"
                      name="guestEmail"
                      placeholder="Email Address"
                      value={formData.guestEmail}
                      onChange={handleChange}
                      className="w-full p-3 text-xl rounded-lg bg-black border border-gray-700 text-white outline-none focus:border-green-500"
                    />

                    <input
                      type="date"
                      name="bookingDate"
                      min={
                        new Date()
                          .toISOString()
                          .split("T")[0]
                      }
                      value={formData.bookingDate}
                      onChange={handleChange}
                      className="w-full p-3 text-xl rounded-lg bg-black border border-gray-700 text-white outline-none focus:border-green-500"
                    />

                    <input
                      type="time"
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleChange}
                      className="w-full p-3 text-xl rounded-lg bg-black border border-gray-700 text-white outline-none focus:border-green-500"
                    />

                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={loading}
                      className="w-full py-3 text-xl bg-green-500 text-black rounded-xl font-semibold hover:bg-green-600 transition disabled:opacity-50"
                    >
                      {loading
                        ? "Processing..."
                        : "Confirm Booking"}
                    </button>

                  </form>

                  <button
                    onClick={() => setOpen(false)}
                    className="mt-4 text-xl text-gray-400 hover:text-white w-full text-center"
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;