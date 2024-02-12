import React, { useState } from "react";
import "./utils/chartSetup";
import TopNavBar from "./components/common/TopNavBar";
import SideNavBar from "./components/common/SideNavBar";
import Footer from "./components/common/Footer";
import Body from "./components/Body";

const App = () => {
  const [currentView, setCurrentView] = useState("tabular");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [selectedPokemonNames, setSelectedPokemonNames] = useState([]);

  const handleToggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const handleSelectView = (selectedNames) => {
    setSelectedPokemonNames(selectedNames);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <TopNavBar
        toggleSidebar={handleToggleSidebar}
        isSidebarExpanded={isSidebarExpanded}
        onSelectView={handleSelectView}
      />
      <div className="flex relative top-[6.725rem] flex-1 sm:pt-16 sm:top-[0.325rem]">
        <SideNavBar
          isExpanded={isSidebarExpanded}
          setCurrentView={setCurrentView}
        />
        <div
          className={`${isSidebarExpanded ? "pl-75" : "pl-25"} flex-1 transition-all duration-300 ease-in-out`}
        >
          <Body
            currentView={currentView}
            selectedPokemonNames={selectedPokemonNames}
          />
        </div>
      </div>
      <Footer className="absolute bottom-0 w-full" />
    </div>
  );
};

export default App;
