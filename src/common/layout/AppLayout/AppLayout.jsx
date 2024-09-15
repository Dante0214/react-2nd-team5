import React from "react";
import Header from "../../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import "./AppLayout.style.css";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
