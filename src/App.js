import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TopNavBar from "./components/common/TopNavBar";
import SideNavBar from "./components/common/SideNavBar";
import MainContainer from "./components/common/MainContainer";
import StatusBar from "./components/common/StatusBar";
import Dropdown from "./components/common/Dropdown";
import TabularView from "./components/dashboard/TabularView";
import GraphicalView from "./components/dashboard/GraphicalView";
import Body from "./components/Body";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "tabular",
        element: (
          <MainContainer>
            <TabularView />
          </MainContainer>
        ),
      },
      {
        path: "graphical",
        element: (
          <MainContainer>
            <GraphicalView />
          </MainContainer>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="app-container">
      <TopNavBar />
      <SideNavBar />
      <RouterProvider router={router}>
        <StatusBar />
        <Dropdown />
      </RouterProvider>
    </div>
  );
};

export default App;
