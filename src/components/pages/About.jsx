import React from "react";
import main from "../../assets/main.png";
import logo from "../../assets/logo.png";

const About = () => {
  const coaches = [
    {
      name: "Julian Thorne",
      spec: "Break Building",
      desc: "Former professional with over 20 years of experience, Julian focuses on cue ball control and rhythmic scoring patterns.",
      rating: "4.9",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBNjBbZ42-loDbCEbMe_ojRj4NLxOMRWza-EBnnjy4hEWU13GmFtIlNG0vVxuaC6YNw4ZNxXo8tv3RgY9FwYUP8dLf9SdnLqFg4nHpd0bbNpKOoIQmI5-WgNVfZbHCOvEWVXA2LQpRf8BkEjPJCdIAuyMAmmjkm7mB7EA--E27UJJqIlV9Ynf1rFv9Glyze8foIdSnm4zpI3D9UsHB7vjQr3ixwqDG5Z0gHfFpOKAMASsZ__vjjVzHuyyiqrP5ab3BFUnLG1XtHNzc",
    },
    {
      name: "Arthur Sterling",
      spec: "Tactical Play",
      desc: "Known as 'The Strategist', Arthur helps advanced players master safety battles and pressure-situation decision making.",
      rating: "5.0",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCvgxoyMey0FbHns8eLshygUtGYjamzKh7qkfRMjeuY0bxBNksa6awlCF_zuD0aJbMBN_FRMDARCSBOsnsaZL5fddVk50qY8sEmpICGSruKyPM86n_f1vw-YNhdtNc2mvkKpe0E_n5Ch-rtmhEo0C_qdNHwF2y07IHpwFjrZFV2EBKiH9Mn8LZ3FwoRfisKeG6ULroUqJlTkl36rtcDcJ-y6xVzXu39h3bfXlAUvakr_1W1fxL4b1Cb2MaRYMFjQZLJ4oxWcVyz2fc",
    },
    {
      name: "Marcus Vane",
      spec: "Cue Action",
      desc: "A technician at heart, Marcus utilizes video analysis to perfect the foundational mechanics of a repeatable, pro-level stroke.",
      rating: "4.8",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAPvhKCkfjBMJD680VsqC5iR37CJF5BQCB-dTokEKchgL7BUWsEJlS1kOE1NbNppqXwElnjlEkHUgfJ-fuqhzuFt2LRAB50FKj78dmtqRBXtXifIaDn6uOccWxvmIsHMAcB1DtkVQdRG1BJguriwAmAPUSTgrAp8yOe6AUccpQgH1lk6PVCaZEhlo367zsupw4u0SWx2jwzMvrCze1WiSg7H9yq6XsI2RO-BEr9_5F0BAJbXs9hHLkn_cjXcrc2W5myU_uIORl2Y3I",
    },
    {
      name: "Elara Vance",
      spec: "Mental Game",
      desc: "Master the psychological aspects of the game. Elara focuses on match temperament, routine, and visualization techniques.",
      rating: "4.9",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDLZNLluzHAy_Lz73FGCU6K1lXZrN_HH-rKtwFoBQDiX8lGS6Ex0hBXRKoafR0W3J467MPn76wGMyiCe5sE5HvqPH0Dkm42cXC-86EX1VBnrsntcMLq18tue1sWdw3Id2PXe-JK-TddTs_1Vp-lSPzmpJ1TFZYJPPvUTbtpEousXwLWc8-tNdNQI48nIuio4kFCJt8WfAfJvrFFXypTE1SUlrOnyB2eQXGq4rIlSLrHFPgtMjQBgtHT51WpOxcpdskavU0vgOPGowU",
    },
    {
      name: "Dominic Reed",
      spec: "Century Breaks",
      desc: "A specialist in high-performance scoring, Dominic has coached numerous players to their first competitive centuries.",
      rating: "5.0",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAVB0zjsTCY9ReA1Ps-4SVf4bcWculN_okO-dj_18I963EXs7egKT6yI5VvKtZvBPYYi3YtThwjOmKLi9gjH_M9vEmcI-7IhaZFgPTGuwt1pay_3D1cK2UX9_YW7QoZ8h-LmEnktEszakes1lwmtX0sGE1uxkO8raXRRNsKOH7nUwqyBTTFErcw2Zx7OPgnaJtA5l1kFfO2eOgn63L4NF_vcFGlkGAW8yCO4112gaCcmmoLYhvemawFh7nj-TcYzH10wM338O1UKWQ",
    },
    {
      name: "Silas Thorne",
      spec: "Foundation Training",
      desc: "Specializing in correcting core technical flaws for amateur players looking to bridge the gap to semi-pro play.",
      rating: "4.7",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDM6pg7Sfb2O3dlzxEYjo_73tOKVGlOsTP873433GRqWIxBmlu8BZMlW_yFBNOWY0qZdnVZP8O6P4DzgtC5p3vIPBswFvOs2TnOTmi4ODBG6epUkaJAYNXKU8l_ePN3Ca4BOoheIlq6_cG8Atoj-c0N0hGkgroX1AQBfd9s3m7SgD2sVO31WqAE8JqYxYfSzaT9ha3fT-_aTpjT1M3jnwuEuPevHMPqsS5EnOMaafBAt842uaQ9NMVHjC_Skifwtm4Vy6m4vdYjzkg",
    },
  ];

  return (
    <div className="bg-background min-h-screen text-white relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#004D40]/20 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1609102029121-66f3900b4672?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
      </div>

      <div className="relative z-10">
        {/* HERO
        <section className="relative h-[65vh] flex items-center justify-center text-center px-6">
        <div className="max-w-4xl mx-auto text-center">


  <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-[0.95] tracking-tight">
    About The Academy
  </h1>

  <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
    A refined destination where precision, discipline, and atmosphere
    come together to create a premium snooker experience built for
    focus, performance, and growth.
  </p>

  <div className="mt-12 flex items-center justify-center gap-4 md:gap-8 flex-wrap">
    <div className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm min-w-[160px]">
      <h3 className="text-white text-2xl font-semibold">Elite</h3>
      <p className="text-white/50 text-sm mt-1">Training Environment</p>
    </div>

    <div className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm min-w-[160px]">
      <h3 className="text-white text-2xl font-semibold">Modern</h3>
      <p className="text-white/50 text-sm mt-1">Professional Setup</p>
    </div>

    <div className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm min-w-[160px]">
      <h3 className="text-white text-2xl font-semibold">Focused</h3>
      <p className="text-white/50 text-sm mt-1">Player Development</p>
    </div>
  </div>
</div>
        </section> */}
        <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-40 pb-24 overflow-hidden">
  
  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.10),transparent_55%)] pointer-events-none" />

  <div className="max-w-6xl mx-auto relative z-10">
    
    {/* LABEL */}
  

    {/* HEADING */}
    <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[92px] font-bold text-white leading-[0.92] tracking-tight max-w-5xl mx-auto">
      About
      <span className="block text-accent mt-2">
        Snooker Academy
      </span>
    </h1>

    {/* DESCRIPTION */}
    <p className="mt-8 text-lg md:text-xl text-white/65 leading-relaxed max-w-3xl mx-auto">
      A refined destination where precision, discipline, and atmosphere
      converge to create a premium snooker environment designed for focus,
      performance, and competitive excellence.
    </p>


    {/* CARDS */}
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* CARD */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-accent/40">
        
        {/* GOLDEN GLOW */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.18),transparent_70%)]" />

        {/* SHINE */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />

        <div className="relative z-10">
          <h3 className="text-white text-3xl font-bold mb-3">
            Elite
          </h3>

          <p className="text-accent text-[13px]  tracking-[0.35em] font-bold mb-5">
            Training Environment
          </p>

          <p className="text-white/55 text-md leading-7">
            Professional-grade tables and a focused atmosphere built for serious
            players and competitive growth.
          </p>
        </div>
      </div>

      {/* CARD */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-accent/40">
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.18),transparent_70%)]" />

        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />

        <div className="relative z-10">
          <h3 className="text-white text-3xl font-bold mb-3">
            Modern
          </h3>

          <p className="text-accent text-[13px] tracking-[0.35em] font-bold mb-5">
            Professional Setup
          </p>

          <p className="text-white/55 text-md leading-7">
            Carefully designed interiors and high-end equipment that elevate
            comfort, precision, and performance.
          </p>
        </div>
      </div>

      {/* CARD */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-accent/40">
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.18),transparent_70%)]" />

        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />

        <div className="relative z-10">
          <h3 className="text-white text-3xl font-bold mb-3">
            Focused
          </h3>

          <p className="text-accent text-[13px]  tracking-[0.35em] font-bold mb-5">
            Player Development
          </p>

          <p className="text-white/55 text-md leading-7">
            Structured coaching and disciplined training sessions tailored to
            help players refine every aspect of their game.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>






        {/* INTRO */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
              Redefining the Game
            </h2>

            <p className="text-white/70 text-base leading-relaxed mb-6">
              Located in the heart of Srinagar, our academy is more than just a
              venue — it’s a curated environment for serious players. Every
              detail is engineered for performance, from lighting angles to
              cloth precision.
            </p>

            <p className="text-white/60 text-base leading-relaxed">
              Whether refining your fundamentals or competing at a high level,
              the space is designed to elevate focus, consistency, and mastery.
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="py-24 px-6 border-y border-white/5 bg-card/30 backdrop-blur-md">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* IMAGE */}
            <div className="relative group">
              <div className="aspect-square overflow-hidden rounded-xl border border-white/10">
                <img
                  src={logo}
                  alt="snooker"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* FLOATING CARD */}
              <div className="absolute -bottom-10 -right-10 bg-card/80 backdrop-blur-xl p-6 border border-white/10 hidden md:block rounded-xl">
                <p className="text-xs text-white/50 uppercase tracking-widest mb-2">
                  Standard
                </p>
                <p className="font-heading text-3xl text-accent font-bold">
                  Pro Level
                </p>
              </div>
            </div>

            {/* TEXT */}
            <div>
              <span className="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">
                Environment
              </span>

              <h2 className="font-heading text-4xl font-bold mb-6">
                Built for Precision
              </h2>

              <p className="text-white/70 text-base mb-4 leading-relaxed">
                Our tables are maintained to tournament standards, ensuring
                consistent rebound, roll, and response on every shot.
              </p>

              <p className="text-white/60 text-base mb-4 leading-relaxed">
                The atmosphere is intentionally minimal — low lighting,
                controlled acoustics, and refined interiors for complete focus.
              </p>

              <p className="text-white/60 text-base leading-relaxed">
                This is where discipline meets environment — and results follow.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-white/60 text-sm">
                Designed for serious players who demand more from their
                environment.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Professional Setup",
                  desc: "Tournament-grade tables and precision-maintained equipment for consistent performance.",
                },
                {
                  title: "Premium Ambience",
                  desc: "A calm, focused, and visually refined environment built for concentration.",
                },
                {
                  title: "Competitive Culture",
                  desc: "A community driven by growth, discipline, and high-level play.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 bg-card/60 backdrop-blur-md border border-white/10 rounded-xl hover:border-accent/40 transition-all duration-500"
                >
                  <h3 className="font-heading text-xl font-bold mb-3">
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

        {/* COACHES */}
        <section className="py-24 px-6 bg-card/30 backdrop-blur-md border-y border-white/5">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-accent text-xs uppercase tracking-[0.4em] mb-4 block">
                Elite Instruction
              </span>

              <h2 className="font-heading text-5xl font-bold mb-6">
                Meet the Coaches
              </h2>

              <p className="text-white/60 text-sm">
                Learn from professionals who refine every aspect of your game.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {coaches.map((coach, i) => (
                <div
                  key={i}
                  className="group flex flex-col h-full bg-card/60 backdrop-blur-md border border-white/10 rounded-xl hover:border-accent/40 transition-all duration-500 overflow-hidden"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex justify-between mb-2">
                        <h3 className="font-heading text-xl font-bold">
                          {coach.name}
                        </h3>

                        <span className="text-accent text-sm font-bold">
                          ★ {coach.rating}
                        </span>
                      </div>

                      <p className="text-[10px] uppercase tracking-widest text-white/50 mb-3">
                        {coach.spec}
                      </p>

                      <p className="text-white/60 text-sm leading-relaxed line-clamp-3 mb-6">
                        {coach.desc}
                      </p>
                    </div>


                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl font-bold mb-6">
              Our Vision
            </h2>

            <p className="text-white/60 text-base leading-relaxed">
              To build a hub for snooker excellence where discipline, skill, and
              environment combine to produce world-class players and elevate the
              game locally.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;