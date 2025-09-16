import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logobg1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent text-white ">
      <div className="max-w-7xl mx-auto w-full px-3 xl:px-0 py-6 mt-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-44 md:w-56  " />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 mr-6">
          <Link
            to="/products"
            className="px-4 py-2 rounded-lg text-base lg:text-lg font-medium bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition duration-300"
          >
            Products
          </Link>
          <Link
            to="/team"
            className="px-4 py-2 rounded-lg text-base lg:text-lg font-medium bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition duration-300"
          >
            Team
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-lg text-base lg:text-lg font-medium bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition duration-300"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Fullscreen Menu */}
        <div
          className={`absolute top-0 left-0 w-full h-screen bg-black/95 text-white flex flex-col items-center justify-center space-y-6 transform transition-transform duration-500 md:hidden ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <button
            className="absolute top-6 right-6 p-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>

          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className="w-48 text-center px-6 py-3 rounded-lg text-xl font-medium bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition duration-300"
          >
            Products
          </Link>
          <Link
            to="/team"
            onClick={() => setIsOpen(false)}
            className="w-48 text-center px-6 py-3 rounded-lg text-xl font-medium bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition duration-300"
          >
            Team
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="w-48 text-center px-6 py-3 rounded-lg text-xl font-medium bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
