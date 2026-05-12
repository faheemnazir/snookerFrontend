<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Compass, BarChart, Brain } from "lucide-react";
=======
import React from "react";
import { NavLink } from "react-router-dom";
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
import main from "../../assets/main.png";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img1 from "../../assets/img1.jpg";
import logo from "../../assets/logo.png";

// HERO
<<<<<<< HEAD
const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden">
      
      {/* Static Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={main}
          alt="snooker"
          className="w-full h-full object-cover"
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
      </div>

      {/* Floating Glows (kept but refined) */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 blur-3xl rounded-full pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        
        <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-6 block">
          Precision in Every Frame
        </span>

        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
          Master the Art of <br className="hidden md:block" />
          the <span className="text-accent">Break</span>
        </h1>

        <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
          Experience snooker in its most refined form. From world-class championship tables to expert coaching, we provide the ultimate environment for serious players.
        </p>

        {/* Buttons (consistent styling) */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          
          <NavLink to="/booking">
            <button className="px-10 py-3 bg-accent text-background text-xs font-semibold tracking-widest uppercase rounded-md hover:shadow-[0_0_25px_rgba(197,160,89,0.35)] transition-all">
              Book a Table
            </button>
          </NavLink>

          <NavLink to="/courses">
            <button className="px-10 py-3 border border-white/20 text-white text-xs font-semibold tracking-widest uppercase rounded-md hover:bg-white hover:text-background transition-all">
              Explore Courses
            </button>
          </NavLink>

        </div>
      </div>
    </section>
  );
};

// EXPERIENCE COMPARISON
const ExperienceComparison = () => {
  const premiumImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA4xKUn8w6Efp0j9oSDgDlhC6QehyWvA-HnAriXENOWpb2Wjl0Xy2HS_gpiU_bliDjErRpyKFMlCISqPAv6izstX_vqxZC_7Uufy8w4haP_ihOuSn_P_dx9TXYn3R52BKHRW0Se7tz8uT54yRcmR-Gjr2miRNNfhRiJsQvZww8XNE2mrJfJrnm49EDtLsLGfHWTBikw3j7p5D4Dv9wYVGstUcj2J_Eq0K5GKIZL5uByPt0v8tRLlXQYTAyD-_3CJLXfLu61FSitl1s",
    img1,
    img2
  ];

  const regularImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuADUVM5To6ZX1td4DOu7IkoXvvn7KkoG9YM1t69btsjQtWTGGVcEdzDwPZ0dPTiTfY5JwpjRgwig3c8dHUVYiPY_e8Qh4ZU0bZ7a4yq4IR475_x17TkxrMsGSchZlllPQ01wwWrKeyOlj7Zbin3ERQdgPXk7jqdBJk2ouWdZhlX2EoB8NdpiVIFh8WMlamRqBCqz44V7A58GDTsQTiFiTUSd8TsovN2IS95TM5RMyAPn3ODWRuJhLUIWpEzajR69qeygDS-w6teN08",
    img3,
    main
  ];

  const [premiumIndex, setPremiumIndex] = useState(0);
  const [regularIndex, setRegularIndex] = useState(0);

  const nextPremium = () => setPremiumIndex((p) => (p + 1) % premiumImages.length);
  const prevPremium = () => setPremiumIndex((p) => (p - 1 + premiumImages.length) % premiumImages.length);

  const nextRegular = () => setRegularIndex((p) => (p + 1) % regularImages.length);
  const prevRegular = () => setRegularIndex((p) => (p - 1 + regularImages.length) % regularImages.length);

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div className="max-w-xl">
       <span className="text-sm font-medium tracking-wide text-accent mb-4 block">The Venue</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Elevate Your Standard</h2>
          <p className="text-muted-foreground font-light text-sm">We offer two distinct environments designed for different levels of focus, both maintained to professional standards.</p>
        </div>
        <div className="h-px bg-white/10 flex-grow mx-12 hidden md:block mb-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[600px]">
        {/* Premium Experience */}
        <div className="md:col-span-7 relative group overflow-hidden bg-card/50 backdrop-blur-md border border-white/5 p-12 flex flex-col justify-end hover:border-accent/30 transition-all duration-500">
          <NavLink to="/gallery" className="absolute inset-0 z-0 cursor-pointer">
            {premiumImages.map((src, i) => (
              <img
                key={i}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 mix-blend-luminosity ${i === premiumIndex ? "opacity-30" : "opacity-0"}`}
                src={src}
                alt="Premium Arena"
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
          </NavLink>
          
          {/* Slider Controls */}
          <div className="absolute top-4 right-4 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={prevPremium} className="w-10 h-10 bg-black/80 text-white flex items-center justify-center hover:bg-accent hover:text-background transition-all">←</button>
            <button onClick={nextPremium} className="w-10 h-10 bg-black/80 text-white flex items-center justify-center hover:bg-accent hover:text-background transition-all">→</button>
          </div>

          <div className="relative z-10">
            <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">The Sanctuary</span>
            <h3 className="font-heading text-2xl font-bold text-white mb-4">Premium Tournament Arena</h3>
            <p className="text-muted-foreground text-base text-muted-foreground mb-6 max-w-md">Private booths featuring Star Tournament tables, Riley lighting, and dedicated server call buttons for uninterrupted focus.</p>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-white text-[10px] font-bold tracking-widest uppercase">Strachan Superfine</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-white text-[10px] font-bold tracking-widest uppercase">Private Suite</span>
            </div>
          </div>
        </div>

        {/* Regular Experience */}
        <div className="md:col-span-5 relative group overflow-hidden bg-card/30 backdrop-blur-md border border-white/5 p-12 flex flex-col justify-end hover:border-white/10 transition-all duration-500">
          <NavLink to="/gallery" className="absolute inset-0 z-0 cursor-pointer">
            {regularImages.map((src, i) => (
              <img
                key={i}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 mix-blend-luminosity ${i === regularIndex ? "opacity-20" : "opacity-0"}`}
                src={src}
                alt="Club Room"
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
          </NavLink>
          
          {/* Slider Controls */}
          <div className="absolute top-4 right-4 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={prevRegular} className="w-10 h-10 bg-black/80 text-white flex items-center justify-center hover:bg-accent hover:text-background transition-all">←</button>
            <button onClick={nextRegular} className="w-10 h-10 bg-black/80 text-white flex items-center justify-center hover:bg-accent hover:text-background transition-all">→</button>
          </div>

          <div className="relative z-10">
            <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">The Club Room</span>
            <h3 className="font-heading text-2xl font-bold text-white mb-4">Club Standard Tables</h3>
            <p className="text-muted-foreground text-base mb-6">High-grade Riley tables in our vibrant social hall. Perfect for league practice and competitive sparring sessions.</p>
            <NavLink to="/booking" className="text-accent text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
              View Availability <span>→</span>
            </NavLink>
          </div>
        </div>
=======
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
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
      </div>
    </section>
  );
};

<<<<<<< HEAD




// MASTER THE GAME
const MasterTheGame = () => {
  return (
    <section className="bg-background py-24">
      <div className="px-6 md:px-12 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* IMAGE SIDE */}
        <div className="relative">
          <div className="aspect-square overflow-hidden relative border border-white/10 bg-card rounded-xl shadow-lg group">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFgYxf0SyzWiPGI8diFtOKxoyiH0sz7Jx4ECPBdrJI132FjznqpXNb5C3e3DxVdksiciN9aM2S0xXtXC5R0EuQczeT-Qd3beB-CmsViYP3_yvalbOR4WyytNutHZLsYa4OJ182a1K4iSF70yH6MvwwbgkCZAGGhCmChqiGitpepZEDAi_81Lt2T1FwMPP2zM64-FsDU7E0HpbhYRqegUAAUPFk7FLMBZRzTx9pkBsXYYITUJxN6oo_qTeZ-31wmpfOB8k29VO3Dac"
              alt="Bridge"
            />
          </div>

          {/* SCOREBOARD */}
          <div className="absolute -bottom-10 -right-10 bg-card/80 backdrop-blur-xl p-8 border border-white/10 hidden md:block rounded-xl shadow-2xl">
            <div className="flex items-center gap-12">
              <div className="text-center">
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                  The Break
                </div>
                <div className="font-heading text-4xl text-accent font-bold">
                  147
                </div>
              </div>

              <div className="w-px h-16 bg-white/10"></div>

              <div className="text-center">
                <div className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2">
                  Accuracy
                </div>
                <div className="font-heading text-4xl text-white font-bold">
                  98%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TEXT SIDE */}
        <div>
          <span className="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">
            Training Programs
          </span>

          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
            Master the Technical Nuances
          </h2>

          <div className="space-y-10">
            
            {/* ITEM 1 */}
            <div className="flex gap-6 group items-start">
              <div className="text-accent mt-1 bg-accent/10 p-3 rounded-lg">
                <Compass size={22} />
              </div>

              <div>
                <h4 className="font-heading text-xl font-bold text-white mb-2">
                  The Perfect Bridge
                </h4>

                <p className="text-muted-foreground text-base leading-relaxed">
                  Biomechanical analysis of your stance, grip, and bridge to ensure absolute stability on every shot.
                </p>

                <div className="w-full h-[2px] bg-white/10 mt-4 overflow-hidden rounded">
                  <div className="w-3/4 h-full bg-accent transition-all duration-500 group-hover:w-full"></div>
                </div>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex gap-6 group items-start">
              <div className="text-accent mt-1 bg-accent/10 p-3 rounded-lg">
                <BarChart size={22} />
              </div>

              <div>
                <h4 className="font-heading text-xl font-bold text-white mb-2">
                  Break Building Strategy
                </h4>

                <p className="text-muted-foreground text-base leading-relaxed">
                  Learn the geometric patterns and positional play secrets used by the world's top 16 professional players.
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex gap-6 group items-start">
              <div className="text-accent mt-1 bg-accent/10 p-3 rounded-lg">
                <Brain size={22} />
              </div>

              <div>
                <h4 className="font-heading text-xl font-bold text-white mb-2">
                  The Mental Frame
                </h4>

                <p className="text-muted-foreground text-base leading-relaxed">
                  Psychological conditioning to maintain focus during high-pressure match scenarios and tournament finals.
                </p>
              </div>
            </div>

          </div>

          {/* BUTTON */}
          <NavLink to="/courses">
            <button className="mt-12 px-10 py-3 bg-accent text-background text-xs font-semibold tracking-widest uppercase rounded-md hover:shadow-[0_0_25px_rgba(197,160,89,0.35)] transition-all">
              View Curriculum
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};



//  MEET YOUR MENTORS(multiple)
// const MeetYourMentors = () => {
//   const [selectedCoach, setSelectedCoach] = useState(null);

//   const coaches = [
//     {
//       name: "David Sterling",
//       spec: "Master Head Coach",
//       experience: "15+ Years",
//       expertise: "Break Building & Psychology",
//       bio: "Former professional circuit player with 10 career centuries. David specializes in advanced break building and match psychology, helping players transition from club level to competitive tournament play.",
//       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMSNaOcrhgtAX25u3KjhHyOP0ZMAnmqri1_DUGf1vVAkLi9mPKOLvNmvqHpWMqycFUNiipgiDc6-nE7WV0Vv7veFlV8SefHMeEAKh5E6zMw3MecqC1HKGTHzARSm98fiM5ht9mY0pXgyVmMcmzW1_r5ao6649ae6wKOW55nCHre28impjZ-DqiBsRU_LJfFWQo_hPH8a39TnygbPIiNYyMjTL-oe4GaYLRXz38sOspncnZGCr-U8np7lrylC6nQGOnrBJ-cWNaoeE"
//     },
//     {
//       name: "Elena Rossi",
//       spec: "Tactical Specialist",
//       experience: "12+ Years",
//       expertise: "Safety Play & Pattern Rebuilt",
//       bio: "Elena is renowned for her defensive strategies. She teaches players how to read the table, plan 3 shots ahead, and execute masterclass safety escapes that win frames.",
//       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzu27kDy-o9eCoJiehc4nqurIKryzKZZnLIn9BoQrwayQFm3Aey0RiSfKvaHaInZpwV1Ux6g9Uo3Zgw7dVpKS34LPgM1oRF37-_IhLUXZQBrNRrIndqvQ2Oizmmvtmijp6JcRZH0kcyJE39tI5tqXEMm2EHCP153cCxBYPS9B_qjDyG5n7LiUjM6nE_5nT80UgVezsapH09qfcVxPedqjy5IzbMHd3Mi4YsTFIXIXf6gNgqlnqtYqkaonLMWucTdmTW7wVxZ2ov4M"
//     },
//     {
//       name: "James Whitmore",
//       spec: "Technical Instructor",
//       experience: "10+ Years",
//       expertise: "Cue Action & Stance",
//       bio: "James focuses on the fundamentals. His biomechanical approach to stance, grip, and cue action has corrected the technique of hundreds of players, leading to immediate consistency.",
//       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTdHbSYlKNK4QN2_kqK823i52DYOpgjfUzQnjyW7EDhpXA5CfoM_2EvGVy4hVcfbRXTPXVLZcUIKnp-zlQUCEW-5FSxnf3jFLlwqZwEokJqptNL2hFxz71tCx85SLjVEaM8XYYG1zaPqAfUFz1zrnSGxxg2kXiCZIIU2ojg5-3t0lSUSEVR3KmCeF8CbP9KNc3IHEKoUiWqI_8g7Nq34KzqwJmCkh3hQ_ujtXWZCMgfnQOC3P3WL0aNwadO44pzOAjOvgy5YeBgI4"
//     }
//   ];

//   return (
//     <section className="px-6 md:px-12 max-w-[1440px] mx-auto py-24">
      
//       {/* HEADER */}
//       <div className="text-center max-w-2xl mx-auto mb-20">
//         <span className="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">
//           Expertise
//         </span>

//         <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
//           Learn From the Elite
//         </h2>

//         <p className="text-muted-foreground font-light text-sm">
//           Our coaches are former professional circuit players and certified world-class instructors dedicated to your improvement.
//         </p>
//       </div>

//       {/* CARDS */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//         {coaches.map((coach, i) => (
//           <div
//             key={i}
//             onClick={() => setSelectedCoach(coach)}
//             className="group cursor-pointer bg-card/60 backdrop-blur-xl border border-white/10 p-6 rounded-xl hover:border-accent/40 hover:shadow-xl transition-all duration-500"
//           >
            
//             {/* IMAGE */}
//             <div className="aspect-[4/5] mb-6 overflow-hidden relative border border-white/10 rounded-lg">
//               <img
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 src={coach.image}
//                 alt={coach.name}
//               />

//               {/* HOVER OVERLAY */}
//               <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
//                 <span className="text-xs font-bold uppercase tracking-widest text-accent">
//                   View Profile
//                 </span>
//               </div>
//             </div>

//             {/* TEXT */}
//             <div className="text-center">
//               <h4 className="font-heading text-xl font-bold text-white mb-1">
//                 {coach.name}
//               </h4>

//               <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
//                 {coach.spec}
//               </p>

//               <div className="flex justify-center gap-1 text-accent text-sm opacity-70 group-hover:opacity-100 transition-all">
//                 ★ ★ ★ ★ ★
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* MODAL */}
//       {selectedCoach && (
//         <div
//           className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50 px-4"
//           onClick={() => setSelectedCoach(null)}
//         >
//           <div
//             className="bg-card/90 backdrop-blur-xl p-8 max-w-2xl w-full border border-white/10 flex flex-col md:flex-row gap-8 relative rounded-xl shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* CLOSE */}
//             <button
//               className="absolute top-4 right-4 text-muted-foreground hover:text-white text-2xl"
//               onClick={() => setSelectedCoach(null)}
//             >
//               ×
//             </button>

//             {/* IMAGE */}
//             <div className="w-full md:w-1/3 aspect-[4/5] overflow-hidden border border-white/10 rounded-lg">
//               <img
//                 src={selectedCoach.image}
//                 alt={selectedCoach.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* CONTENT */}
//             <div className="w-full md:w-2/3 flex flex-col justify-between">
//               <div>
//                 <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
//                   {selectedCoach.spec}
//                 </span>

//                 <h2 className="font-heading text-3xl font-bold text-white mb-4">
//                   {selectedCoach.name}
//                 </h2>

//                 <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
//                   <div>
//                     <span className="text-muted-foreground text-xs uppercase tracking-widest block">
//                       Experience
//                     </span>
//                     <span className="text-white">
//                       {selectedCoach.experience}
//                     </span>
//                   </div>

//                   <div>
//                     <span className="text-muted-foreground text-xs uppercase tracking-widest block">
//                       Expertise
//                     </span>
//                     <span className="text-white">
//                       {selectedCoach.expertise}
//                     </span>
//                   </div>
//                 </div>

//                 <p className="text-muted-foreground text-base leading-relaxed mb-6">
//                   {selectedCoach.bio}
//                 </p>
//               </div>

//               {/* BUTTON (CONSISTENT WITH HERO) */}
//               <button
//                 onClick={() => setSelectedCoach(null)}
//                 className="px-8 py-3 bg-accent text-background text-xs font-semibold tracking-widest uppercase rounded-md hover:shadow-[0_0_25px_rgba(197,160,89,0.35)] transition-all self-start"
//               >
//                 Close Profile
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };
// single 

const MeetYourMentors = () => {
  const [selectedCoach, setSelectedCoach] = useState(null);

  const coach = {
    name: "David Sterling",
    spec: "Master Head Coach",
    experience: "15+ Years",
    expertise: "Break Building & Psychology",
    bio: "Former professional circuit player with 10 career centuries. David specializes in advanced break building and match psychology, helping players transition from club level to competitive tournament play.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMSNaOcrhgtAX25u3KjhHyOP0ZMAnmqri1_DUGf1vVAkLi9mPKOLvNmvqHpWMqycFUNiipgiDc6-nE7WV0Vv7veFlV8SefHMeEAKh5E6zMw3MecqC1HKGTHzARSm98fiM5ht9mY0pXgyVmMcmzW1_r5ao6649ae6wKOW55nCHre28impjZ-DqiBsRU_LJfFWQo_hPH8a39TnygbPIiNYyMjTL-oe4GaYLRXz38sOspncnZGCr-U8np7lrylC6nQGOnrBJ-cWNaoeE"
  };

  return (
    <section className="px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto py-20 md:py-28">
      
      {/* HEADER */}
      <div className="max-w-2xl mb-12 md:mb-16">
        <span className="text-accent text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 block">
          Expertise
        </span>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Learn From the Elite
        </h2>

        <p className="text-white/70 text-sm sm:text-base">
          Train under world-class guidance and elevate your game with precision coaching and professional insights.
        </p>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* IMAGE */}
        <div
          onClick={() => setSelectedCoach(coach)}
          className="relative group cursor-pointer order-1 lg:order-none"
        >
          <div className="aspect-[4/5] sm:aspect-[4/5] overflow-hidden rounded-xl border border-white/10">
            <img
              src={coach.image}
              alt={coach.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Hover overlay (disabled on mobile) */}
          <div className="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all rounded-xl items-center justify-center">
            <span className="text-accent text-xs font-bold tracking-widest uppercase">
              View Profile
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="order-2 lg:order-none">
          <span className="text-accent text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 block">
            {coach.spec}
          </span>

          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            {coach.name}
          </h3>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 md:mb-8">
            {coach.bio}
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
            <div className="border border-white/10 p-3 sm:p-4 rounded-lg">
              <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-widest block mb-1">
                Experience
              </span>
              <span className="text-white font-semibold text-base sm:text-lg">
                {coach.experience}
              </span>
            </div>

            <div className="border border-white/10 p-3 sm:p-4 rounded-lg">
              <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-widest block mb-1">
                Expertise
              </span>
              <span className="text-white font-semibold text-base sm:text-lg">
                {coach.expertise}
              </span>
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={() => setSelectedCoach(coach)}
            className="w-full sm:w-auto px-8 sm:px-10 py-3 bg-accent text-background text-[10px] sm:text-xs font-semibold tracking-widest uppercase rounded-md hover:shadow-[0_0_25px_rgba(197,160,89,0.35)] transition-all"
          >
            View Full Profile
          </button>
        </div>
      </div>

      {/* MODAL */}
      {selectedCoach && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedCoach(null)}
        >
          <div
            className="bg-card/90 backdrop-blur-xl p-6 sm:p-8 max-w-2xl w-full border border-white/10 flex flex-col md:flex-row gap-6 md:gap-8 relative rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              className="absolute top-3 right-4 text-white/50 hover:text-white text-2xl"
              onClick={() => setSelectedCoach(null)}
            >
              ×
            </button>

            {/* IMAGE */}
            <div className="w-full md:w-1/3 aspect-[4/5] overflow-hidden border border-white/10 rounded-lg">
              <img
                src={selectedCoach.image}
                alt={selectedCoach.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="w-full md:w-2/3 flex flex-col justify-between">
              <div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
                  {selectedCoach.spec}
                </span>

                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                  {selectedCoach.name}
                </h2>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-white/50 text-[10px] uppercase tracking-widest block">
                      Experience
                    </span>
                    <span className="text-white text-sm sm:text-base">
                      {selectedCoach.experience}
                    </span>
                  </div>

                  <div>
                    <span className="text-white/50 text-[10px] uppercase tracking-widest block">
                      Expertise
                    </span>
                    <span className="text-white text-sm sm:text-base">
                      {selectedCoach.expertise}
                    </span>
                  </div>
                </div>

                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                  {selectedCoach.bio}
                </p>
              </div>

              <button
                onClick={() => setSelectedCoach(null)}
                className="w-full sm:w-auto px-8 py-3 bg-accent text-background text-[10px] sm:text-xs font-semibold tracking-widest uppercase rounded-md hover:shadow-[0_0_25px_rgba(197,160,89,0.35)] transition-all"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};








const FinalCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      
      {/* Background (same style as Hero) */}
      <div className="absolute inset-0 z-0">
      
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
      </div>

      {/* Soft Glows (same system as Hero) */}
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-primary/10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-accent/10 blur-3xl rounded-full pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-[900px] mx-auto text-center">
        
        <span className="text-accent text-xs font-bold uppercase tracking-[0.4em] mb-6 block">
          Your Journey Starts Here
        </span>

        <h2 className="font-heading text-4xl md:text-6xl text-white mb-6 leading-tight">
          Ready to Take Your Seat?
        </h2>

        <p className="text-white/70 text-base md:text-lg mb-12 leading-relaxed">
          Join the elite ranks of The Break Academy and transform your game with unparalleled facilities and coaching.
        </p>

        {/* Buttons (IDENTICAL to Hero) */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          
          <NavLink to="/booking">
            <button className="px-10 py-3 bg-accent text-background text-xs font-semibold tracking-widest uppercase rounded-md hover:shadow-[0_0_25px_rgba(197,160,89,0.35)] transition-all">
              Join the Academy
            </button>
          </NavLink>

          <NavLink to="/contact">
            <button className="px-10 py-3 border border-white/20 text-white text-xs font-semibold tracking-widest uppercase rounded-md hover:bg-white hover:text-background transition-all">
              Contact Us
            </button>
          </NavLink>

        </div>
=======
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
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
      </div>
    </section>
  );
};

<<<<<<< HEAD
// FACILITY PHOTOS
const FacilityPhotos = () => {
  const images = [img1, img2, img3];

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">Gallery</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">The Academy in Frames</h2>
        <p className="text-muted-foreground font-light text-sm">Take a look at our professional environment and state-of-the-art facilities.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {images.map((src, i) => (
          <NavLink to="/gallery" key={i} className="group overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-500 cursor-pointer">
            <img src={src} className="h-80 w-full object-cover transition-all duration-700 scale-100 group-hover:scale-105 mix-blend-luminosity" />
          </NavLink>
=======
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
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
        ))}
      </div>
    </section>
  );
};

// REVIEWS
<<<<<<< HEAD
const Reviews = () => {
  const reviews = [
    { text: "The best place for serious players in Srinagar. The tables are perfectly maintained.", author: "Ahmad" },
    { text: "Amazing ambiance and very focused environment. The private booths are top notch.", author: "Yasir" },
    { text: "Coaching here transformed my game. Highly recommended for beginners and pros alike.", author: "Umer" }
  ];

  return (
    <section className="bg-[#0e0e0e] py-24">
      <div className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent text-xs font-bold uppercase tracking-widest mb-4 block">Testimonials</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">What Players Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-card/50 backdrop-blur-md p-8 border border-white/5 hover:border-accent/30 transition-all duration-500">
              <span className="text-accent text-4xl font-heading mb-4 block">“</span>
              <p className="text-muted-foreground text-base text-muted-foreground mb-6 leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-heading font-bold">
                  {r.author.charAt(0)}
                </div>
                <div>
                  <p className="font-heading text-sm text-white font-bold">{r.author}</p>
                  <div className="flex text-accent text-xs">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
=======
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
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389

// MAIN
const HomePage = () => {
  return (
<<<<<<< HEAD
    <div className="bg-background">
   

      <div className="relative z-10">
        <Hero />
        <ExperienceComparison />
        <MasterTheGame />
        <MeetYourMentors />
        <FacilityPhotos />
        <Reviews />
        <FinalCTA />
      </div>
    </div>
  );

=======
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
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
};

export default HomePage;