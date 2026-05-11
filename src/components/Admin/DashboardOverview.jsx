import React, { useState, useEffect } from "react";
import { getAllBookings, getAllEnrollments } from "../../Services/api";

const DashboardOverview = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalBookingsMonth: 0,
    premiumBookingsMonth: 0,
    regularBookingsMonth: 0,
    totalEarningsMonth: 0,
    premiumEarningsMonth: 0,
    regularEarningsMonth: 0,
    totalEnrollments: 0,
    activeBookingsToday: 0,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [bookings, enrollments] = await Promise.all([
        getAllBookings(),
        getAllEnrollments(),
      ]);

      calculateStats(bookings, enrollments);
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (bookings, enrollments) => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const todayStr = now.toISOString().split('T')[0];

    let totalBookingsMonth = 0;
    let premiumBookingsMonth = 0;
    let regularBookingsMonth = 0;
    let totalEarningsMonth = 0;
    let premiumEarningsMonth = 0;
    let regularEarningsMonth = 0;
    let activeBookingsToday = 0;
    let completedBookingsMonth = 0;

    bookings.forEach((booking) => {
      const bookingDate = new Date(booking.createdAt || booking.startTime);
      const isThisMonth =
        bookingDate.getMonth() === currentMonth &&
        bookingDate.getFullYear() === currentYear;

      const bookingDayStr = bookingDate.toISOString().split('T')[0];
      const isToday = bookingDayStr === todayStr;

      // Count active bookings today (status is BOOKED and it's today)
      if (isToday && booking.status === "BOOKED") {
        activeBookingsToday++;
      }

      // Stats for this month
      if (isThisMonth && (booking.status === "BOOKED" || booking.status === "COMPLETED")) {
        totalBookingsMonth++;
        const price = booking.finalPrice || 0;
        totalEarningsMonth += price;

        const isPremium = booking.table?.tableType === "PREMIUM";

        if (isPremium) {
          premiumBookingsMonth++;
          premiumEarningsMonth += price;
        } else {
          regularBookingsMonth++;
          regularEarningsMonth += price;
        }

        if (booking.status === "COMPLETED") {
          completedBookingsMonth++;
        }
      }
    });

    setStats({
      totalBookingsMonth,
      premiumBookingsMonth,
      regularBookingsMonth,
      totalEarningsMonth,
      premiumEarningsMonth,
      regularEarningsMonth,
      totalEnrollments: enrollments.length,
      activeBookingsToday,
      completedBookingsMonth,
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-muted-foreground font-light text-sm">Loading dashboard data...</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* CARD 1: ACTIVE BOOKINGS TODAY */}
        <div className="bg-card/50 backdrop-blur-md border border-white/5 p-6 space-y-2 hover:border-accent/30 transition-all duration-300">
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">Active Bookings Today</p>
          <p className="font-heading text-4xl font-bold text-accent">{stats.activeBookingsToday}</p>
        </div>

        {/* CARD 2: TOTAL ENROLLMENTS */}
        <div className="bg-card/50 backdrop-blur-md border border-white/5 p-6 space-y-2 hover:border-accent/30 transition-all duration-300">
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">Total Enrollments</p>
          <p className="font-heading text-4xl font-bold text-white">{stats.totalEnrollments}</p>
        </div>

        {/* CARD 3: BOOKINGS THIS MONTH */}
        <div className="bg-card/50 backdrop-blur-md border border-white/5 p-6 space-y-2 hover:border-accent/30 transition-all duration-300">
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">Bookings This Month</p>
          <p className="font-heading text-4xl font-bold text-white">{stats.totalBookingsMonth}</p>
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground pt-2 border-t border-white/5">
            <span>Premium: {stats.premiumBookingsMonth}</span>
            <span>Regular: {stats.regularBookingsMonth}</span>
          </div>
        </div>

        {/* CARD 4: EARNINGS THIS MONTH */}
        <div className="bg-card/50 backdrop-blur-md border border-white/5 p-6 space-y-2 hover:border-accent/30 transition-all duration-300">
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">Earnings This Month</p>
          <p className="font-heading text-4xl font-bold text-accent">₹{stats.totalEarningsMonth.toFixed(2)}</p>
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground pt-2 border-t border-white/5">
            <span>Premium: ₹{stats.premiumEarningsMonth.toFixed(2)}</span>
            <span>Regular: ₹{stats.regularEarningsMonth.toFixed(2)}</span>
          </div>
        </div>

      </div>

      {/* QUICK ACTIONS */}
      <div className="bg-card/50 backdrop-blur-md border border-white/5 p-8">
        <h2 className="font-heading text-2xl font-bold uppercase text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="/admin/create" className="p-4 bg-background border border-white/5 hover:border-accent transition-all text-center text-xs font-bold uppercase tracking-widest text-white hover:text-accent">
            Add New Table
          </a>
          <a href="/admin/bookings" className="p-4 bg-background border border-white/5 hover:border-accent transition-all text-center text-xs font-bold uppercase tracking-widest text-white hover:text-accent">
            View All Bookings
          </a>
          <a href="/admin/tier" className="p-4 bg-background border border-white/5 hover:border-accent transition-all text-center text-xs font-bold uppercase tracking-widest text-white hover:text-accent">
            Manage Tiers
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
