import React from "react";
import Topbar from "./topbar";
import Sidebar from "./sidebar";

function LandingLayout({ children }) {
  return (
    <div className="flex">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="w-full bg-background">
        <Topbar />
        {children}
      </div>
    </div>
  );
}

export default LandingLayout;
