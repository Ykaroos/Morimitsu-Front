import { Routes, Route } from "react-router-dom";
import Initial from "../pages/Initial";

export default function AppRoutes () {
  return (
    <Routes>
      <Route path="/" element={<Initial />} />
    </Routes>
  );
};