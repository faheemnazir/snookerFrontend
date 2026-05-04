import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import main from "../../assets/main.png";
import logo from "../../assets/logo.png";
import { registerAdmin } from "../../Services/api";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  // Redirect if already logged in
  if (token) {
    return <Navigate to="/admin" />;
  }

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
      const res = await registerAdmin(formData);

      console.log(res); // backend returns string

      alert("Registration successful!");

      // redirect to login
      navigate("/login");
    } catch (err) {
      console.error("Registration failed", err);
      alert("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center px-6 py-20">
      
      {/* Background */}
      <img
        src={main}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-[3px] scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />

      {/* Big Logo */}
      <img
        src={logo}
        alt="logo"
        className="fixed opacity-5 w-[700px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
      />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-[#111]/90 backdrop-blur-md border border-gray-800 rounded-3xl p-8 md:p-10 shadow-2xl">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={logo} alt="logo" className="w-24 md:w-28" />
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-semibold mb-3">
              Create Account
            </h1>
            <p className="text-gray-400">
              Register to access the admin portal.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>

            {/* First + Last Name */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="bg-black/60 border border-gray-700 focus:border-green-500 rounded-xl px-4 py-3 outline-none"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="bg-black/60 border border-gray-700 focus:border-green-500 rounded-xl px-4 py-3 outline-none"
              />
            </div>

            {/* Username */}
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full bg-black/60 border border-gray-700 focus:border-green-500 rounded-xl px-4 py-3 outline-none"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full bg-black/60 border border-gray-700 focus:border-green-500 rounded-xl px-4 py-3 outline-none"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full bg-black/60 border border-gray-700 focus:border-green-500 rounded-xl px-4 py-3 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-black font-semibold text-lg transition"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>

          {/* Redirect */}
          <p className="text-center text-gray-400 mt-6 text-sm">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-green-500 cursor-pointer hover:underline"
            >
              Sign In
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default RegisterPage;