import React from "react";
import MainContainer from "./common/MainContainer";
import TabularView from "./dashboard/TabularView";
import GraphicalView from "./dashboard/GraphicalView";

const Body = ({ currentView }) => {
  return (
    <MainContainer>
      {currentView === "tabular" ? <TabularView /> : <GraphicalView />}
    </MainContainer>
  );
};

export default Body;
