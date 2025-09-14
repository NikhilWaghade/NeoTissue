import React from "react";
import logo from "../assets/logobg1.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" bg-white text-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top: Logo */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <Link to="/">
            <img src={logo} alt="NeoTissueBio Logo" className="w-96 " />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-black">
          <Link to="/" className="hover:underline font-bold">
            Home
          </Link>
          <Link to="/products" className="hover:underline font-bold">
            Products
          </Link>
          <Link to="/team" className="hover:underline font-bold">
            Team
          </Link>
          <Link to="/contact" className="hover:underline font-bold">
            Contact Us
          </Link>
          <Link to="#privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="#terms" className="hover:underline">
            Terms & Conditions
          </Link>
        </div>

        {/* Divider with gradient */}
        <div
          className="h-0.5 w-full my-6 rounded-full"
          style={{
            background: "linear-gradient(90deg, #ed1e79, #662d91)",
          }}
        ></div>

        {/* Bottom Text */}
        <div className="flex justify-between text-sm px-2 md:px-0 text-black">
          <p>© 2025 NeotissueBio All rights reserved.</p>
          <p>Designed and developed by Exceelup.</p>
        </div>
      </div>
    </footer>
  );
}
