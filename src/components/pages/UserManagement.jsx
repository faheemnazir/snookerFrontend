import React, { useState } from "react";
import { registerAdmin } from "../../Services/api";
import SectionCard from "../common/SectionCard";

const UserManagement = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "PLAYER",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await registerAdmin(formData);

      alert("Executive Account Registered Successfully.");

      setFormData({
        username: "",
        email: "",
        password: "",
        role: "PLAYER",
      });

    } catch (error) {

      alert(
        "Authorization Registry Error: " +
        (error?.response?.data?.message || "Something went wrong")
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <SectionCard
        title="Member Registry"
        description="Administrative portal for secure player and staff account creation"
      >
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#111]/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-10 shadow-[0_0_25px_rgba(0,0,0,0.25)]">
            
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-3">
                Create Account
              </h2>

              <div className="w-14 h-[2px] bg-green-500 mb-4" />

              <p className="text-gray-500 text-lg leading-relaxed">
                Register elite players and administrative personnel into the academy system.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-widest text-gray-500">
                    Username
                  </label>

                  <input
                    required
                    name="username"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full p-4 text-lg rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-green-500 transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-widest text-gray-500">
                    Email Address
                  </label>

                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="email@academy.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 text-lg rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-green-500 transition"
                  />
                </div>

              </div>

              <div className="space-y-2">
                <label className="text-sm uppercase tracking-widest text-gray-500">
                  Password
                </label>

                <input
                  required
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-4 text-lg rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-green-500 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm uppercase tracking-widest text-gray-500">
                  Role
                </label>

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full p-4 text-lg rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-green-500 transition"
                >
                  <option value="PLAYER">Elite Player</option>
                  <option value="ADMIN">Academy Admin</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 text-xl bg-green-500 text-black rounded-xl font-semibold hover:bg-green-600 transition disabled:opacity-50"
              >
                {loading ? "Processing..." : "Create Account"}
              </button>

            </form>
          </div>
        </div>
      </SectionCard>
    </div>
  );
};

export default UserManagement;