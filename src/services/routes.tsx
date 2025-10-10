import { Routes, Route } from "react-router-dom";
import Initial from "../pages/Initial";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";

export default function AppRoutes () {
  return (
    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
    </Routes>
  );
};