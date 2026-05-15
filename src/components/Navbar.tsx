import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 p-3 md:p-9">
      <a href="/" className="cursor-pointer">
        <Image width={80} height={80} src="/images/nav-logo.svg" alt="nav-logo" className="w-20 md:w-24" />
      </a>
    </nav>
  );
};

export default Navbar;
