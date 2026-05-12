import React from "react";
<<<<<<< HEAD
import { MapPin, Phone, Share2, Mail, Flame } from "lucide-react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-white/5 py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <img src={logo} alt="The Snooker Academy" className="w-12 h-12 object-contain" />
            <span className="font-heading text-lg font-bold tracking-tighter uppercase text-white">
              The Snooker Academy
            </span>
          </div>
          <p className="text-muted-foreground font-light max-w-sm mb-8 text-sm leading-relaxed">
            Experience premium snooker like never before. Precision, class, and competition — all in one place.
          </p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/thesnookeracademy/" target="_blank" rel="noopener noreferrer" className="text-xl text-muted-foreground hover:text-accent transition-colors cursor-pointer">
              <Share2 size={20} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Navigation</h4>
          <ul className="space-y-4 text-sm text-muted-foreground font-light">
            <li className="hover:text-white transition-colors cursor-pointer">Home</li>
            <li className="hover:text-white transition-colors cursor-pointer">Courses</li>
            <li className="hover:text-white transition-colors cursor-pointer">Booking</li>
            <li className="hover:text-white transition-colors cursor-pointer">About</li>
=======
import { MapPin, Phone, Share2, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">
            Snooker Academy
          </h2>
          <p className="text-gray-400 text-lg">
            Experience premium snooker like never before. Precision, class, and competition — all in one place.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-xl">
            <li className="hover:text-green-500 cursor-pointer">Home</li>
            <li className="hover:text-green-500 cursor-pointer">About</li>
            <li className="hover:text-green-500 cursor-pointer">Contact</li>
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
          </ul>
        </div>

        {/* Contact */}
        <div>
<<<<<<< HEAD
          <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-muted-foreground font-light">
            <li>Rajabagh opposite silk factory, Srinagar, Kashmir</li>
            <li>+91 98583 47754</li>
            <li><a href="mailto:mudasirashiq107@gmail.com" className="hover:text-white transition-colors">mudasirashiq107@gmail.com</a></li>
          </ul>
=======
          <h3 className="text-white text-xl font-semibold mb-4">Contact</h3>

          <div className="flex text-xl items-center gap-2 mb-3">
            <Phone size={16} />
            <span> Phone No. : 098583 47754</span>
          </div>

          <div className="flex text-xl items-center gap-2 mb-3">
            <MapPin size={21} />
            <span> Address : Rajabagh opposite silk factory, Srinagar,Kashmir</span>
          </div>

          {/* Email */}
          <a
            href="mailto:mudasirashiq@gmail.com"
            className="flex items-center text-lg gap-2 mb-3 hover:text-green-500 transition"
          >
            <Mail size={16}  />
           Email: mudasirashiq107@gmail.com
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/thesnookeracademy/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-xl gap-2 hover:text-green-500 transition"
          >
            <Share2 size={16} />
            Instagram
          </a>
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
        </div>
      </div>

      {/* Bottom */}
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">© {new Date().getFullYear()} The Snooker Academy. All Rights Reserved.</p>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
=======
      <div className="text-center text-lg border-t border-gray-800 py-4 space-y-1">
        <p>
          © {new Date().getFullYear()} Snooker Academy. All rights reserved.
        </p>

        <p className="text-gray-500">
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
          Designed and Developed by{" "}
          <a
            href="https://daneenalmajaz.in"
            target="_blank"
            rel="noopener noreferrer"
<<<<<<< HEAD
            className="text-accent hover:underline"
=======
            className="hover:text-green-500 transition"
>>>>>>> 3cd098a85ed3a89f8ef179005bbb4df8d5e35389
          >
            Daneen Al Majaz IT Services
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;