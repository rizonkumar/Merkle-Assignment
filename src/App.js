import React, { useState } from "react";
import "./utils/chartSetup";
import TopNavBar from "./components/common/TopNavBar";
import SideNavBar from "./components/common/SideNavBar";
import Footer from "./components/common/Footer";
import Body from "./components/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom-styles.css";

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
    <div className="d-flex flex-column min-vh-100 bg-light">
      <TopNavBar
        toggleSidebar={handleToggleSidebar}
        onSelectView={handleSelectView}
      />
      <div className="container-fluid d-flex flex-grow-1 mt-5 pt-5">
        <SideNavBar
          isExpanded={isSidebarExpanded}
          setCurrentView={setCurrentView}
        />
        <div
          className={`flex-grow-1 transition-all ${isSidebarExpanded ? "ps-5" : "ps-2"}`}
        >
          <Body
            currentView={currentView}
            selectedPokemonNames={selectedPokemonNames}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
