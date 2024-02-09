import React from "react";
import MainContainer from "./common/MainContainer";
import TabularView from "./dashboard/TabularView";
import GraphicalView from "./dashboard/GraphicalView";
import { DUMMY_DATA_GRAPHICAL } from "../utils/constants";

const Body = ({ currentView }) => {
  return (
    <MainContainer>
      {currentView === "tabular" ? (
        <TabularView />
      ) : (
        <GraphicalView data={DUMMY_DATA_GRAPHICAL} />
      )}
    </MainContainer>
  );
};

export default Body;
