import { Routes, Route } from "react-router-dom";
import Initial from "../pages/Initial";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import InsertPin from "../pages/InsertPin";

import Layout from "../Layouts/Layout";
import HomeAdm from "../PagesAdm/HomeAdm";

export default function AppRoutes () {
  return (
    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/InsertPin" element={<InsertPin />} />

      <Route element={<Layout />}>
        <Route path="/homeAdm" element={<HomeAdm />} />
      </Route>
    </Routes>
  );
};