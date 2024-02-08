import React from "react";
import TabularView from "../dashboard/TabularView";
import GraphicalView from "../dashboard/GraphicalView";

const MainContainer = () => {
  return (
    <div>
      <TabularView />
      <GraphicalView />
    </div>
  );
};

export default MainContainer;
