import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      © {new Date().getFullYear()} Merkle | All rights reserved.
    </footer>
  );
};

export default Footer;
