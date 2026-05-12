import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    message: "",
<<<<<<< HEAD
    queryType: "Courses",
=======
      queryType: "Courses",
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = encodeURIComponent(
<<<<<<< HEAD
      `Hi, I'm ${form.name}\n\n${form.message} and I want to know about ${form.queryType}`
=======
      `Hi, I'm ${form.name}\n\n${form.message} and I want to know about ${form.queryType} `
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
    );

    const whatsappURL = `https://wa.me/919858347754?text=${text}`;

    window.open(whatsappURL, "_blank");
  };

  return (
<<<<<<< HEAD
    <div className="bg-background min-h-screen text-white relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#004D40]/20 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1609102029121-66f3900b4672?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
      </div>

      <div className="relative z-10">
        {/* HERO */}
        <section className="relative h-[50vh] flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-6 block">
              Contact
            </span>

            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Let’s Connect
            </h1>

            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Whether you’re looking to join, train, or simply experience the
              atmosphere — we’re here to help.
            </p>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="px-6 py-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            {/* FORM */}
            <div>
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-4 block">
                Get in Touch
              </span>

              <h2 className="font-heading text-4xl font-bold tracking-tight leading-tight text-white mb-6">
                Contact Us
              </h2>

              <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-lg">
                Reach out for coaching programs, bookings, membership inquiries,
                or any other assistance. Our team is available to guide you
                through everything you need.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2 block">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-card/60 backdrop-blur-md border border-white/10 rounded-xl focus:border-accent text-white outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2 block">
                    Query Type
                  </label>

                  <select
                    name="queryType"
                    value={form.queryType}
                    onChange={handleChange}
                    className="w-full p-4 bg-card/60 backdrop-blur-md border border-white/10 rounded-xl focus:border-accent text-white outline-none transition-all text-sm cursor-pointer"
                  >
                    <option value="Courses">Courses</option>
                    <option value="Booking">Booking</option>
                    <option value="Membership">Membership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2 block">
                    Your Message
                  </label>

                  <textarea
                    name="message"
                    placeholder="How can we help you?"
                    rows="6"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-card/60 backdrop-blur-md border border-white/10 rounded-xl focus:border-accent text-white outline-none transition-all text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-accent text-background text-xs font-semibold uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition"
                >
                  Send via WhatsApp
                </button>
              </form>
            </div>

            {/* INFO */}
            <div>
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-accent mb-4 block">
                Visit Us
              </span>

              <h2 className="font-heading text-4xl font-bold tracking-tight leading-tight text-white mb-6">
                Academy Location
              </h2>

              <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-lg">
                Experience a premium snooker environment designed for focus,
                competition, and growth. Visit us in Srinagar and elevate your
                game in a professional atmosphere.
              </p>

              <div className="space-y-5 text-sm text-white/70 mb-10">
                <div className="flex items-center gap-4 p-4 bg-card/40 backdrop-blur-md border border-white/10 rounded-xl">
                  <span className="text-accent text-lg">📞</span>
                  <div>
                    <p className="text-white font-semibold mb-1">Phone</p>
                    <p>098583 47754</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-card/40 backdrop-blur-md border border-white/10 rounded-xl">
                  <span className="text-accent text-lg">📍</span>
                  <div>
                    <p className="text-white font-semibold mb-1">Address</p>
                    <p>Srinagar, Jammu & Kashmir</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-card/40 backdrop-blur-md border border-white/10 rounded-xl">
                  <span className="text-accent text-lg">⏰</span>
                  <div>
                    <p className="text-white font-semibold mb-1">Working Hours</p>
                    <p>10:00 AM — 11:00 PM</p>
                  </div>
                </div>
              </div>

              {/* MAP */}
              <div className="w-full h-[350px] overflow-hidden rounded-xl border border-white/10">
                <iframe
                  src="https://www.google.com/maps?q=34.0694626,74.8173082&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="grayscale"
                  title="map"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* EXTRA SECTION */}
        <section className="py-24 px-6 border-y border-white/5 bg-card/30 backdrop-blur-md">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-4 block">
                Why Choose Us
              </span>

              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                More Than Just a Venue
              </h2>

              <p className="text-white/60 text-sm max-w-2xl mx-auto leading-relaxed">
                We combine elite-level facilities with a calm and focused
                atmosphere to create an experience built for serious players.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Professional Standards",
                  desc: "Tournament-grade tables and premium equipment maintained with precision.",
                },
                {
                  title: "Focused Environment",
                  desc: "Minimal distractions, refined interiors, and a calm competitive atmosphere.",
                },
                {
                  title: "Community & Growth",
                  desc: "Join a culture driven by improvement, discipline, and passion for the game.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 bg-card/60 backdrop-blur-md border border-white/10 rounded-xl hover:border-accent/40 transition-all duration-500"
                >
                  <h3 className="font-heading text-xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to Elevate Your Game?
            </h2>

            <p className="text-white/60 text-base leading-relaxed mb-10">
              Train in a professional environment built for players who value
              precision, discipline, and mastery.
            </p>

            <button
              onClick={() =>
                window.open("https://wa.me/919858347754", "_blank")
              }
              className="px-10 py-4 bg-accent text-background text-xs font-semibold uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition"
            >
              Chat on WhatsApp
            </button>
          </div>
        </section>
=======
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

>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
      </div>
    </div>
  );
};

export default Contact;