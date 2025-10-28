import { Routes, Route } from "react-router-dom";
import Initial from "../pages/Initial";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import InsertPin from "../pages/InsertPin";

import Layout from "../Layouts/Layout";
import HomeAdm from "../PagesAdm/HomeAdm";
import ProfileAdm from "../PagesAdm/ProfileAdm";
import ProfileConfigAdm from "../PagesAdm/ProfileConfigAdm";
import ClassAdm from "../PagesAdm/ClassAdm";
import CreateClassAdm from "../PagesAdm/CreateClassAdm";
import StudentsAdm from "../PagesAdm/StudentsAdm"
import CreateStudentsAdm from "../PagesAdm/CreateStudentsAdm"
import WarningsAdm from "../PagesAdm/WarningsAdm";
import ControlGraduationAdm  from "../PagesAdm/ControlGraduationAdm";


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
        <Route path="/ClassAdm" element={<ClassAdm />} />
        <Route path="/CreateClassAdm" element={<CreateClassAdm />} />
        <Route path="/StudentsAdm" element={<StudentsAdm />} />
        <Route path="/CreateStudentsAdm" element={<CreateStudentsAdm />} />
        <Route path="/WarningsAdm" element={<WarningsAdm />} />
        <Route path="/ControlGraduationAdm" element={<ControlGraduationAdm />} />


      </Route>
    </Routes>
  );
};