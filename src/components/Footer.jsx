import React from "react";
import logo from "../assets/logobg1.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white text-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top: Logo */}
        <div className="flex items-center justify-center mb-6">
          <Link to="/">
            <img src={logo} alt="NeoTissueBio Logo" className="w-72 md:w-96" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center space-y-3 sm:flex-row sm:flex-wrap sm:justify-center sm:space-y-0 sm:gap-6 mb-6 text-black text-center">
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
        </div>

        {/* Divider with gradient */}
        <div
          className="h-0.5 w-full my-6 rounded-full"
          style={{
            background: "linear-gradient(90deg, #ed1e79, #662d91)",
          }}
        ></div>

        {/* Bottom Text */}
        <div className="flex flex-col sm:flex-row justify-between text-sm px-2 md:px-0 text-black text-center sm:text-left gap-2">
          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Link to="#privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="#terms" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>

          {/* Copyright */}
          <p>© 2025 Neotissue All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
