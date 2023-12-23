import React from "react";

// React Router
import { Link } from "react-router-dom";

// Components
import Grid from "../../../components/Grid";
import Navbar from "../../../components/Navbar";

const MemberList = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-sm lg:max-w-screen-xl pt-8">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <h2 className="text-4xl font-bold mb-6">Member List</h2>
          <div className="my-8">
            <Link
              to="/create"
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition duration-300"
            >
              Create Member
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Grid />
        </div>
      </div>
    </>
  );
};

export default MemberList;
