import React from "react";

import Logout from "./Logout";
import SwitchLanguage from "./SwitchLanguage";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-4xl font-bold"> Logo</div>

        <SwitchLanguage />
        <div className="flex items-center space-x-4">
          <Logout />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
