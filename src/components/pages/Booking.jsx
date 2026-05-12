<<<<<<< HEAD

import React, { useEffect, useMemo, useState } from "react";
import logo from "../../assets/logo.png";
import main from "../../assets/main.png";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img1 from "../../assets/img1.jpg";
=======
import React, { useEffect, useMemo, useState } from "react";
import logo from "../../assets/logo.png";
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389

import {
  initiateBooking,
  getBookingTables,
  verifyPayment,
} from "../../Services/api";

const BookingPage = () => {
  const [type, setType] = useState("premium");
<<<<<<< HEAD
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [main, img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);
=======
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389

  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState(null);

  const [tables, setTables] = useState([]);

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);
<<<<<<< HEAD
 
  const [viewMonth, setViewMonth] = useState(new Date().getMonth());
  const [viewYear, setViewYear] = useState(new Date().getFullYear());
=======
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389

  const [formData, setFormData] = useState({
    tableId: "",
    tierId: "",
    guestName: "",
    guestEmail: "",
    guestPhone: "",
    bookingDate: new Date().toISOString().split("T")[0],
    startTime: "",
  });

<<<<<<< HEAD
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [detailsTable, setDetailsTable] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

=======
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
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

<<<<<<< HEAD
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (open || detailsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open, detailsOpen]);

=======
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
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

<<<<<<< HEAD
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(formData.guestName)) {
      setError("Name must contain only letters and spaces");
      return false;
    }

=======
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
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

<<<<<<< HEAD
    const now = new Date();
    const selectedDateTime = new Date(`${formData.bookingDate}T${formData.startTime}`);
   
    if (selectedDateTime < now) {
      setError("Cannot book a time slot in the past. Please choose a future time.");
      return false;
    }

=======
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
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

<<<<<<< HEAD
            setPaymentDetails({
              txnId: paymentResponse.razorpay_payment_id,
              amount: response.amount,
            });

            setSuccess(true);

            // Clear form data after success
            setFormData({
              tableId: "",
              tierId: "",
              guestName: "",
              guestEmail: "",
              guestPhone: "",
              bookingDate: new Date().toISOString().split("T")[0],
              startTime: "",
            });

=======
            setSuccess(true);

>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
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
<<<<<<< HEAD
          (typeof err.response?.data === 'string' ? err.response.data : null) ||
          "Booking failed. This time slot might already be reserved."
=======
          "Booking failed"
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
      );

    } finally {
      setLoading(false);
    }
  };

  return (
<<<<<<< HEAD
    <div className="bg-background min-h-screen text-white relative overflow-hidden">

      {/* Cinematic Background Overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#004D40]/20 to-[#0A0A0A]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1609102029121-66f3900b4672?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
      </div>

      <div className="relative z-10 py-24 px-6 md:px-12 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
         
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
            Master the Frame
          </h1>
          <p className="text-muted-foreground font-light text-md max-w-xl mx-auto leading-relaxed">
            Choose your table grade and preferred session duration. Elevate your game in our premium sanctuary.
=======
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
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
          </p>
        </div>

        {/* TOGGLE */}
<<<<<<< HEAD
        <div className="flex justify-center mb-12">
          <div className="bg-card/50 backdrop-blur-sm border border-white/5 flex rounded-full overflow-hidden p-1">
            <button
              onClick={() => setType("premium")}
              className={`px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                type === "premium"
                  ? "bg-accent text-background"
                  : "text-muted-foreground hover:text-white"
=======
        <div className="flex justify-center mb-16">
          <div className="bg-[#111] rounded-xl p-1 border border-gray-800 flex text-2xl">

            <button
              onClick={() => setType("premium")}
              className={`px-6 py-2 rounded-lg transition ${
                type === "premium"
                  ? "bg-green-500 text-black"
                  : "text-gray-400"
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
              }`}
            >
              Premium Tables ({premiumCount})
            </button>
<<<<<<< HEAD
            <button
              onClick={() => setType("regular")}
              className={`px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                type === "regular"
                  ? "bg-accent text-background"
                  : "text-muted-foreground hover:text-white"
=======

            <button
              onClick={() => setType("regular")}
              className={`px-6 py-2 rounded-lg transition ${
                type === "regular"
                  ? "bg-green-500 text-black"
                  : "text-gray-400"
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
              }`}
            >
              Regular Tables ({regularCount})
            </button>
<<<<<<< HEAD
          </div>
        </div>

     {/* TABLES GRID */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredTables.map((table) => {
    const isSelected = selected?.table?.id === table.id;

    return (
      <div
        key={table.id}
        onClick={() => {
          setDetailsTable(table);
          setDetailsOpen(true);
        }}
        className={`group relative overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-500 cursor-pointer flex flex-col justify-between
          
          ${
            isSelected
              ? "border-accent bg-accent/5 -translate-y-3 shadow-[0_20px_50px_rgba(197,160,89,0.15)]"
              : "border-white/10 bg-card/60 hover:border-accent/40 hover:-translate-y-2"
          }
        `}
      >
        {/* GLOW */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.12),transparent_60%)] pointer-events-none" />

        {/* IMAGE */}
        {table.imageUrls && table.imageUrls.length > 0 && (
          <div className="aspect-[16/10] overflow-hidden relative">
            <img
              src={table.imageUrls[0]}
              alt={table.tableName}
              className={`w-full h-full object-cover transition-all duration-700 
                ${
                  isSelected
                    ? "scale-110"
                    : "scale-100 group-hover:scale-105"
                }`}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* BADGE */}
            <div className="absolute top-4 left-4">
              <span
                className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-2 rounded-full border backdrop-blur-md
                ${
                  table.tableType === "PREMIUM"
                    ? "bg-accent/10 text-accent border-accent/30"
                    : "bg-black/40 text-white border-white/10"
                }`}
              >
                {table.tableType}
              </span>
            </div>

            {/* VIEW */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">
                View Details
              </span>
            </div>
          </div>
        )}

        {/* CONTENT */}
        <div className="p-7 flex flex-col flex-1">
          {/* TITLE */}
          <div className="mb-5">
            <h2 className="font-heading text-2xl font-bold text-white mb-3">
              {table.tableName}
            </h2>

            <p className="text-white/60 text-sm leading-relaxed">
              {table.tableType === "PREMIUM"
                ? "Tournament-grade setup with Strachan 6811 cloth, professional Aramith Pro-Cup balls, and precision cushions."
                : "Club-grade setup maintained for smooth gameplay and casual premium sessions."}
            </p>
          </div>

          {/* TIERS */}
          <div className="space-y-3 mb-7">
            {table.availableTiers
              ?.sort((a, b) => a.hours - b.hours)
              .map((tier) => {
                const total =
                  tier.basePrice *
                  (1 - tier.discountPercentage / 100);

                const active =
                  selected?.id === tier.id &&
                  selected?.table?.id === table.id;

                return (
                  <button
                    key={tier.id}
                    onClick={(e) => {
                      e.stopPropagation();

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
                    }}
                    className={`w-full rounded-xl border p-4 text-left transition-all duration-300
                      
                      ${
                        active
                          ? "border-accent bg-accent/10 shadow-[0_0_25px_rgba(197,160,89,0.15)] scale-[1.02]"
                          : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                      }
                    `}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {tier.hours} Hour Session
                        </p>

                        <span className="text-[10px] uppercase tracking-widest text-accent font-bold">
                          {tier.discountPercentage}% OFF
                        </span>
                      </div>

                      <div className="text-right">
                        <p className="text-xs line-through text-white/40">
                          ₹{tier.basePrice}
                        </p>

                        <p className="text-xl font-bold text-accent">
                          ₹{total.toFixed(0)}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
          </div>

          {/* BUTTON */}
          <button
            onClick={(e) => {
              e.stopPropagation();

              const activeTier =
                selected?.table?.id === table.id
                  ? selected
                  : table.availableTiers?.sort(
                      (a, b) => a.hours - b.hours
                    )[0];

              if (activeTier) {
                const total =
                  activeTier.basePrice *
                  (1 -
                    activeTier.discountPercentage / 100);

                setSelected({
                  ...activeTier,
                  total,
                  table,
                });

                setFormData((prev) => ({
                  ...prev,
                  tableId: table.id,
                  tierId: activeTier.id,
                }));

                setOpen(true);
              }
            }}
            className="w-full text-xs font-bold uppercase tracking-widest py-2.5 bg-transparent border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 rounded-lg"
          >
            Quick Book
          </button>
        </div>
      </div>
    );
  })}
</div>

        {/* BOOKING MODAL */}
        {open && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 px-4"
            onClick={() => setOpen(false)}
          >
            <div
              className="bg-card p-8 max-w-4xl w-full border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {success ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent text-3xl">✓</span>
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-2">Booking Confirmed</h2>
                  <p className="text-muted-foreground text-sm font-light mb-6">Your table has been reserved successfully.</p>
                 
                  {paymentDetails && (
                    <div className="bg-background/50 p-6 mb-6 text-left space-y-3 border border-white/5 text-sm">
                      <p><span className="text-muted-foreground">Guest Name:</span> <span className="text-white">{formData.guestName}</span></p>
                      <p><span className="text-muted-foreground">Table:</span> <span className="text-white">{selected?.table?.tableName}</span></p>
                      <hr className="border-white/5" />
                      <p><span className="text-muted-foreground">Txn ID:</span> <span className="text-white font-mono text-xs">{paymentDetails.txnId}</span></p>
                      <p><span className="text-muted-foreground">Amount Paid:</span> <span className="text-accent font-bold">₹{paymentDetails.amount}</span></p>
                    </div>
                  )}
=======

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
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389

                  <button
                    onClick={() => {
                      setOpen(false);
<<<<<<< HEAD
                      setSuccess(false);
=======

                      setSuccess(false);

>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
                      setFormData({
                        tableId: "",
                        tierId: "",
                        guestName: "",
                        guestEmail: "",
                        guestPhone: "",
<<<<<<< HEAD
                        bookingDate: new Date().toISOString().split("T")[0],
                        startTime: "",
                      });
                    }}
                    className="w-full font-bold text-xs uppercase tracking-widest py-3 bg-accent text-background hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-heading text-2xl font-bold mb-4 text-center text-accent italic uppercase">Snooker Table Booking</h2>
                 
                  {/* STEPS INDICATOR */}
                  <div className="flex justify-center items-center gap-2 mb-6 text-[8px] uppercase font-bold tracking-widest text-muted-foreground">
                    <span className="text-accent">1. Date</span>
                    <span className="w-4 h-[1px] bg-white/10"></span>
                    <span>2. Slot & Duration</span>
                    <span className="w-4 h-[1px] bg-white/10"></span>
                    <span>3. Details</span>
                    <span className="w-4 h-[1px] bg-white/10"></span>
                    <span>4. Confirm</span>
                  </div>

                  {error && (
                    <div className="mb-4 bg-red-500/10 border border-red-500 text-red-400 text-xs p-3 text-center rounded-lg">
                      {error}
                    </div>
                  )}
                 
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#0C1D18] p-6 border border-accent/20 rounded-xl max-h-[75vh] overflow-y-auto">
                   
                    {/* LEFT COLUMN */}
                    <div className="space-y-6">
                     
                      {/* 1. DATE */}
                      <div className="bg-[#0A1412] p-4 rounded-lg border border-accent/10">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">1. Select Date</h3>
                       
                        {/* Inline Calendar */}
                        <div className="bg-background/50 p-4 border border-white/5 rounded-lg">
                          {(() => {
                            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                           
                            // Get days in month
                            const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
                            // Get first day of month
                            const firstDay = new Date(viewYear, viewMonth, 1).getDay();
                           
                            const days = [];
                            // Empty cells for first week
                            for (let i = 0; i < firstDay; i++) {
                              days.push(null);
                            }
                            // Days of month
                            for (let i = 1; i <= daysInMonth; i++) {
                              days.push(i);
                            }
                           
                            const handlePrevMonth = () => {
                              if (viewMonth === 0) {
                                setViewMonth(11);
                                setViewYear(viewYear - 1);
                              } else {
                                setViewMonth(viewMonth - 1);
                              }
                            };
                           
                            const handleNextMonth = () => {
                              if (viewMonth === 11) {
                                setViewMonth(0);
                                setViewYear(viewYear + 1);
                              } else {
                                setViewMonth(viewMonth + 1);
                              }
                            };
                           
                            return (
                              <div>
                                <div className="flex justify-between items-center mb-2">
                                  <button type="button" onClick={handlePrevMonth} className="text-accent hover:text-white transition-all text-xs">◀</button>
                                  <div className="text-center text-xs font-bold text-white">{monthNames[viewMonth]} {viewYear}</div>
                                  <button type="button" onClick={handleNextMonth} className="text-accent hover:text-white transition-all text-xs">▶</button>
                                </div>
                                <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-muted-foreground font-bold mb-2">
                                  <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                                </div>
                                <div className="grid grid-cols-7 gap-1 text-center">
                                  {days.map((day, idx) => {
                                    if (day === null) return <div key={`empty-${idx}`}></div>;
                                   
                                    const d = new Date(viewYear, viewMonth, day);
                                    const dateStr = d.toISOString().split("T")[0];
                                    const isSelected = formData.bookingDate === dateStr;
                                    const isPast = d < new Date(new Date().setHours(0,0,0,0));
                                   
                                    return (
                                      <button
                                        key={day}
                                        type="button"
                                        disabled={isPast}
                                        onClick={() => {
                                          setFormData({ ...formData, bookingDate: dateStr });
                                          fetchTables();
                                        }}
                                        className={`w-6 h-6 mx-auto flex items-center justify-center text-[10px] rounded-full transition-all ${
                                          isPast
                                            ? "text-muted-foreground/30 cursor-not-allowed"
                                            : isSelected
                                              ? "bg-accent text-background font-bold"
                                              : "text-white hover:bg-accent/10"
                                        }`}
                                      >
                                        {day}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      </div>

                      {/* 3. YOUR DETAILS */}
                      <div className="bg-[#0A1412] p-4 rounded-lg border border-accent/10">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">3. Your Details</h3>
                        <div className="space-y-3">
                          <div>
                            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1 block">Name</label>
                            <input
                              type="text"
                              name="guestName"
                              autoComplete="off"
                              placeholder="Enter your name"
                              value={formData.guestName}
                              onChange={handleChange}
                              className="w-full p-2 bg-transparent border border-accent/30 rounded-lg focus:border-accent text-white outline-none transition-all text-sm placeholder:text-muted-foreground/30"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1 block">Email</label>
                            <input
                              type="email"
                              name="guestEmail"
                              autoComplete="off"
                              placeholder="your.email@example.com"
                              value={formData.guestEmail}
                              onChange={handleChange}
                              className="w-full p-2 bg-transparent border border-accent/30 rounded-lg focus:border-accent text-white outline-none transition-all text-sm placeholder:text-muted-foreground/30"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1 block">Phone Number</label>
                            <input
                              type="tel"
                              name="guestPhone"
                              autoComplete="off"
                              placeholder="10 digit number"
                              value={formData.guestPhone}
                              onChange={handleChange}
                              className="w-full p-2 bg-transparent border border-accent/30 rounded-lg focus:border-accent text-white outline-none transition-all text-sm placeholder:text-muted-foreground/30"
                            />
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="space-y-6">
                     
                      {/* 2. SLOT & DURATION */}
                      <div className="bg-[#0A1412] p-4 rounded-lg border border-accent/10">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">2. Slot & Duration</h3>
                       
                        {/* Time Slots */}
                        <div className="mb-4">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Select Time Slot</label>
                          {(() => {
                            const currentTable = tables.find(t => t.id == formData.tableId);
                            const occupiedRanges = currentTable?.occupiedRanges || [];
                           
                            const timeSlots = [];
                            for (let i = 10; i <= 22; i++) {
                              const hourStr = i < 10 ? `0${i}:00` : `${i}:00`;
                              timeSlots.push(hourStr);
                            }

                            const isSlotOccupied = (slot) => {
                              const slotHour = parseInt(slot.split(":")[0]);
                              return occupiedRanges.some(range => {
                                const [start, end] = range.split(" to ").map(t => parseInt(t.split(":")[0]));
                                return slotHour >= start && slotHour < end;
                              });
                            };

                            return (
                              <div className="grid grid-cols-4 gap-2">
                                {timeSlots.map((slot) => {
                                  const occupied = isSlotOccupied(slot);
                                  const isSelected = formData.startTime === slot;
                                 
                                  const hour = parseInt(slot.split(":")[0]);
                                 
                                  // Check if slot is in the past for today
                                  const now = new Date();
                                  const todayStr = now.toISOString().split("T")[0];
                                  const isToday = formData.bookingDate === todayStr;
                                  const isPastSlot = isToday && hour <= now.getHours();
                                 
                                  const isDisabled = occupied || isPastSlot;
                                 
                                  let buttonStyle = "";
                                  let tooltip = "";
                                 
                                  if (occupied) {
                                    buttonStyle = "bg-transparent border-red-500/20 text-red-500/50 cursor-not-allowed";
                                    tooltip = "Slot is booked";
                                  } else if (isPastSlot) {
                                    buttonStyle = "bg-transparent border-white/10 text-white/20 cursor-not-allowed";
                                    tooltip = "Time has passed";
                                  } else if (isSelected) {
                                    buttonStyle = "bg-accent text-background border-accent";
                                  } else {
                                    buttonStyle = "bg-transparent border-accent/30 text-accent hover:bg-accent/10";
                                  }
                                 
                                  const displayTime = hour === 12
                                    ? "12:00 PM"
                                    : hour > 12
                                      ? `${hour - 12}:00 PM`
                                      : `${hour}:00 AM`;

                                  return (
                                    <button
                                      key={slot}
                                      type="button"
                                      disabled={isDisabled}
                                      title={tooltip}
                                      onClick={() => setFormData({ ...formData, startTime: slot })}
                                      className={`p-1.5 text-[9px] font-bold rounded-full border transition-all ${buttonStyle}`}
                                    >
                                      {displayTime}
                                    </button>
                                  );
                                })}
                              </div>
                            );
                          })()}
                        </div>

                        {/* Duration (Mocked based on tier but styled as requested) */}
                        <div className="mb-4">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Duration</label>
                          <div className="flex gap-2">
                            <span className="px-3 py-1 bg-accent text-background text-[10px] font-bold rounded-full">{selected?.hours} Hour(s)</span>
                          </div>
                        </div>

                        {/* Available Tables */}
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Available Tables</label>
                          <div className="space-y-1">
                            {tables.map((table) => (
                              <div key={table.id} className="flex items-center text-xs">
                                <input
                                  type="radio"
                                  id={`table-${table.id}`}
                                  name="tableSelection"
                                  checked={formData.tableId == table.id}
                                  onChange={() => {
                                    setFormData({ ...formData, tableId: table.id });
                                    // Also update selected table in state
                                    const defaultTier = table.availableTiers?.sort((a, b) => a.hours - b.hours)[0];
                                    if (defaultTier) {
                                      const total = defaultTier.basePrice * (1 - defaultTier.discountPercentage / 100);
                                      setSelected({ ...defaultTier, total, table: table });
                                    }
                                  }}
                                  className="accent-accent mr-2"
                                />
                                <label htmlFor={`table-${table.id}`} className="text-white flex justify-between w-full">
                                  <span>{table.tableName}</span>
                                  <span className="text-accent">₹{table.availableTiers?.[0]?.basePrice}</span>
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* 4. CONFIRMATION */}
                      <div className="bg-[#0A1412] p-4 rounded-lg border border-accent/10">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">4. Confirmation</h3>
                       
                        {/* Receipt Box */}
                        <div className="bg-[#050B0A] p-4 border border-dashed border-accent/30 rounded-lg text-xs font-mono space-y-2 text-white relative">
                          {/* Receipt Header */}
                          <div className="text-center border-b border-dashed border-white/10 pb-2 mb-2">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-accent">The Snooker Academy</span>
                          </div>
                         
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">TABLE:</span>
                            <span>{selected?.table?.tableName || "Select Table"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">DATE:</span>
                            <span>{formData.bookingDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">TIME:</span>
                            <span>{formData.startTime || "Select Time"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">DURATION:</span>
                            <span>{selected?.hours} Hours</span>
                          </div>
                          <div className="border-t border-dashed border-white/10 my-2 pt-2 flex justify-between font-bold text-accent text-sm">
                            <span>TOTAL:</span>
                            <span>₹{selected?.total?.toFixed(0)}</span>
                          </div>
                         
                          {/* Fake Barcode */}
                          <div className="flex justify-center gap-0.5 mt-4 opacity-30">
                            <div className="w-0.5 h-6 bg-white"></div>
                            <div className="w-1 h-6 bg-white"></div>
                            <div className="w-0.5 h-6 bg-white"></div>
                            <div className="w-2 h-6 bg-white"></div>
                            <div className="w-0.5 h-6 bg-white"></div>
                            <div className="w-1.5 h-6 bg-white"></div>
                            <div className="w-0.5 h-6 bg-white"></div>
                            <div className="w-1 h-6 bg-white"></div>
                            <div className="w-0.5 h-6 bg-white"></div>
                          </div>
                        </div>

                        {/* Action Button */}
                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={loading}
                          className="w-full font-bold text-xs uppercase tracking-widest py-3 bg-gradient-to-r from-[#C5A059] to-[#E5C583] text-background hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all disabled:opacity-50 mt-4 rounded-full"
                        >
                          {loading ? "Processing..." : "Confirm & Book Now"}
                        </button>
                      </div>

                    </div>

                  </div>

                  <button
                    onClick={() => setOpen(false)}
                    className="mt-4 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-accent w-full text-center transition-all"
=======
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
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        )}
<<<<<<< HEAD

        {/* TABLE DETAILS MODAL */}
        {detailsOpen && detailsTable && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 px-4"
            onClick={() => setDetailsOpen(false)}
          >
            <div
              className="bg-card p-8 max-w-2xl w-full border border-white/10 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-heading text-3xl font-bold text-white">
                  {detailsTable.tableName}
                </h2>
                <button
                  onClick={() => setDetailsOpen(false)}
                  className="text-muted-foreground hover:text-white text-2xl"
                >
                  ✕
                </button>
              </div>

              {detailsTable.imageUrls && detailsTable.imageUrls.length > 0 && (
                <div className="aspect-[16/9] overflow-hidden mb-6 border border-white/5">
                  <img src={detailsTable.imageUrls[0]} alt={detailsTable.tableName} className="w-full h-full object-cover mix-blend-luminosity" />
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Specifications</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm font-light">
                    <li className="flex gap-2"><span className="text-accent">•</span><span>Cloth: {detailsTable.tableType === "PREMIUM" ? "Strachan 6811 Tournament" : "High-Quality Club Cloth"}</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span><span>Balls: {detailsTable.tableType === "PREMIUM" ? "Aramith Pro-Cup" : "Standard Aramith"}</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span><span>Cushions: {detailsTable.tableType === "PREMIUM" ? "Precision Steel Block" : "Standard Rubber"}</span></li>
                    <li className="flex gap-2"><span className="text-accent">•</span><span>Pockets: {detailsTable.tableType === "PREMIUM" ? "Tournament Cut" : "Standard Club Cut"}</span></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">What to Learn & How</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed mb-4">
                    {detailsTable.tableType === "PREMIUM"
                      ? "This table is designed for advanced players looking to master break building. The tight pockets and fast cloth require extreme precision."
                      : "Perfect for mastering the basics of cue action, stance, and potting. The slightly more forgiving pockets help build confidence."}
                  </p>
                  <div className="bg-background/50 p-4 border border-white/5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white mb-1">Focus Areas:</p>
                    <p className="text-muted-foreground text-xs font-light">
                      {detailsTable.tableType === "PREMIUM"
                        ? "Century breaks, side spin mastery, and position play."
                        : "Straight cueing, basic angles, and safety basics."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => setDetailsOpen(false)}
                  className="flex-1 text-xs font-bold uppercase tracking-widest py-3 border border-white/20 text-white hover:bg-white hover:text-background transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    const defaultTier = detailsTable.availableTiers?.sort((a, b) => a.hours - b.hours)[0];
                    if (defaultTier) {
                      const total = defaultTier.basePrice * (1 - defaultTier.discountPercentage / 100);
                      setSelected({ ...defaultTier, total, table: detailsTable });
                      setFormData((prev) => ({ ...prev, tableId: detailsTable.id, tierId: defaultTier.id }));
                      setOpen(true);
                    }
                    setDetailsOpen(false);
                  }}
                  className="flex-1 text-xs font-bold uppercase tracking-widest py-3 bg-accent text-background hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all"
                >
                  Proceed to Booking
                </button>
              </div>
            </div>
          </div>
        )}
=======
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
      </div>
    </div>
  );
};

export default BookingPage;