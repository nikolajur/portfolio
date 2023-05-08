import React /* , { useRef } */ from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Navigation />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
