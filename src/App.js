// import React from "react";
import { HashRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import RoutesWithAnimation from "./components/RoutesWithAnimation";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="root-layout">
      <HashRouter>
        <Navigation />
        <main className="main-content">
          <RoutesWithAnimation />
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
