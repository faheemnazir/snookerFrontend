import React, { useState } from "react";
import logo from "../../assets/logo.png";
import main from "../../assets/main.png";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Frames" },
    { id: "tournament", name: "Tournaments" },
    { id: "practice", name: "Practice & Play" },
    { id: "club", name: "Club Life & Parties" },
  ];

  const items = [
    {
      id: 1,
      category: "practice",
      title: "Championship Table Setup",
      desc: "Our premium Star tables ready for action.",
      image: main,
    },
    {
      id: 2,
      category: "tournament",
      title: "Annual Open 2025",
      desc: "Final frame intensity during the championship.",
      image: "https://images.unsplash.com/photo-1544154455-2e118991a01c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      category: "club",
      title: "Weekend Social",
      desc: "Members enjoying a relaxed evening at the academy.",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      category: "practice",
      title: "Precision Drills",
      desc: "Coaching session focusing on cue ball control.",
      image: img1,
    },
    {
      id: 5,
      category: "tournament",
      title: "Trophy Ceremony",
      desc: "Celebrating the winners of the Summer Cup.",
      image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      category: "club",
      title: "Late Night Frames",
      desc: "The perfect atmosphere for serious practice.",
      image: img2,
    },
    {
      id: 7,
      category: "practice",
      title: "Perfect Break",
      desc: "Classic snooker balls arranged on the baize.",
      image: img3,
    },
    {
      id: 8,
      category: "tournament",
      title: "Local Derby",
      desc: "High stakes match between academy top players.",
      image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 9,
      category: "club",
      title: "Academy Lounge",
      desc: "Where players relax between matches.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const filteredItems = filter === "all" ? items : items.filter(item => item.category === filter);

  return (
    <div className="bg-background min-h-screen text-white relative overflow-hidden">
      {/* Cinematic Background Overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#004D40]/20 to-[#0A0A0A]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1609102029121-66f3900b4672?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
      </div>

      <div className="relative z-10">
        {/* HEADER */}
        <section className="py-24 px-6 text-center">
         
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
            Academy Gallery
          </h1>
          <p className="text-muted-foreground font-light text-md max-w-2xl mx-auto leading-relaxed">
            Explore the atmosphere, the intensity of tournaments, and the vibrant community at The Snooker Academy.
          </p>
        </section>

        {/* FILTERS */}
        <section className="px-6 pb-8">
         

          {/* GRID */}
       {/* GRID */}
<div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
  {filteredItems.map((item) => (
    <div
      key={item.id}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur-xl transition-all duration-500 hover:border-accent/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(197,160,89,0.15)]"
    >
      {/* GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.12),transparent_60%)] pointer-events-none" />

      {/* IMAGE */}
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* CATEGORY */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent backdrop-blur-md">
            {categories.find((c) => c.id === item.category)?.name}
          </span>
        </div>

        {/* VIEW */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">
            View Full Screen
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-7 flex flex-col flex-1">
        <h3 className="font-heading text-2xl font-bold text-white mb-3">
          {item.title}
        </h3>

        <p className="text-white/60 text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  ))}
</div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
