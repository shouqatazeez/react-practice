import React from "react";
import logo from "./assets/logo.avif";

const Header = () => {
  return (
    <div>
      <div className="flex border-1 to-black  pr-32">
        <img src={logo} className="h-24" />
        <div className="flex items-center space-x-16 ml-auto ">
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Contact Us</a>
          <a href="/">Cart</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
