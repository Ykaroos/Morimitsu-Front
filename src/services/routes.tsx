import { Routes, Route } from "react-router-dom";
import Initial from "../pages/Initial";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import InsertPin from "../pages/InsertPin";

import Layout from "../Layouts/Layout";
import HomeAdm from "../PagesAdm/HomeAdm";
import ProfileAdm from "../PagesAdm/ProfileAdm";
import ProfileConfigAdm from "../PagesAdm/ProfileConfigAdm";

export default function AppRoutes () {
  return (
    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/InsertPin" element={<InsertPin />} />

      <Route element={<Layout />}>
        <Route path="/HomeAdm" element={<HomeAdm />} />
        <Route path="/ProfileAdm" element={<ProfileAdm />} />
        <Route path="/ProfileConfigAdm" element={<ProfileConfigAdm />} />
      </Route>
    </Routes>
  );
};