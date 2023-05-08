// import React from "react";
import { HashRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import RoutesWithAnimation from "./components/RoutesWithAnimation";

import "./App.css";

function App() {
  return (
    <div className="root-layout">
      <HashRouter>
        <Navigation />
        <main className="main-content">
          {/*  <LocationProvider> */}
          <RoutesWithAnimation />
          {/* </LocationProvider> */}
        </main>
      </HashRouter>
    </div>
  );
}

export default App;
