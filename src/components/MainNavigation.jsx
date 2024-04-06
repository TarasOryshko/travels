import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function MainNavigation({ children }) {
  return (
    <div
      style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
    >
      <Header />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </div>
  );
}

export default MainNavigation;
