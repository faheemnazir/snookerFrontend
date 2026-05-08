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

      setError(
        err?.response?.data?.message ||
        "Failed to fetch enrollments"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <SectionCard
        title="Academy Hub"
        description="Executive management of training inquiries and student enrollment status"
      >
        <div className="bg-[#111]/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.25)]">
          
          {/* HEADER */}
          <div className="p-8 border-b border-gray-800">
            <h2 className="text-3xl font-semibold mb-3">
              Course Enrollments
            </h2>

            <div className="w-16 h-[2px] bg-green-500 mb-4" />

            <p className="text-gray-500 text-lg">
              Monitor player registrations and academy inquiries.
            </p>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">

            <table className="w-full min-w-[800px]">

              <thead className="bg-black border-b border-gray-800">
                <tr className="text-left">
                  <th className="px-6 py-5 text-sm uppercase tracking-widest text-gray-500 font-semibold">
                    Candidate
                  </th>

                  <th className="px-6 py-5 text-sm uppercase tracking-widest text-gray-500 font-semibold">
                    Course
                  </th>

                  <th className="px-6 py-5 text-sm uppercase tracking-widest text-gray-500 font-semibold">
                    Enrollment Date
                  </th>

                  <th className="px-6 py-5 text-sm uppercase tracking-widest text-gray-500 font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>

                {loading ? (

                  <tr>
                    <td
                      colSpan="4"
                      className="py-20 text-center text-gray-500 text-xl"
                    >
                      Loading enrollments...
                    </td>
                  </tr>

                ) : enrollments.length === 0 ? (

                  <tr>
                    <td
                      colSpan="4"
                      className="py-20 text-center text-gray-500 text-xl"
                    >
                      No enrollments found.
                    </td>
                  </tr>

                ) : (

                  enrollments.map((e) => (
                    <tr
                      key={e.id}
                      className="border-b border-gray-800 hover:bg-[#181818] transition"
                    >

                      {/* PLAYER */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">

                          <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 font-semibold text-lg">
                            {e.playerName?.charAt(0) || "P"}
                          </div>

                          <div>
                            <p className="text-white text-lg font-medium">
                              {e.playerName}
                            </p>

                            <p className="text-gray-500 text-sm">
                              {e.playerPhone}
                            </p>
                          </div>

                        </div>
                      </td>

                      {/* COURSE */}
                      <td className="px-6 py-5">
                        <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm">
                          {e.courseTitle}
                        </span>
                      </td>

                      {/* DATE */}
                      <td className="px-6 py-5 text-gray-400 text-lg">
                        {e.enrolledAt
                          ? new Date(e.enrolledAt).toLocaleDateString(
                              undefined,
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )
                          : "N/A"}
                      </td>

                      {/* ACTION */}
                      <td className="px-6 py-5">
                        <a
                          href={`https://wa.me/${e.playerPhone?.replace(/\s+/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-5 py-2 bg-green-500 text-black rounded-xl font-semibold hover:bg-green-600 transition"
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
            <div className="m-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center">
              {error}
            </div>
          )}

          {/* FOOTER */}
          <div className="px-8 py-5 border-t border-gray-800 text-gray-600 text-sm">
            Academy Management System • Secure Data Stream v3.5.5
          </div>

        </div>
      </SectionCard>
    </div>
  );
};

export default CourseEnrollees;