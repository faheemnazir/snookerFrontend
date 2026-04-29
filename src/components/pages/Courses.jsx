import React, { useState } from "react";
import logo from "../../assets/logo.png";

const courses = [
  {
    title: "1hr Session",
    subtitle: "Flexible Practice",
    desc: "A flexible, self-paced session for players who want to practice regularly while still having access to light guidance when needed.",
    details: [
      "Self-paced play with optional guidance from staff",
      "Focus on fundamentals: stance, grip, cue action",
      "Freedom to practice specific shots and drills",
      "Access to regular or VIP tables based on availability",
      "No long-term commitment required",
    ],
    includes: [
      "Basic technique corrections when requested",
      "Table setup and equipment support",
      "Ideal warm-up sessions before matches",
    ],
    outcomes: [
      "Improved comfort on the table",
      "Better shot consistency",
      "Stronger basic control",
    ],
  },
  {
    title: "Weekly Training",
    subtitle: "Structured Improvement",
    desc: "A guided weekly program designed to build consistency, discipline, and measurable improvement through structured sessions.",
    details: [
      "Fixed weekly sessions with progressive learning",
      "Drills focused on cue ball control and positioning",
      "Introduction to break building and safety play",
      "Regular feedback on technique and decision-making",
      "Balanced mix of solo practice and guided drills",
    ],
    includes: [
      "Planned session structure each week",
      "Skill tracking and gradual progression",
      "Exposure to match-like scenarios",
    ],
    outcomes: [
      "Improved consistency under pressure",
      "Better positional awareness",
      "Stronger match fundamentals",
    ],
  },
  {
    title: "2-Week Program",
    subtitle: "Advanced Mentorship",
    desc: "A focused, high-impact training program with dedicated mentorship for players who are serious about rapid improvement.",
    highlight: true,
    details: [
      "Daily or frequent sessions over a 2-week period",
      "One-on-one mentorship and detailed guidance",
      "Advanced techniques including spin control and break building",
      "Strategic gameplay and match planning",
      "Performance analysis and correction",
    ],
    includes: [
      "Personalized training plan",
      "Direct mentor feedback every session",
      "Match simulations with real-time corrections",
    ],
    outcomes: [
      "Noticeable improvement within weeks",
      "Stronger competitive mindset",
      "Advanced control and confidence",
    ],
  },
];

const CoursesPage = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  return (
   

      <div className="bg-black text-white min-h-screen relative z-10">
        {/* HEADER */}
        <section className="py-20 px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            Courses & Training
          </h1>
          <div className="w-16 h-[2px] bg-green-500 mx-auto mb-8" />
          <p className="text-gray-500 max-w-xl text-xl mx-auto text-sm leading-relaxed">
            Structured programs designed to take you from basic control to
            confident, competitive play — with clarity at every step.
          </p>
        </section>

        {/* COURSES */}
        <section className="px-6 pb-20">
         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start">
            {courses.map((course, i) => {
              const isActive = activeIndex === i;

              return (
                <div
                  key={i}
                  className={`flex flex-col p-6 rounded-2xl border transition duration-300 hover:-translate-y-1 ${
                    course.highlight
                      ? "bg-gradient-to-b from-green-500/10 to-transparent border-green-500/40 shadow-[0_0_25px_rgba(34,197,94,0.12)]"
                      : "bg-[#111]/80 backdrop-blur-sm border-gray-800 hover:border-green-500/40"
                  }`}
                >
                  {/* HEADER */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold">
                      {course.title}
                    </h3>
                    <p className="text-green-500 text-sm tracking-wide">
                      {course.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-500 text-xl mb-4 leading-relaxed">
                    {course.desc}
                  </p>

                  

                  {/* ACCORDION */}
                  <div className="flex-1 space-y-3">
                    {[
                      { title: "What You’ll Do", data: course.details },
                      { title: "What’s Included", data: course.includes },
                      { title: "Expected Outcomes", data: course.outcomes },
                    ].map((section, idx) => {
                      const isOpen =
                        isActive && activeTab === idx;

                      return (
                        <div key={idx} className="border-t border-gray-800 pt-3">
                          <button
                            onClick={() => {
                              setActiveIndex(i);
                              setActiveTab(isOpen ? null : idx);
                            }}
                            className="w-full flex justify-between items-center"
                          >
                            <span className="text-medium uppercase tracking-widest text-white/70">
                              {section.title}
                            </span>
                            <span className="text-green-500 text-lg">
                              {isOpen ? "−" : "+"}
                            </span>
                          </button>

                          {isOpen && (
                            <ul className="mt-3 space-y-2 text-gray-400 text-lg leading-relaxed">
                              {section.data.map((item, j) => (
                                <li key={j} className="flex gap-2">
                                  <span className="text-green-500">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* BUTTON */}
                  <button
                    onClick={() => setOpen(true)}
                    className="mt-6 text-xl w-full py-2.5 bg-green-500 text-black rounded-xl font-semibold hover:bg-green-600 transition"
                  >
                    Enroll Now
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* MODAL */}
        {open && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-[#111] p-8 rounded-2xl max-w-md w-full text-center border border-gray-800">
              <h2 className="text-2xl mb-4">Contact to Enroll</h2>
              <p className="text-gray-400 mb-6 text-xl">
                Call or message to reserve your session or get more details
                about the programs.
              </p>

              <div className="text-2xl mb-6 text-green-500">
                +91 7000000000
              </div>

              <a
                href="tel:+917000000000"
                className="block w-full text-xl py-3 bg-green-500 text-black rounded-xl font-semibold hover:bg-green-600 transition mb-4"
              >
                Call Now
              </a>

              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white text-xl"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    
  );
};

export default CoursesPage;
