import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Flame } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [

    { name: "Courses", path: "/courses" },
    { name: "Booking", path: "/booking" },
    { name: "Gallery", path: "/gallery" },
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
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-heading font-semibold uppercase tracking-[0.15em] transition-colors
                ${
                  isActive
                    ? "text-accent"
                    : "text-muted-foreground hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Action Button / Mobile Toggle */}
        <div className="flex items-center gap-4">
       

          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 bg-card/80 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-heading font-semibold uppercase tracking-[0.15em] transition-colors
                ${
                  isActive
                    ? "text-accent"
                    : "text-muted-foreground hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <button className="w-full py-2.5 bg-accent text-background rounded-full text-xs font-heading font-semibold uppercase tracking-[0.2em] hover:shadow-[0_0_20px_rgba(197,160,89,0.35)] transition-all">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;