import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import main from "../../assets/main.png";
import logo from "../../assets/logo.png";
import { loginAdmin } from "../../Services/api";
import { useNavigate, Navigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
const [formData, setFormData] = useState({
  usernameOrEmail: "",
  password: "",
});

const navigate = useNavigate();
const token = sessionStorage.getItem("token");

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

  try {
    const res = await loginAdmin(formData);

    // store token
    sessionStorage.setItem("token", res.token);

    // optional: store role (useful later)
    sessionStorage.setItem("role", res.role);

    // redirect
    navigate("/admin");
  } catch (err) {
    console.error("Login failed", err);
    alert("Invalid username or password");
  }
};




  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center px-6 py-20">
      
      {/* Background Image */}
      <img
        src={main}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-[3px] scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />

      {/* Large Background Logo */}
      <img
        src={logo}
        alt="logo"
        className="fixed opacity-5 w-[700px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
      />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-[#111]/90 backdrop-blur-md border border-gray-800 rounded-3xl p-8 md:p-10 shadow-2xl">
          
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src={logo}
              alt="logo"
              className="w-24 md:w-28 object-contain"
            />
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-wide mb-3">
              Welcome Back
            </h1>

            <p className="text-gray-400 text-lg">
              Sign in to continue to the club portal.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit} >
            
            {/* user name */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Username
              </label>
              <input
  type="text"
  name="usernameOrEmail"
  value={formData.usernameOrEmail}
  onChange={handleChange}
  placeholder="Enter your username"
  className="w-full bg-black/60 border border-gray-700 focus:border-green-500 outline-none rounded-xl px-4 py-3 text-white placeholder-gray-500 transition"
/>

             
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Password
              </label>

              <div className="relative">
               <input
  type={showPassword ? "text" : "password"}
  name="password"
  value={formData.password}
  onChange={handleChange}
  placeholder="Enter your password"
  className="w-full bg-black/60 border border-gray-700 focus:border-green-500 outline-none rounded-xl px-4 py-3 text-white placeholder-gray-500 transition"
/>

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-white transition"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-400">
              </label>

              <button
                type="button"
                className="text-green-500 hover:text-green-400 transition"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-black font-semibold text-lg transition"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;