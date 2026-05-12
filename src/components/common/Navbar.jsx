import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
<<<<<<< HEAD
import { Flame } from "lucide-react";
=======
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
<<<<<<< HEAD

    { name: "Courses", path: "/courses" },
    { name: "Booking", path: "/booking" },
    { name: "Gallery", path: "/gallery" },
=======
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Booking", path: "/booking" },
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
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
<<<<<<< HEAD
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
              <img
                src={logo}
                alt="The Snooker Academy"
                className="w-28 h-28 object-contain max-w-none"
              />
            </div>
            <span className="font-heading text-2xl font-bold tracking-tight uppercase  text-transparent bg-clip-text bg-gradient-to-r from-accent via-green-500 to-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">The Snooker Academy
            </span>
          </NavLink>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
=======
 <nav
  className={`w-full fixed top-0 left-0 z-50 transition-all duration-300
  ${
    scrolled
      ? "bg-black/90 backdrop-blur-md shadow-lg border-b border-white/10"
      : "bg-black/90 backdrop-blur-sm"
  }`}
>
    
      {/* ✅ Fixed height for proper vertical alignment */}
      <div className="w-full px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
  <NavLink to="/" className="flex items-center gap-3">
    <img
      src={logo}
      alt="Snooker Club"
      className="h-12 md:h-14 w-auto object-contain"
    />

    <span className="text-lg md:text-2xl font-semibold tracking-wide text-white leading-none">
      The Snooker Academy
    </span>
  </NavLink>
</div>

        {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
<<<<<<< HEAD
                `text-sm font-heading font-semibold uppercase tracking-[0.15em] transition-colors
                ${
                  isActive
                    ? "text-accent"
                    : "text-muted-foreground hover:text-white"
                }`
              }
            >
              {link.name}
=======
                `relative text-lg transition-all duration-300 tracking-wide
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
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
            </NavLink>
          ))}
        </div>

<<<<<<< HEAD
        {/* Action Button / Mobile Toggle */}
        <div className="flex items-center gap-4">
       

          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
=======
        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
      </div>

      {/* Mobile Menu */}
      {isOpen && (
<<<<<<< HEAD
        <div className="lg:hidden mt-4 bg-card/80 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl space-y-4">
=======
        <div className="md:hidden bg-black/95 backdrop-blur-md px-6 pb-4 flex flex-col gap-4">
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
<<<<<<< HEAD
                `block text-sm font-heading font-semibold uppercase tracking-[0.15em] transition-colors
                ${
                  isActive
                    ? "text-accent"
                    : "text-muted-foreground hover:text-white"
=======
                `block py-2 border-b border-gray-700 transition-all
                ${
                  isActive
                    ? "text-green-400"
                    : "text-white hover:text-green-400"
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
<<<<<<< HEAD

          <button className="w-full py-2.5 bg-accent text-background rounded-full text-xs font-heading font-semibold uppercase tracking-[0.2em] hover:shadow-[0_0_20px_rgba(197,160,89,0.35)] transition-all">
            Book Now
          </button>
=======
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
        </div>
      )}
    </nav>
  );
};

export default Navbar;