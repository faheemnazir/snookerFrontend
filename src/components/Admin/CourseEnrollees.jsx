import React, { useEffect, useState } from "react";
import { getAllEnrollments } from "../../Services/api";
import SectionCard from "../common/SectionCard";

const CourseEnrollees = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      setLoading(true);
      const response = await getAllEnrollments();
      setEnrollments(Array.isArray(response) ? response : []);
    } catch (err) {
      console.log(err);
      setError(err?.response?.data?.message || "Failed to fetch enrollments");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-white min-h-screen relative overflow-hidden">
      {/* Cinematic Background Overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#004D40]/10 to-[#0A0A0A]"></div>
      </div>

      <div className="relative z-10">
        <SectionCard
          title="Academy Hub"
          description="Executive management of training inquiries and student enrollment status"
        >
          <div className="bg-card/50 backdrop-blur-md border border-white/5 overflow-hidden">
            
            {/* HEADER */}
            <div className="p-8 border-b border-white/5">
              <h2 className="font-heading text-3xl font-bold uppercase text-white mb-3">
                Course Enrollments
              </h2>
              <div className="w-16 h-[2px] bg-accent mb-4" />
              <p className="text-muted-foreground font-light text-sm">
                Monitor player registrations and academy inquiries.
              </p>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest border-b border-white/5">
                  <tr className="text-left">
                    <th className="px-6 py-5">
                      Candidate
                    </th>
                    <th className="px-6 py-5">
                      Course
                    </th>
                    <th className="px-6 py-5">
                      Enrollment Date
                    </th>
                    <th className="px-6 py-5">
                      Status
                    </th>
                    <th className="px-6 py-5">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="py-20 text-center text-muted-foreground font-light text-sm">
                        Loading enrollments...
                      </td>
                    </tr>
                  ) : enrollments.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="py-20 text-center text-muted-foreground font-light text-sm">
                        No enrollments found.
                      </td>
                    </tr>
                  ) : (
                    enrollments.map((e) => (
                      <tr key={e.id} className="border-b border-white/5 hover:bg-white/5 transition-all">
                        {/* PLAYER */}
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-heading text-lg font-bold">
                              {e.playerName?.charAt(0) || "P"}
                            </div>
                            <div>
                              <p className="text-white font-bold text-sm">
                                {e.playerName}
                              </p>
                              <p className="text-muted-foreground text-xs">
                                {e.playerPhone}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* COURSE */}
                        <td className="px-6 py-5">
                          <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-accent/10 border border-accent/20 text-accent">
                            {e.courseTitle}
                          </span>
                        </td>

                        {/* DATE */}
                        <td className="px-6 py-5 text-muted-foreground font-light text-sm">
                          {e.enrolledAt
                            ? new Date(e.enrolledAt).toLocaleDateString(
                                undefined,
                                { year: "numeric", month: "short", day: "numeric" }
                              )
                            : "N/A"}
                        </td>

                        {/* STATUS */}
                        <td className="px-6 py-5">
                          <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${
                            e.status === 'COMPLETED' 
                              ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20' 
                              : 'bg-accent/10 text-accent border border-accent/20'
                          }`}>
                            {e.status || "ACTIVE"}
                          </span>
                        </td>

                        {/* ACTION */}
                        <td className="px-6 py-5">
                          <a
                            href={`https://wa.me/${e.playerPhone?.replace(/\s+/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 bg-accent text-background text-[10px] font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all"
                          >
                            Contact
                          </a>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* ERROR */}
            {error && (
              <div className="m-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center font-bold text-xs uppercase tracking-widest">
                {error}
              </div>
            )}

            {/* FOOTER */}
            <div className="px-8 py-5 border-t border-white/5 text-muted-foreground font-light text-xs">
              Academy Management System • Secure Data Stream v3.5.5
            </div>

          </div>
        </SectionCard>
      </div>
    </div>
  );
};

export default CourseEnrollees;