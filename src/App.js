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

  const toggleView = () => {
    setCurrentView(currentView === "tabular" ? "graphical" : "tabular");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <TopNavBar
        toggleSidebar={handleToggleSidebar}
        isSidebarExpanded={isSidebarExpanded}
        onSelectView={handleSelectView}
      />
      <div className="flex flex-1 pt-16">
        <SideNavBar isExpanded={isSidebarExpanded} />
        <main
          className={`flex-1 ${
            isSidebarExpanded ? "ml-64" : "ml-16"
          } transition-all duration-300 ease-in-out`}
        >
          <Body
            currentView={currentView}
            selectedPokemonNames={selectedPokemonNames}
            onToggleView={toggleView}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
