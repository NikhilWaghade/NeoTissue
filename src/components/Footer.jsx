import React from "react";
import logo from "../assets/logobg1.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white text-white py-12 md:py-24 px-3 sm:px-6 md:px-10 xl:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Top: Logo */}
        <div className="flex items-center justify-center mb-12 md:mb-20">
          <Link to="/">
            <img
              src={logo}
              alt="NeoTissueBio Logo"
              className="w-64 sm:w-72 xl:w-80"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center space-y-3 sm:flex-row sm:flex-wrap sm:justify-center sm:space-y-0 sm:gap-6 text-black text-center font-roboto">
          <Link to="/" className="hover:underline font-semibold">
            Home
          </Link>
          <Link to="/products" className="hover:underline font-semibold">
            Products
          </Link>
          <Link to="/team" className="hover:underline font-semibold">
            Team
          </Link>
          <Link to="/contact" className="hover:underline font-semibold">
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
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center text-sm px-2 md:px-0 text-neutral-500 font-roboto gap-2">
          {/* Links */}

          {/* Copyright */}
          <p className="text-neutral-500">
            © 2025 Neotissue All rights reserved.
          </p>
          <div className="flex flex-row gap-8 sm:gap-4">
            <Link to="#privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="#terms" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
