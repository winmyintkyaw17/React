import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-yellow-400">
          Movie App
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link to="/" className="hover:text-yellow-400 transition duration-300">
            Home
          </Link>
          <Link to="/favourites" className="hover:text-yellow-400 transition duration-300">
            Favourites
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
