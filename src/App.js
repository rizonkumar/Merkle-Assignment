import React, { useState } from "react";
import TopNavBar from "./components/common/TopNavBar";
import SideNavBar from "./components/common/SideNavBar";
import Footer from "./components/common/Footer";
import Body from "./components/Body";

const App = () => {
  const [currentView, setCurrentView] = useState("tabular");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const handleSelectView = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="flex flex-col min-h-screen bg-blue-100">
      <TopNavBar
        toggleSidebar={handleToggleSidebar}
        isSidebarExpanded={isSidebarExpanded}
        onSelectView={handleSelectView}
      />
      <div className="flex flex-grow">
        <SideNavBar isExpanded={isSidebarExpanded} />
        <Body currentView={currentView} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
