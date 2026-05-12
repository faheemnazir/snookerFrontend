import React from "react";
import { Outlet, NavLink } from "react-router-dom";
<<<<<<< HEAD
import logo from "../../assets/logo.png";

const Dashboard = () => {
  const links = [
    { name: "Overview", path: "/admin" },
    { name: "Tables", path: "/admin/tables" },
    { name: "Create Table", path: "/admin/create" },
    { name: "Bookings", path: "/admin/bookings" },
    { name: "Enrollment", path: "/admin/enrollments" },
=======
import logo from "../../assets/logo.png"; // 👈 add this

const Dashboard = () => {
  const links = [
    { name: "Tables", path: "/admin/tables" },
    { name: "Create Table", path: "/admin/create" },
      { name: "Bookings", path: "/admin/bookings", },
    { name: "Enrollment", path: "/admin/enrollments", },
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
    { name: "Pricing Tiers", path: "/admin/tier" },
  ];

  return (
<<<<<<< HEAD
    <div className="bg-background text-white min-h-screen flex relative overflow-hidden">
      {/* Cinematic Background Overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#004D40]/10 to-[#0A0A0A]"></div>
      </div>

      {/* SIDEBAR */}
      <div className="w-64 bg-card/50 backdrop-blur-md border-r border-white/5 flex flex-col fixed h-screen z-20">
        <div className="border-b border-white/5 flex items-center justify-center h-48 overflow-hidden p-6">
          <img src={logo} alt="logo" className="w-full h-full object-contain mix-blend-luminosity" />
        </div>
        
        <div className="p-6">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Menu</h2>
          <nav className="space-y-2">
            {links.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                end={link.path === "/admin"}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-xs font-bold uppercase tracking-widest transition-all
                  ${
                    isActive
                      ? "bg-accent text-background"
                      : "text-muted-foreground hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-white/5">
          <button
            onClick={() => {
              sessionStorage.removeItem("token");
              sessionStorage.removeItem("role");
              window.location.href = "/login";
            }}
            className="w-full px-4 py-3 text-xs font-bold uppercase tracking-widest border border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white transition-all"
          >
            Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 ml-64 relative z-10">
        <div className="pt-12 px-8 max-w-7xl mx-auto space-y-8">
          {/* HEADER */}
          <div className="border-b border-white/5 pb-6">
            <h1 className="font-heading text-4xl font-bold uppercase text-white">
              Admin Portal
            </h1>
            <p className="text-muted-foreground font-light text-sm mt-2">
              Manage operations, analyze performance, and view bookings.
            </p>
          </div>

          {/* CONTENT */}
          <div className="pb-12">
            <Outlet />
          </div>
        </div>
=======
    <div className="bg-black text-white min-h-screen">

      {/* ✅ WATERMARK (same as booking page) */}
      <img
        src={logo}
        className="fixed opacity-5 w-[900px] left-1/2 top-1/2 
        -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        alt="watermark"
      />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 pt-28 px-6 max-w-7xl mx-auto space-y-8">

        {/* HEADER */}
        <div className="border-b border-gray-800 pb-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-wide">
            Admin Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Manage tables, slots,teirs and bookings
          </p>
        </div>

        {/* NAV */}
        <div className="flex flex-wrap gap-3">
          {links.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) =>
                `px-5 py-2.5 rounded-full border text-sm md:text-base transition
                ${
                  isActive
                    ? "bg-green-500 text-black border-green-500"
                    : "bg-[#111] border-gray-800 text-gray-300 hover:border-green-500/40"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* CONTENT */}
        <Outlet />

>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
      </div>
    </div>
  );
};

export default Dashboard;