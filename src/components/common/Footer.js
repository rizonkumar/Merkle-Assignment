import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-blue-900 p-4 text-center text-white z-10">
      © {new Date().getFullYear()} Merkle | All rights reserved.
    </footer>
  );
};

export default Footer;
