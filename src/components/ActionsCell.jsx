import React, { useState } from "react";

// React router
import { Link } from "react-router-dom";

// icons
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";

import Button from "./Button";

const ActionsCell = ({ id, handleEdit, handleDelete, handleShow }) => {
  const [isDelete, setIsDelete] = useState(false);

  const showDeleteConfirmation = () => {
    setIsDelete(true);
  };

  const hideDeleteConfirmation = () => {
    setIsDelete(false);
  };

  const confirmDelete = () => {
    hideDeleteConfirmation();
    handleDelete(id);
  };

  return (
    <td className="p-6 flex justify-center items-center gap-4">
      {/* Edit Button */}
      <Link
        to={`/show/${id}`}
        className="mr-2 text-green-500 hover:text-green-600"
        onClick={() => handleShow(id)}
      >
        <FaBookOpenReader style={{ fontWeight: "bold" }} />
      </Link>
      <Link
        to={`/edit/${id}`}
        className="mr-2 text-blue-500 hover:text-blue-600"
        onClick={() => handleEdit(id)}
      >
        <FaEdit />
      </Link>

      {/* Delete Button */}
      <Button
        className="mr-2 text-red-500 hover:text-red-600"
        onClick={showDeleteConfirmation}
      >
        <FaTrash />
      </Button>

      {/* Delete Confirmation Dialog */}
      {isDelete && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 mx-4 my-8 rounded shadow-md md:max-w-md w-full">
            <p className="text-lg font-semibold mb-4">
              Are you sure you want to delete this item?
            </p>
            <div className="flex justify-end">
              <Button
                className="mr-2 px-4 py-2 text-white bg-red-600 hover:bg-red-500 rounded"
                onClick={confirmDelete}
              >
                Delete
              </Button>
              <Button
                className="px-4 py-2 text-white bg-gray-500 hover:bg-gray-400 rounded"
                onClick={hideDeleteConfirmation}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </td>
  );
};

export default ActionsCell;
