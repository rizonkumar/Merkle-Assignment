import React from "react";
import "../../custom-styles.css";

const Footer = () => {
  return (
    <footer className="fixed-bottom bg-merkle-blue py-4 text-center text-white">
      © {new Date().getFullYear()} Merkle | All rights reserved.
    </footer>
  );
};

export default Footer;
