import React from "react";

const MainContainer = ({ children }) => {
  console.log(children);
  return <div className="p-4">{children}</div>;
};

export default MainContainer;
