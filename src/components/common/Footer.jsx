import React from "react";
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
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-muted-foreground font-light">
            <li>Rajabagh opposite silk factory, Srinagar, Kashmir</li>
            <li>+91 98583 47754</li>
            <li><a href="mailto:mudasirashiq107@gmail.com" className="hover:text-white transition-colors">mudasirashiq107@gmail.com</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">© {new Date().getFullYear()} The Snooker Academy. All Rights Reserved.</p>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Designed and Developed by{" "}
          <a
            href="https://daneenalmajaz.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Daneen Al Majaz IT Services
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;