import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-4">
      © {new Date()?.getFullYear()} Merkle | All rights reserved.
    </footer>
  );
};

export default Footer;
