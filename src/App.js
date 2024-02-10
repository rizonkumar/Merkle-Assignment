import React, { useState } from "react";
import "./utils/chartSetup";
import TopNavBar from "./components/common/TopNavBar";
import SideNavBar from "./components/common/SideNavBar";
import Footer from "./components/common/Footer";
import Body from "./components/Body";

const App = () => {
  // console.log("Selected from dropdown:", selected);
  const [currentView, setCurrentView] = useState("tabular");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [selectedPokemonNames, setSelectedPokemonNames] = useState([]);

  const handleToggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const handleSelectView = (selectedNames) => {
    // selectedNames is expected to be an array of Pokémon names
    // setCurrentView("tabular");
    setSelectedPokemonNames(selectedNames);
  };

  const toggleView = () => {
    setCurrentView(currentView === "tabular" ? "graphical" : "tabular");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <TopNavBar
        toggleSidebar={handleToggleSidebar}
        isSidebarExpanded={isSidebarExpanded}
        onSelectView={handleSelectView}
      />
      <div className="flex flex-grow">
        <SideNavBar isExpanded={isSidebarExpanded} />
        <Body
          currentView={currentView}
          selectedPokemonNames={selectedPokemonNames}
          onToggleView={toggleView}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
