import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { enrollCourse, getAllCourses } from "../../Services/api";

const courses = [
  {
    title: "The Century Break Masterclass",
    subtitle: "2 Week Professional Residency",
    desc: "An immersive residential program focused on high-pressure frame management.",
    rating: "4.9",
    duration: "2 Weeks",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqsTsbuZBq-8kdgq_-LGKTKOZ2Sn8emG9r1ZNpKzB1yKiWMlx4wsmcQFRtOZQiAxvI2Bo-Xxb6ADrqmE9RpdLTyn_0z0WJyegEPKJJCmY31h5VRYhj-eDttCLuykDWSuRAFa-PuB4yhZuZscXmULz_7G9YTsp3hlhX3nsarheiwfepYC-6NCmYreBLUXO6ZQtZWl4adLLhfY6lkLQp_X4aZZ2mezXR4VCM2uaxFZ6w4COuyYxCVLp1g17yIEdlS32TWEGYqMZBNOI",
    details: ["High-pressure frame management", "Break building techniques", "Top-16 professional secrets"],
    includes: ["Residency stay", "Daily 1-on-1 coaching", "Video analysis"],
    outcomes: ["Achieve a century break", "Master tournament pressure"]
  },
  {
    title: "Cue Action Fundamentals",
    subtitle: "1 Hour Intensive",
    desc: "Eliminate inconsistencies in your stroke with our proprietary alignment matrix analysis.",
    rating: "5.0",
    duration: "1 Hour",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbju0V8AhQ-Cl4Jp98Tg0tDv9fGoITeem2xKyH7iH15PmtveFvx5LY_u_ixJVIpmFTkk9H-GkknIngoLkkEn9Jmtuq-_Sfj153zkXhVEAcm4xeZOa9Kmv1puu0vnyJ81cbMscAdOlk3JrI2qgJzZTrEThZC-8N5WKrQOi95topHL3SWN-MC5u9pG7klEHOFf9Fd0JespYkAXoazekTPTo5Y3It8-qrEwPlMk7yAj3TDMgrzlYkzOJSumLKqhog0tjgYsmP7krMpvo",
    details: ["Stroke alignment analysis", "Grip and bridge correction", "Follow-through consistency"],
    includes: ["1 hour intense coaching", "High-speed video review"],
    outcomes: ["Perfect cue action", "Fewer missed easy pots"]
  },
  {
    title: "The Art of Safety Play",
    subtitle: "1 Week Masterclass",
    desc: "Learn to control the table with precision safety play. Master the geometric patterns used by top professionals.",
    rating: "4.5",
    duration: "1 Week",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwpXVSLMInN8UlnCUGB8Tn2OyVAnlRE6YG_qB-LjM2-n-HSDfQTpPFYWZTLT-_5HXRLbkX2ko3Mx-0hTHiVdCK9E2llO2ChbE5fXFu1zLHC6Tu6mt3HZucG4dKnpMj6TB3K_T4WZNOdiwiu9TOI99W2i1BDa6jKccJcsrTc_F5mXCYu-yhE80E5rRGOVKBb9M2LX7p4Ft5twzXGZYeWK-W_XUQbKZuKOa66yqShZ6Tg_Mc90iM9JFmR4fc0wEsG5zBQOT0E6FUcKM",
    details: ["Geometric safety patterns", "Snooker escapes", "Weight of ball control"],
    includes: ["1 week masterclass", "Access to practice materials"],
    outcomes: ["Control the table", "Win safety battles"]
  },
  {
    title: "Advanced Side & Swerve",
    subtitle: "1 Hour Intensive",
    desc: "Master the use of side spin and swerve shots to get out of difficult situations and maintain position.",
    rating: "5.0",
    duration: "1 Hour",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDC_fU058FE9Or1W6vkYDJT28OlItNLmpK5ocmlIIQAdZhpaE4Ic4BIN1PJI0npuozUkwSggwumqa_73WcibKnja7evOrFyjBAU5SL887XmKgdPTcGoz3ANXxsHrlV7u2MxLfzk1nlGtxWSeAiIMH2tsI9zvxDFNpFaBA6yxnof0KD4H0jzqTwc3NmR2wrvpi5VdBtC3vPrKDFX5SKkUJTLeyz4TmnITR1w3HrO2kXTkRMdCqPK6zkvqKUeRXdI9cRsCjR-ItdyKFY",
    details: ["Side spin application", "Swerve shot physics", "Massé shot basics"],
    includes: ["1 hour intensive", "Demonstration by coach"],
    outcomes: ["Escape snookers easily", "Advanced position play"]
  },
  {
    title: "The Psychological Edge",
    subtitle: "2 Week Professional Residency",
    desc: "Master the psychological aspects of the game. Focus on match temperament, routine, and visualization.",
    rating: "4.5",
    duration: "2 Weeks",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlG5j9elYdwDcUUG-jk9R6a4CBDQlJIJoB6yziIcE3T9U6PYOWeDZNWzrBRVYEoB6IXvogX_9sACDaKfEVKCJk8MIxDt1p_tXx6DbmI9Pe9xOawk9Uy_Pn5N-gnVIekCy2gcAMnvZc5aBuNB4LgdWhkQdoB-Df_NmI_SMrOk4bvY_a84qrRmbFLoh6fWl633VJsrTW-_hW_DgJejtKxhTkMckCC7YXDVEa-w5zKoeFwQKVLi2WZMtUp4QkLs_w0eeka2l3dvp93Sw",
    details: ["Match temperament training", "Pre-shot routine consistency", "Visualization techniques"],
    includes: ["2 weeks residency", "Psychological assessment"],
    outcomes: ["Maintain focus under pressure", "Consistent pre-shot routine"]
  }
];

const CoursesPage = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [coursesList, setCoursesList] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getAllCourses();
        setCoursesList(data);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
      } finally {
        setCoursesLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const [formData, setFormData] = useState({
    playerName: "",
    lastName: "",
    email: "",
    playerPhone: "",
    gender: "MALE",
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [acknowledged, setAcknowledged] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [showBookingChoice, setShowBookingChoice] = useState(false);

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
            Master the Geometry
          </h1>
          <p className="text-muted-foreground font-light text-md max-w-2xl mx-auto leading-relaxed">
            From foundational cue action to advanced break-building strategies, our structured programs are designed for measurable improvement.
          </p>
        </section>

     {/* COURSES */}
<section className="px-6 pb-24">
  <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
    {coursesLoading ? (
      <p className="text-muted-foreground text-center col-span-3 text-sm">
        Loading courses...
      </p>
    ) : (
      (coursesList.length > 0 ? coursesList : courses).map((course, i) => {
        return (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/60 backdrop-blur-xl transition-all duration-500 hover:border-accent/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(197,160,89,0.15)]"
          >
            {/* GLOW */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.12),transparent_60%)] pointer-events-none" />

            {/* IMAGE */}
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* DURATION */}
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent backdrop-blur-md">
                  {course.duration}
                </span>
              </div>

              {/* RATING */}
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-full border border-white/10 bg-black/40 text-accent backdrop-blur-md">
                  <span>★</span>
                  <span>{course.rating}</span>
                </div>
              </div>

              {/* VIEW */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold">
                  Explore Course
                </span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-7 flex flex-col flex-1">
              {/* SUBTITLE */}
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent mb-3">
                {course.subtitle}
              </span>

              {/* TITLE */}
              <h3 className="font-heading text-2xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-accent">
                {course.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-white/60 text-sm leading-relaxed mb-7 flex-1">
                {course.desc}
              </p>

              {/* BUTTON */}
              <button
                onClick={() => {
                  setSelectedCourse(course);
                  setOpen(true);
                  setSuccess(false);
                  setAcknowledged(false);
                  setConfirming(false);
                  setShowBookingChoice(true);

                  setFormData({
                    playerName: "",
                    lastName: "",
                    email: "",
                    playerPhone: "",
                    gender: "MALE",
                  });
                }}
                className="w-full text-xs font-bold uppercase tracking-widest py-3 bg-transparent border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 rounded-xl"
              >
                Enroll Now
              </button>
            </div>
          </div>
        );
      })
    )}
  </div>
</section>

        {/* MODAL */}
        {open && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 px-4"
            onClick={() => setOpen(false)}
          >
            <div
              className="bg-card p-8 max-w-md w-full border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {!confirming && !success ? (
                showBookingChoice ? (
                  <div className="text-center">
                    <h2 className="font-heading text-2xl font-bold mb-4 text-white">Proceed to Booking?</h2>
                    <p className="text-muted-foreground font-light mb-6 text-sm">Do you want to proceed to the booking page to reserve a table for practice?</p>
                    <div className="flex gap-4">
                      <button
                        onClick={() => setOpen(false)}
                        className="flex-1 py-3 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-background transition-all"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          window.location.href = "/booking";
                        }}
                        className="flex-1 py-3 bg-accent text-background text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all"
                      >
                        Proceed to Book
                      </button>
                    </div>
                    <button
                      onClick={() => setShowBookingChoice(false)}
                      className="mt-4 text-xs font-bold uppercase tracking-widest text-accent hover:text-white transition-all"
                    >
                      Or continue to Enrollment
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-heading text-2xl font-bold mb-2 text-center text-white">Enroll in {selectedCourse?.title}</h2>
                    <p className="text-muted-foreground text-sm font-light mb-2 text-center">{selectedCourse?.subtitle}</p>
                    <p className="text-[10px] text-muted-foreground mb-6 text-center uppercase tracking-widest">Fields marked with <span className="text-red-500">*</span> are mandatory</p>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!formData.playerName || !formData.playerPhone || !formData.lastName || !formData.email) {
                          return alert("Please fill all required fields");
                        }

                        const nameRegex = /^[a-zA-Z]+$/;
                        const phoneRegex = /^[0-9]{10}$/;

                        if (!nameRegex.test(formData.playerName)) {
                          return alert("First name must contain only letters without spaces or special characters");
                        }
                        if (!nameRegex.test(formData.lastName)) {
                          return alert("Last name must contain only letters without spaces or special characters");
                        }
                        if (!phoneRegex.test(formData.playerPhone)) {
                          return alert("Phone number must be exactly 10 digits");
                        }

                        setConfirming(true);
                      }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1 block">First Name <span className="text-red-500">*</span></label>
                          <input
                            required
                            type="text"
                            value={formData.playerName}
                            onChange={(e) => setFormData({ ...formData, playerName: e.target.value })}
                            className="w-full bg-background border border-white/5 px-4 py-3 text-white focus:outline-none focus:border-accent text-sm"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1 block">Last Name <span className="text-red-500">*</span></label>
                          <input
                            required
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            className="w-full bg-background border border-white/5 px-4 py-3 text-white focus:outline-none focus:border-accent text-sm"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1 block">Email Address <span className="text-red-500">*</span></label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-background border border-white/5 px-4 py-3 text-white focus:outline-none focus:border-accent text-sm"
                          placeholder="john.doe@example.com"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1 block">Phone Number <span className="text-red-500">*</span></label>
                        <input
                          required
                          type="tel"
                          value={formData.playerPhone}
                          onChange={(e) => setFormData({ ...formData, playerPhone: e.target.value })}
                          className="w-full bg-background border border-white/5 px-4 py-3 text-white focus:outline-none focus:border-accent text-sm"
                          placeholder="10 digit number"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1 block">Gender</label>
                        <select
                          value={formData.gender}
                          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                          className="w-full bg-background border border-white/5 px-4 py-3 text-white focus:outline-none focus:border-accent text-sm"
                        >
                          <option value="MALE">Male</option>
                          <option value="FEMALE">Female</option>
                          <option value="OTHER">Other</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3 bg-accent text-background font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition"
                      >
                        Proceed to Review
                      </button>
                    </form>
                  </>
                )
              ) : confirming && !success ? (
                <div className="space-y-6">
                  <h2 className="font-heading text-2xl font-bold mb-2 text-center text-white">Are these details correct?</h2>

                  <div className="bg-background/50 p-4 border border-white/5 space-y-3 text-sm">
                    <p><span className="text-muted-foreground">Course:</span> <span className="text-white">{selectedCourse?.title}</span></p>
                    <p><span className="text-muted-foreground">Duration:</span> <span className="text-white">{selectedCourse?.duration}</span></p>
                    <hr className="border-white/5" />
                    <p><span className="text-muted-foreground">First Name:</span> <span className="text-white">{formData.playerName}</span></p>
                    <p><span className="text-muted-foreground">Last Name:</span> <span className="text-white">{formData.lastName}</span></p>
                    <p><span className="text-muted-foreground">Email:</span> <span className="text-white">{formData.email}</span></p>
                    <p><span className="text-muted-foreground">Phone:</span> <span className="text-white">{formData.playerPhone}</span></p>
                    <p><span className="text-muted-foreground">Gender:</span> <span className="text-white">{formData.gender}</span></p>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setConfirming(false)}
                      className="flex-1 py-3 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-background transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={async () => {
                        try {
                          setLoading(true);
                          await enrollCourse({
                            playerName: formData.playerName,
                            lastName: formData.lastName,
                            email: formData.email,
                            playerPhone: formData.playerPhone,
                            gender: formData.gender,
                            courseTitle: selectedCourse.title,
                          });

                          // Generate WhatsApp link
                          const text = `Hi, I have enrolled in the course.\n\nCourse Details:\nID: ${selectedCourse?.id || 'N/A'}\nName: ${selectedCourse?.title}\nDuration: ${selectedCourse?.duration}\n\nMy Details:\nName: ${formData.playerName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.playerPhone}\nGender: ${formData.gender}`;
                          const whatsappUrl = `https://wa.me/919858347754?text=${encodeURIComponent(text)}`;

                          // Redirect to WhatsApp
                          window.open(whatsappUrl, '_blank');

                          // Close modal
                          setOpen(false);
                          setConfirming(false);

                        } catch (err) {
                          alert("Enrollment failed. Please try again.");
                        } finally {
                          setLoading(false);
                        }
                      }}
                      disabled={loading}
                      className="flex-1 py-3 bg-accent text-background text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition disabled:opacity-50"
                    >
                      {loading ? "Processing..." : "Confirm & Enroll"}
                    </button>
                  </div>
                </div>
              ) : !acknowledged ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent text-3xl">✓</span>
                  </div>
                  <h2 className="font-heading text-2xl font-bold mb-2 text-accent">You are now enrolled!</h2>

                  <div className="bg-background/50 p-4 border border-white/5 mb-6 text-left text-sm space-y-2">
                    <p className="font-bold text-white text-xs uppercase tracking-widest mb-1">Course Details:</p>
                    <p><span className="text-muted-foreground">ID:</span> <span className="text-white">{selectedCourse?.id || 'N/A'}</span></p>
                    <p><span className="text-muted-foreground">Name:</span> <span className="text-white">{selectedCourse?.title}</span></p>
                    <p><span className="text-muted-foreground">Duration:</span> <span className="text-white">{selectedCourse?.duration}</span></p>
                    <hr className="border-white/5 my-2" />
                    <p className="font-bold text-white text-xs uppercase tracking-widest mb-1">Your Details:</p>
                    <p><span className="text-muted-foreground">Name:</span> <span className="text-white">{formData.playerName} {formData.lastName}</span></p>
                    <p><span className="text-muted-foreground">Email:</span> <span className="text-white">{formData.email}</span></p>
                    <p><span className="text-muted-foreground">Phone:</span> <span className="text-white">{formData.playerPhone}</span></p>
                  </div>

                  <button
                    onClick={() => setAcknowledged(true)}
                    className="w-full py-3 bg-accent text-background text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition"
                  >
                    Acknowledge
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent text-3xl">💬</span>
                  </div>
                  <h2 className="font-heading text-2xl font-bold mb-2 text-accent">Share on WhatsApp</h2>
                  <p className="text-muted-foreground text-sm font-light mb-6">
                    Please send this confirmation to us on WhatsApp to finalize your schedule.
                  </p>

                  <a
                    href={`https://wa.me/919858347754?text=${encodeURIComponent(
                      `Hi, I have enrolled in the course.\n\nCourse Details:\nID: ${selectedCourse?.id || 'N/A'}\nName: ${selectedCourse?.title}\nDuration: ${selectedCourse?.duration}\n\nMy Details:\nName: ${formData.playerName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.playerPhone}\nGender: ${formData.gender}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 bg-accent text-background text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition mb-4"
                  >
                    Send to WhatsApp
                  </a>

                  <button
                    onClick={() => setOpen(false)}
                    className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-all"
                  >
                    Close
                  </button>
                </div>
              )}

              {!success && (
                <button
                  onClick={() => setOpen(false)}
                  className="mt-4 w-full text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-white text-center transition-all"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
