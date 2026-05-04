import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Dashboard = () => {
  const links = [
    { name: "Tables", path: "/admin/tables" },
    { name: "Create Table", path: "/admin/create" },
    { name: "Time Slots", path: "/admin/slots" },
    { name: "Create Slot", path: "/admin/create-slot" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      <div className="pt-28 px-6 max-w-7xl mx-auto space-y-8">

        {/* HEADER */}
        <div className="border-b border-gray-800 pb-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-wide">
            Admin Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Manage tables, slots and bookings
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

      </div>
    </div>
  );
};

export default Dashboard;