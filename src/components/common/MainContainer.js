import React from "react";

const MainContainer = ({ children }) => {
  console.log(children);
  return <div className="flex-grow bg-gray-100 p-4">{children}</div>;
};

export default MainContainer;
