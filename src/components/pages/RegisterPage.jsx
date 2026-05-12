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
  phone: "",
  role: "ROLE_ADMIN", // or ROLE_USER depending on backend
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

  console.log("REGISTER RESPONSE:", res);

  // If backend returns a success string
  if (typeof res === "string" && res.toLowerCase().includes("success")) {
    alert("Registration successful!");
    navigate("/login");
  } else {
    // fallback in case backend changes response format
    alert("Registration completed. Please login.");
    navigate("/login");
  }

} catch (err) {
  console.error("FULL ERROR:", err);

  const errorMessage =
    err.response?.data?.message ||  
    err.response?.data ||           
    err.message ||                  
    "Registration failed";

  alert(errorMessage);

} finally {
  setLoading(false);
}
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-background text-white relative overflow-hidden flex items-center justify-center px-6 py-20">
      
      {/* Cinematic Background Overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#004D40]/20 to-[#0A0A0A]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1609102029121-66f3900b4672?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-card/50 backdrop-blur-md border border-white/5 p-8 md:p-10 shadow-2xl">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={logo} alt="logo" className="w-24 md:w-28 mix-blend-luminosity" />
=======
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
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
<<<<<<< HEAD
            <h1 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tighter mb-3 text-white">
              Create Account
            </h1>
            <p className="text-muted-foreground font-light text-sm">
=======
            <h1 className="text-4xl md:text-5xl font-semibold mb-3">
              Create Account
            </h1>
            <p className="text-gray-400">
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
              Register to access the admin portal.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
<<<<<<< HEAD
            {/* Username */}
=======
  {/* Username */}
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
<<<<<<< HEAD
              className="w-full bg-card border border-white/5 focus:border-accent outline-none px-4 py-3 text-white placeholder-gray-500 transition text-sm"
            />
        
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full bg-card border border-white/5 focus:border-accent outline-none px-4 py-3 text-white placeholder-gray-500 transition text-sm"
            />
            
=======
              className="w-full bg-black/60 border border-gray-700 focus:border-green-500 rounded-xl px-4 py-3 outline-none"
            />
        
            <input
  type="text"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Phone Number"
  className="w-full bg-black/60 border border-gray-700 focus:border-green-500 rounded-xl px-4 py-3 outline-none"
/>
            

          

>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
<<<<<<< HEAD
              className="w-full bg-card border border-white/5 focus:border-accent outline-none px-4 py-3 text-white placeholder-gray-500 transition text-sm"
=======
              className="w-full bg-black/60 border border-gray-700 focus:border-green-500 rounded-xl px-4 py-3 outline-none"
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
<<<<<<< HEAD
                className="w-full bg-card border border-white/5 focus:border-accent outline-none px-4 py-3 text-white placeholder-gray-500 transition text-sm"
=======
                className="w-full bg-black/60 border border-gray-700 focus:border-green-500 rounded-xl px-4 py-3 outline-none"
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
<<<<<<< HEAD
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition"
=======
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400"
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
<<<<<<< HEAD
              className="w-full py-3 bg-accent text-background font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
=======
              className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-black font-semibold text-lg transition"
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>

          {/* Redirect */}
<<<<<<< HEAD
          <p className="text-center text-muted-foreground mt-6 text-xs font-light">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-accent cursor-pointer hover:underline font-bold uppercase tracking-widest"
=======
          <p className="text-center text-gray-400 mt-6 text-sm">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-green-500 cursor-pointer hover:underline"
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
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