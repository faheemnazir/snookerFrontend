import React, { useEffect, useState } from "react";
import {
  getActiveBookings,
  getAllEnrollments,
} from "../../Services/api";
import SectionCard from "../common/SectionCard";

const AdminOverview = () => {
  const [bookings, setBookings] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      const [bookingsResponse, enrollmentsResponse] =
        await Promise.all([
          getActiveBookings(),
          getAllEnrollments(),
        ]);

      setBookings(
        Array.isArray(bookingsResponse)
          ? bookingsResponse
          : []
      );

      setEnrollments(
        Array.isArray(enrollmentsResponse)
          ? enrollmentsResponse
          : []
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const now = new Date();
  const thisMonth = now.getMonth();
  const thisYear = now.getFullYear();

  const monthlyBookings = bookings.filter((b) => {
    const d = new Date(b.startTime);

    return (
      d.getMonth() === thisMonth &&
      d.getFullYear() === thisYear
    );
  });

  const stats = {
    totalThisMonth: monthlyBookings.length,

    completedThisMonth: monthlyBookings.filter(
      (b) =>
        b.status === "COMPLETED" ||
        b.status === "BOOKED_COMPLETED"
    ).length,

    refunded: bookings.filter(
      (b) =>
        b.status === "REFUNDED" ||
        b.status === "CANCELLED"
    ).length,

    totalEnrolled: enrollments.length,

    totalRevenue: bookings
      .filter((b) => b.status === "COMPLETED")
      .reduce(
        (acc, curr) => acc + (curr.finalPrice || 0),
        0
      ),

    avgValue:
      bookings.length > 0
        ? (
            bookings.reduce(
              (acc, curr) =>
                acc + (curr.finalPrice || 0),
              0
            ) / bookings.length
          ).toFixed(2)
        : 0,
  };

  const metricCards = [
    {
      label: "Bookings This Month",
      val: stats.totalThisMonth,
      icon: "📅",
      color: "text-blue-400",
      border: "border-blue-500/20",
      bg: "bg-blue-500/10",
      desc: "Total reservations this month",
    },

    {
      label: "Completed Sessions",
      val: stats.completedThisMonth,
      icon: "✅",
      color: "text-green-400",
      border: "border-green-500/20",
      bg: "bg-green-500/10",
      desc: "Successfully completed sessions",
    },

    {
      label: "Total Revenue",
      val: `₹${stats.totalRevenue.toLocaleString()}`,
      icon: "💰",
      color: "text-yellow-400",
      border: "border-yellow-500/20",
      bg: "bg-yellow-500/10",
      desc: "Revenue from verified bookings",
    },

    {
      label: "Course Enrollments",
      val: stats.totalEnrolled,
      icon: "🎓",
      color: "text-purple-400",
      border: "border-purple-500/20",
      bg: "bg-purple-500/10",
      desc: "Total academy inquiries",
    },

    {
      label: "Refunded Sessions",
      val: stats.refunded,
      icon: "🔄",
      color: "text-red-400",
      border: "border-red-500/20",
      bg: "bg-red-500/10",
      desc: "Cancelled or refunded bookings",
    },

    {
      label: "Average Booking",
      val: `₹${stats.avgValue}`,
      icon: "💎",
      color: "text-cyan-400",
      border: "border-cyan-500/20",
      bg: "bg-cyan-500/10",
      desc: "Average booking value",
    },
  ];

  return (
    <SectionCard
      title="Dashboard Overview"
      description="Live analytics and operational insights"
    >
      {loading ? (
        <div className="bg-card/50 border border-white/5 p-20 text-center text-muted-foreground font-light text-sm">
          Loading dashboard metrics...
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {metricCards.map((stat, i) => (
              <div
                key={i}
                className="bg-card/50 backdrop-blur-md border border-white/5 p-8 hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-14 h-14 bg-accent/10 border border-accent/20 flex items-center justify-center text-2xl"
                  >
                    {stat.icon}
                  </div>

                  <div className="w-10 h-[2px] bg-accent/50 rounded-full"></div>
                </div>

                <h3
                  className="font-heading text-4xl font-bold mb-3 text-white"
                >
                  {stat.val}
                </h3>

                <p className="text-white text-xs font-bold uppercase tracking-widest mb-2">
                  {stat.label}
                </p>

                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-card/50 border border-white/5 p-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <h3 className="font-heading text-2xl font-bold uppercase text-white mb-2">
                Arena Systems Status
              </h3>

              <p className="text-muted-foreground font-light text-sm">
                All systems operational • Last Sync:{" "}
                {now.toLocaleTimeString()}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="px-5 py-3 bg-accent/5 border border-accent/10 text-accent text-xs font-bold uppercase tracking-widest">
                Database Active
              </div>

              <div className="px-5 py-3 bg-accent/5 border border-accent/10 text-accent text-xs font-bold uppercase tracking-widest">
                Live Tracking ON
              </div>

              <div className="px-5 py-3 bg-accent/5 border border-accent/10 text-accent text-xs font-bold uppercase tracking-widest">
                Payment Gateway Stable
              </div>
            </div>
          </div>
        </>
      )}
    </SectionCard>
  );
};

export default AdminOverview;