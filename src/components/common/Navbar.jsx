import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Booking", path: "/booking" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
 <nav
  className={`w-full fixed top-0 left-0 z-50 transition-all duration-300
  ${
    scrolled
      ? "bg-black/90 backdrop-blur-md shadow-lg border-b border-white/10"
      : "bg-black/90 backdrop-blur-sm"
  }`}
>
    
      {/* ✅ Fixed height for proper vertical alignment */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group h-full">
         <img
  src={logo}
  alt="Snooker Club"
  className={`w-auto object-contain 
  transition-all duration-500 ease-in-out
  ${scrolled 
    ? "h-20 md:h-24"        
    : "h-28 md:h-37"        
  }`}
/>         
        <NavLink
        to="/"
        >
          <span
            className={`text-xl md:text-3xl font-semibold tracking-wide transition-all duration-300
            ${scrolled ? "text-white" : "text-white"}`}
          >
            The Snooker Academy
          </span>
          </NavLink>

        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex text-2xl items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative  text-xl transition-all duration-300 text-xl tracking-wide
                ${
                  isActive
                    ? "text-green-400"
                    : "text-white hover:text-green-400"
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full transition-all duration-300
                    ${
                      isActive
                        ? "bg-red-500 scale-x-100"
                        : "bg-transparent scale-x-0"
                    }`}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md px-6 pb-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block py-2 border-b border-gray-700 transition-all
                ${
                  isActive
                    ? "text-green-400"
                    : "text-white hover:text-green-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;