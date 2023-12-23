import React from "react";

// React Router
import { Route, Routes } from "react-router-dom";

// Components
import Edit from "../pages/edit/Edit";
import Show from "../pages/show/Show";
import Login from "../pages/login/Login";
import Create from "../pages/create/Create";
import NotFound from "../pages/404/NotFound";
import ProtectedRoutes from "./ProtectedRoutes";
import Register from "../pages/register/Register";
import MemberList from "../pages/memberList/MemberList";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/show/:id" element={<Show />} />
          <Route path="/members-list" element={<MemberList />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Layout;
