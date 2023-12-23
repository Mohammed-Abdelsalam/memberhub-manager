import React from "react";
import { useParams } from "react-router-dom";

// React Router
import { useNavigate } from "react-router-dom";

// Components
import Form from "../../../components/Form";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white my-5 p-8 rounded-lg shadow-md w-full md:w-3/4 xl:w-2/3">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Edit Member {id}
          </h1>
          <Form
            onSubmit={() => navigate("/members-list")}
            btnTitle={"Edit Member"}
            memberId={id}
          />
        </div>
      </div>
    </div>
  );
};

export default Edit;
