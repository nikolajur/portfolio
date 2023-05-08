// import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import RoutesWithAnimation from "./components/RoutesWithAnimation";

import "./App.css";

function App() {
  return (
    <div className="root-layout">
      <BrowserRouter>
        <Navigation />
        <main className="main-content">
          {/*  <LocationProvider> */}
          <RoutesWithAnimation />
          {/* </LocationProvider> */}
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
