import React from "react";

// Components
import Form from "../../../components/Form";

const Create = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white my-5 p-8 rounded-lg shadow-md w-full md:w-3/4 xl:w-2/3">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Add a New Member
        </h1>
        <Form btnTitle={"Add Member"} />
      </div>
    </div>
  );
};

export default Create;
