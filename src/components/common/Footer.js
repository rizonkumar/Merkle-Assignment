import React from "react";
import "../../custom-styles.css";

const Footer = () => {
  return (
    <footer className="row py-2 text-center text-#12295D font-weight-bold ">
      <div className="col-12 copyright-text footer-text">
        © {new Date().getFullYear()} Merkle | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
