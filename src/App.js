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
    <div className="container-fluid bg-light">
      <TopNavBar
        toggleSidebar={handleToggleSidebar}
        onSelectView={handleSelectView}
      />
      <div className="row">
        <div className="col-12 main-content">
          <div className="row main-content-wrapper">
            <SideNavBar
              isExpanded={isSidebarExpanded}
              setCurrentView={setCurrentView}
            />
            <div className={`col-12 col-lg-2 flex-grow-1 transition-all p-0`}>
              <Body
                currentView={currentView}
                selectedPokemonNames={selectedPokemonNames}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
