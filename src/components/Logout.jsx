import React from "react";

import Button from "./Button";

const Logout = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-300"
    >
      Logout
    </Button>
  );
};

export default Logout;
