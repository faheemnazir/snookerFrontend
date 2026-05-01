import React from "react";
import { NavLink } from "react-router-dom";
import main from "../../assets/main.png";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img1 from "../../assets/img1.jpg";
import logo from "../../assets/logo.png";

// HERO
const Hero = () => (
  <section className="min-h-[70vh] md:h-[85vh] bg-black text-white flex items-center justify-center relative overflow-hidden">
    <img
      src={main}
      alt="snooker"
      className="absolute inset-0 w-full h-full object-cover opacity-50 blur-[2px] scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

    <div className="relative z-10 text-center px-6 max-w-3xl">
      <h1 className="text-5xl md:text-7xl font-semibold tracking-[0.15em] mb-3">
        Snooker, Refined.
      </h1>

      <p className="text-lg md:text-xl text-gray-400 mb-5">
        A focused, well-maintained space in Srinagar for players who take the game seriously.
      </p>

      {/* NEW COMPACT INFO STRIP */}
      <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-gray-400 mb-5">
        <span className="px-3 py-1 border text-xl border-gray-700 rounded-full">
          Professional Tables
        </span>
        <span className="px-3 py-1 border text-xl border-gray-700 rounded-full">
          Calm Environment
        </span>
        <span className="px-3 py-1 border text-xl border-gray-700 rounded-full">
          Open Late Hours
        </span>
      </div>

      {/* SUBTEXT (very subtle, fills gap cleanly) */}
      <p className="text-xl text-gray-500 mb-6">
        Practice, compete, or unwind — all in a space built for precision.
      </p>

      <NavLink to="/contact">
        <button className="px-8 py-3 bg-green-500 hover:bg-green-600 rounded-xl text-black text-xl font-semibold">
          Visit the Club
        </button>
      </NavLink>
    </div>
  </section>
);

// FEATURES
const Features = () => {
  const items = [
    {
      title: "Well-Maintained Tables",
      desc: "Regularly cleaned cloth and properly aligned tables.",
    },
    {
      title: "Comfortable Environment",
      desc: "Calm lighting and distraction-free setup.",
    },
    {
      title: "Fair Play Atmosphere",
      desc: "Respectful space for all skill levels.",
    },
  ];

  return (
    <section className="py-16 px-6 text-white">
      <h2 className="text-3xl md:text-4xl text-center mb-12">What You Can Expect</h2>

      <div className="grid md:grid-cols-3  gap-6 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="bg-[#111] p-6 rounded-xl border border-gray-800 hover:border-green-500 transition">
            <h3 className="text-xl mb-2">{item.title}</h3>
            <p className="text-gray-400 text-lg">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// REPUTATION
const Reputation = () => (
  <section className="py-16 px-6 bg-black text-white">
    <h2 className="text-3xl md:text-4xl text-center mb-4">
      Recognized in the Snooker Community
    </h2>

    <p className="text-center text-gray-500 text-xl mb-10 max-w-xl mx-auto">
      Active part of Srinagar’s competitive snooker scene.
    </p>

    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
      {[
        "Championship Venue",
        "Competitive Environment",
        "Events & Tournaments",
      ].map((title, i) => (
        <div key={i} className="bg-[#111] p-5 rounded-xl border border-gray-800">
          <h3 className="text-lg mb-2">{title}</h3>
          <p className="text-gray-400 text-lg">
            Consistent high-level play and organized events.
          </p>
        </div>
      ))}
    </div>
  </section>
);

// AMENITIES
const Amenities = () => {
  const items = [
    {
      title: "Professional Tables",
      desc: "Three premium full-size snooker tables with consistent cloth and precise leveling for accurate gameplay.",
    },
    {
      title: "Focused Environment",
      desc: "Quiet, distraction-free space designed for serious practice and competitive play.",
    },
    {
      title: "Café & Refreshments",
      desc: "On-site café offering light snacks and beverages for comfortable long sessions.",
    },
    {
      title: "Extended Hours",
      desc: "Open for long hours, giving players flexibility to practice at their preferred time.",
    },
  
  ];

  return (
    <section className="py-16 px-6 bg-[#0a0a0a] text-white">
      <h2 className="text-3xl md:text-4xl text-center mb-3">
        Amenities & Environment
      </h2>

      <p className="text-center text-gray-500 text-xl mb-10 max-w-2xl mx-auto">
        Every detail is designed to create a consistent, comfortable, and focused
        snooker experience — whether you're practicing alone or playing competitively.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-[#111] p-6 rounded-xl border border-gray-800 hover:border-green-500/40 transition"
          >
            <h3 className="text-xl mb-2 text-white">{item.title}</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// HOW IT WORKS
const HowItWorks = () => (
  <section className="py-16 px-6 bg-[#0a0a0a] text-white">
    <h2 className="text-3xl md:text-4xl text-center mb-12">How It Works</h2>

    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {["Walk In", "Choose Table", "Play"].map((step, i) => (
        <div key={i} className="text-center">
          <div className="text-green-500 text-6xl mb-2">0{i + 1}</div>
          <h3 className="text-xl mb-1">{step}</h3>
        </div>
      ))}
    </div>
  </section>
);

// GALLERY
const Gallery = () => {
  const images = [img1, img2, img3];

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl md:text-4xl text-center text-white mb-10">
        Inside the Space
      </h2>

      <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <img key={i} src={src} className="rounded-xl h-64 w-full object-cover" />
        ))}
      </div>
    </section>
  );
};

// REVIEWS
const Reviews = () => (
  <section className="py-16 px-6 bg-black text-white">
    <h2 className="text-3xl md:text-4xl text-center mb-10">What Players Say</h2>

    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {["Clean tables", "Calm environment", "Good for long sessions"].map((r, i) => (
        <div key={i} className="bg-[#111] p-5 rounded-xl border border-gray-800">
          <p className="text-gray-300 text-2xl">"{r}"</p>
        </div>
      ))}
    </div>
  </section>
);

// RULES
const Rules = () => (
  <section className="py-16 px-6 text-white">
    <h2 className="text-3xl md:text-4xl text-center mb-10">Club Guidelines</h2>

    <div className="max-w-2xl  mx-auto text-gray-400 space-y-3 text-center text-2xl">
      <p>• Respect players</p>
      <p>• Handle equipment carefully</p>
      <p>• Follow time slots</p>
      <p>• Keep noise low</p>
    </div>
  </section>
);

// CTA
const CTA = () => (
  <section className="py-16 text-center bg-gradient-to-r from-green-600 to-green-800">
    <h2 className="text-3xl mb-3 text-black">Ready to Play?</h2>

    <NavLink to="/contact">
      <button className="bg-black text-xl text-white px-8 py-3 rounded-xl">
        Contact Now
      </button>
    </NavLink>
  </section>
);

// MAIN
const HomePage = () => {
  return (
    <div className="bg-black">
      <img
        src={logo}
        className="fixed opacity-5 w-[800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
      />

      <div className="relative z-10">
        <Hero />
        <Features />
        <Reputation />
        <Amenities />
        <HowItWorks />
        <Gallery />
        <Reviews />
        <Rules />
      </div>

      <CTA />
    </div>
  );
};

export default HomePage;