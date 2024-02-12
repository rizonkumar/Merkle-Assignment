import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-merkle-blue p-4 text-center text-white z-10 fixed bottom-0 w-full">
      © {new Date().getFullYear()} Merkle | All rights reserved.
    </footer>
  );
};

export default Footer;
