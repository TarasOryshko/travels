import React from "react";
import Header from "./Header";

function MainNavigation({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default MainNavigation;
