import React from "react";
import main from "../../assets/main.png"
import logo from "../../assets/logo.png"

const About = () => {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src={main}
          alt="snooker"
          className="absolute inset-0 w-full h-full object-cover opacity-40 blur-[1px]"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About Snooker Academy
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            A premium destination for players who demand precision, atmosphere, and excellence.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Redefining Snooker in Srinagar
        </h2>
        <p className="text-gray-400 text-xl leading-relaxed mb-6">
          Located in the heart of Srinagar, Snooker Academy is more than just a place to play — 
          it’s a space built for those who appreciate the art of the game. Every detail, from 
          lighting to table precision, is designed to deliver a professional-level experience.
        </p>
        <p className="text-gray-400 text-xl leading-relaxed">
          Whether you're a seasoned player or just stepping into the world of snooker, 
          our environment ensures focus, comfort, and a touch of luxury that sets us apart.
        </p>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-20 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img
            src={logo}
            alt="snooker table"
            className="rounded-2xl object-cover w-full h-[500px]"
          />

          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Built for Precision & Performance
            </h2>
            <p className="text-gray-400 text-xl mb-4">
              Our academy features high-quality snooker tables maintained to the highest standards,
              ensuring consistent play and professional accuracy.
            </p>
            <p className="text-gray-400 mb-4">
              The ambiance is carefully curated — low lighting, premium interiors, and a calm,
              focused atmosphere that allows players to fully immerse themselves in the game.
            </p>
            <p className="text-gray-400 text-xl">
              It’s not just about playing — it’s about experiencing snooker the way it’s meant to be.
            </p>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          What Sets Us Apart
        </h2>

        <div className="grid text-xl md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            {
              title: "Professional Setup",
              desc: "Tournament-level tables and equipment for a consistent and elite playing experience.",
            },
            {
              title: "Premium Ambience",
              desc: "A refined, calm, and visually striking environment designed for focus and comfort.",
            },
            {
              title: "Competitive Culture",
              desc: "Regular games, challenges, and a community of players passionate about the sport.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#0f0f0f] p-6 rounded-2xl border border-gray-800 hover:border-green-500 transition shadow-md hover:shadow-green-500/20"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 px-6 bg-[#0f0f0f] text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Our Vision
        </h2>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
          To create a hub for snooker enthusiasts in Srinagar where skill, discipline, and passion
          come together. Snooker Academy aims to elevate the standard of the game locally while
          providing a world-class environment for players of all levels.
        </p>
      </section>

    </div>
  );
};

export default About;