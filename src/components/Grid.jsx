import React, { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { deleteMember } from "../redux/memberReducer";

// React Icons
import ActionsCell from "./ActionsCell";

const Grid = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members);

  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("id");

  const handleEdit = (id) => {
    console.log(`Editing member with id ${id}`);
  };

  const handleShow = (id) => {
    console.log(`Show member with id ${id}`);
  };

  // Done
  const handleDelete = (id) => {
    dispatch(deleteMember(id));
    console.log(`delete member with id ${id}`);
  };

  // Sorting
  const handleSort = (key) => {
    setSortBy(key);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortedMembers = [...members].sort((a, b) => {
    const factor = sortOrder === "asc" ? 1 : -1;

    if (typeof a[sortBy] === "number" && typeof b[sortBy] === "number") {
      return factor * (a[sortBy] - b[sortBy]);
    } else {
      // Sort string values
      const aString = String(a[sortBy]).toLowerCase();
      const bString = String(b[sortBy]).toLowerCase();
      return factor * aString.localeCompare(bString);
    }
  });

  return (
    <div className="overflow-x-auto">
      <table className="text-left min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-50">
          <tr>
            {[
              "ID",
              "Name",
              "Email",
              "Membership Type",
              "ID Number",
              "Start of Membership",
              "Phone Number",
              "Actions",
            ].map((header, i) => (
              <th
                key={i}
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleSort(header.toLowerCase())}
              >
                {header}
                {sortBy === header.toLowerCase() && (
                  <span>{sortOrder === "asc" ? " 🔼" : " 🔽"}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedMembers.map((member, i) => (
            <tr key={i} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">{member.id}</td>
              <td className="px-4 py-2 border-b">{member.memberName}</td>
              <td className="px-4 py-2 border-b">{member.email}</td>
              <td className="px-4 py-2 border-b">
                <span
                  className={`p-3 rounded-3xl text-white ${
                    member.membershipType === "Premium"
                      ? "bg-blue-400"
                      : member.membershipType === "Basic"
                      ? "bg-yellow-400"
                      : member.membershipType === "VIP"
                      ? "bg-red-400"
                      : "bg-gray-400"
                  }`}
                >
                  {member.membershipType}
                </span>
              </td>
              <td className="px-4 py-2 border-b">{member.numberID}</td>
              <td className="px-4 py-2 border-b">{member.startOfMembership}</td>
              <td className="px-4 py-2 border-b">{member.phoneNumber} </td>
              <ActionsCell
                id={member.id}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleShow={handleShow}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
