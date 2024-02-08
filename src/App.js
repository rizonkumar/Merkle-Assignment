import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TopNavBar from "./components/common/TopNavBar";
import SideNavBar from "./components/common/SideNavBar";
import MainContainer from "./components/common/MainContainer";
import TabularView from "./components/dashboard/TabularView";
import GraphicalView from "./components/dashboard/GraphicalView";
import Footer from "./components/common/Footer";
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
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <TopNavBar
        toggleSidebar={() => setIsSidebarExpanded(!isSidebarExpanded)}
        isSidebarExpanded={isSidebarExpanded}
      />
      <div className="flex flex-grow">
        <SideNavBar isExpanded={isSidebarExpanded} />
        {/* Main content goes here. */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
