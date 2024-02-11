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
    <div className="flex flex-col min-h-screen bg-gray-100">
      <TopNavBar
        toggleSidebar={handleToggleSidebar}
        isSidebarExpanded={isSidebarExpanded}
        onSelectView={handleSelectView}
      />
      <div className="flex flex-1 sm:pt-16 pt-[126px] ">
        <SideNavBar
          isExpanded={isSidebarExpanded}
          setCurrentView={setCurrentView}
        />
        <main
          className={`flex-1 ${
            isSidebarExpanded ? " m-0" : "m-0"
          } transition-all duration-300 ease-in-out`}
        >
          <Body
            currentView={currentView}
            selectedPokemonNames={selectedPokemonNames}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
