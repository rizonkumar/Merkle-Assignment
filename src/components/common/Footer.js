import React from "react";
import "../../custom-styles.css";

const Footer = () => {
  return (
    <footer className="row fixed-bottom bg-merkle-blue py-4 text-center text-white">
      <div className="col-12">
        © {new Date().getFullYear()} Merkle | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
