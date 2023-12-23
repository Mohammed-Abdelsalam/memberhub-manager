// Show.js

import React from "react";

import { useSelector } from "react-redux";

import { useParams, Link } from "react-router-dom";

import { FaEdit } from "react-icons/fa";
import NotFound from "../404/NotFound";

const Show = () => {
  const { id } = useParams();
  const members = useSelector((state) => state.members);
  const member = members.find((member) => member.id === parseInt(id, 10));
  if (!member) {
    return <NotFound />;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 p-8 bg-gradient-to-r bg-red-400 rounded shadow-lg text-white">
      <div className="text-center">
        {member.photo ? (
          <div className="m-4 flex justify-center">
            <img
              src={member.photo}
              alt={member.memberName}
              className="mt-2 w-32 h-32 rounded-full object-cover"
            />
          </div>
        ) : (
          <div className="m-4 flex justify-center">
            <img
              src="https://i.stack.imgur.com/l60Hf.png"
              alt="img"
              className="mt-2 w-32 h-32 rounded-full object-cover"
            />
          </div>
        )}
        <h2 className="text-3xl font-bold mb-6">
          {member.memberName}'s Profile
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="mb-2 ml-2 items-start justify-center text-black rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
          <h4 className="text-md font-bold text-gray-600">Name</h4>
          <p className="text-base font-medium text-navy-700">
            {member.memberName}
          </p>
        </div>
        <div className="mb-2 ml-2 items-start justify-center text-black rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
          <h4 className="text-md font-bold text-gray-600">Email</h4>
          <p className="text-base font-medium text-navy-700">{member.email}</p>
        </div>
        <div className="mb-2 ml-2 items-start justify-center text-black rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
          <h4 className="text-md font-bold text-gray-600">Membership Type</h4>
          <p className="text-base font-medium text-navy-700">
            {member.membershipType}
          </p>
        </div>
        <div className="mb-2 ml-2 items-start justify-center text-black rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
          <h4 className="text-md font-bold text-gray-600">
            Subscribe to Newsletter:
          </h4>
          <p className="text-base font-medium text-navy-700">
            {member.subMembership ? "Yes" : "No"}
          </p>
        </div>
        <div className="mb-2 ml-2 items-start justify-center text-black rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
          <h4 className="text-md font-bold text-gray-600">ID Number</h4>
          <p className="text-base font-medium text-navy-700">
            {member.numberID}
          </p>
        </div>
        <div className="mb-2 ml-2 items-start justify-center text-black rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
          <h4 className="text-md font-bold text-gray-600">Gender</h4>
          <p className="text-base font-medium text-navy-700">{member.gender}</p>
        </div>
        <div className="mb-2 ml-2 items-start justify-center text-black rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
          <h4 className="text-md font-bold text-gray-600">Address</h4>
          <p className="text-base font-medium text-navy-700">
            {member.address}
          </p>
        </div>
        <div className="mb-2 ml-2 items-start justify-center text-black rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
          <h4 className="text-md font-bold text-gray-600">Date of Birth</h4>
          <p className="text-base font-medium text-navy-700">
            {member.dateOfBirth}
          </p>
        </div>
        <div className="mb-2 ml-2 items-start justify-center text-black rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
          <h4 className="text-md font-bold text-gray-600">
            Membership Start Date
          </h4>
          <p className="text-base font-medium text-navy-700">
            {member.startOfMembership}
          </p>
        </div>
        <div className="mb-2 ml-2 items-start justify-center text-black rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500">
          <h4 className="text-md font-bold text-gray-600">Contact Number</h4>
          <p className="text-base font-medium text-navy-700">
            {member.phoneNumber}
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
        <Link
          to={`/edit/${id}`}
          className="flex items-center bg-blue-600 hover:bg-blue-500 p-2 text-white transition duration-300 px-6 py-3 rounded mb-2 md:mb-0 md:mr-4"
        >
          <FaEdit className="mr-2" />
          Edit
        </Link>
        <Link
          to="/members-list"
          className="flex items-center bg-gray-600 hover:bg-gray-500  transition duration-300 text-white px-6 py-3 rounded"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default Show;
