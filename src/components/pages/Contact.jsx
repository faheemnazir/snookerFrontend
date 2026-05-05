import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    message: "",
      queryType: "Courses",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Hi, I'm ${form.name}\n\n${form.message} and I want to know about ${form.queryType} `
    );

    const whatsappURL = `https://wa.me/919858347754?text=${text}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Form */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full text-xl p-3 bg-[#0f0f0f] border border-gray-800 rounded-xl focus:border-green-500 outline-none"
            />
            <select
  name="queryType"
  value={form.queryType}
  onChange={handleChange}
  className="w-full text-xl p-3 bg-[#0f0f0f] border border-gray-800 rounded-xl focus:border-green-500 outline-none text-white appearance-none cursor-pointer"
>
  <option value="Courses">Courses</option>
  <option value="Booking">Booking</option>
  <option value="Other">Other</option>
</select>






            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full text-xl p-3 bg-[#0f0f0f] border border-gray-800 rounded-xl focus:border-green-500 outline-none"
            />

            <button
              type="submit"
              className="bg-green-500 text-xl hover:bg-green-600 text-black px-6 py-3 rounded-xl font-semibold"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>

        {/* Info + Map */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Visit Us</h2>

          <p className="text-gray-400 text-xl mb-4">
            📞 098583 47754
          </p>

          <p className="text-gray-400 text-xl mb-6">
            📍 Srinagar, Jammu & Kashmir
          </p>

          <div className="w-full h-[300px] rounded-2xl overflow-hidden border border-gray-800">
            <iframe
              src="https://www.google.com/maps?q=34.0694626,74.8173082&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;