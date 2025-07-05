import React from "react";
import logo from "./assets/logo.avif";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
      <img src={logo} alt="Logo" className="h-16" />

      <div className="flex-1 flex justify-center px-4">
        <input
          type="text"
          placeholder="Search..."
          className="border px-4 py-2 w-full max-w-md rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <nav className="flex items-center gap-8 text-sm font-medium">
        <a href="/" className="hover:text-blue-600">
          Home
        </a>
        <a href="/" className="hover:text-blue-600">
          About Us
        </a>
        <a href="/" className="hover:text-blue-600">
          Contact Us
        </a>
        <a href="/" className="hover:text-blue-600">
          Cart
        </a>
      </nav>
    </header>
  );
};

export default Header;
