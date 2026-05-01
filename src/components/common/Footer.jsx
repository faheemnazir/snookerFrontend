import React from "react";
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
          </ul>
        </div>

        {/* Contact */}
        <div>
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
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-lg border-t border-gray-800 py-4 space-y-1">
        <p>
          © {new Date().getFullYear()} Snooker Academy. All rights reserved.
        </p>

        <p className="text-gray-500">
          Designed and Developed by{" "}
          <a
            href="https://daneenalmajaz.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            Daneen Al Majaz IT Services
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;