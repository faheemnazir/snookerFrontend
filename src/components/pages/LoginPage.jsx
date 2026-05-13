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

console.log("LOGIN RESPONSE:", res);

sessionStorage.setItem("token", res?.token || res?.data?.token);


sessionStorage.setItem("role", res?.role || res?.data?.role);

    // redirect
    navigate("/admin");
  } catch (err) {
    console.error("Login failed", err);
    alert("Invalid username or password");
  }
};




  return (
    <div className="min-h-screen bg-background text-white relative overflow-hidden flex items-center justify-center px-6 py-20">
      
      {/* Cinematic Background Overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#004D40]/20 to-[#0A0A0A]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1609102029121-66f3900b4672?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-card/50 backdrop-blur-md border border-white/5 p-8 md:p-10 shadow-2xl">
          
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src={logo}
              alt="logo"
              className="w-24 md:w-28 object-contain mix-blend-luminosity"
            />
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tighter mb-3 text-white">
              Welcome Back
            </h1>

            <p className="text-muted-foreground font-light text-sm">
              Sign in to continue to the club portal.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit} >
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-center">Fields marked with <span className="text-red-500">*</span> are mandatory</p>
            
            {/* user name */}
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2 block">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="usernameOrEmail"
                value={formData.usernameOrEmail}
                onChange={handleChange}
                placeholder="Enter your username"
                className="w-full bg-card border border-white/5 focus:border-accent outline-none px-4 py-3 text-white placeholder-gray-500 transition text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2 block">
                Password <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full bg-card border border-white/5 focus:border-accent outline-none px-4 py-3 text-white placeholder-gray-500 transition text-sm"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition"
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
                className="text-xs font-bold uppercase tracking-widest text-accent hover:text-white transition"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 bg-accent text-background font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all"
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