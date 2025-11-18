import { Routes, Route } from "react-router-dom";
import Initial from "../pages/Initial";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import InsertPin from "../pages/InsertPin";

import LayoutAdm from "../Layouts/LayoutAdm";
import LayoutMonitor from "../Layouts/LayoutMonitor";
import HomeAdm from "../PagesAdm/HomeAdm";
import ProfileAdm from "../PagesAdm/ProfileAdm";
import ProfileConfigAdm from "../PagesAdm/ProfileConfigAdm";
import ClassAdm from "../PagesAdm/ClassAdm";
import CreateClassAdm from "../PagesAdm/CreateClassAdm";
import EditClassAdm from "../PagesAdm/EditClassAdm";
import SpecificClassAdm from "../PagesAdm/SpecificClassAdm";
import ClassAttendanceAdm from "../PagesAdm/ClassAttendanceAdm";
import StudentsAdm from "../PagesAdm/StudentsAdm"
import CreateStudentsAdm from "../PagesAdm/CreateStudentsAdm"
import EditStudentsAdm from "../PagesAdm/EditStudentsAdm"
import SpecificStudentAdm from "../PagesAdm/SpecificStudentAdm";
import StudentsFromClassAdm from "../PagesAdm/StudentsFromClassAdm"
import WarningsAdm from "../PagesAdm/WarningsAdm";
import ControlGraduationAdm  from "../PagesAdm/ControlGraduationAdm";
import MonitorsAdm from "../PagesAdm/MonitorsAdm";

export default function AppRoutes () {
  return (
    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/InsertPin" element={<InsertPin />} />

      <Route element={<LayoutAdm />}>
        <Route path="/HomeAdm" element={<HomeAdm />} />
        <Route path="/ProfileAdm" element={<ProfileAdm />} />
        <Route path="/ProfileConfigAdm" element={<ProfileConfigAdm />} />
        <Route path="/ClassAdm" element={<ClassAdm />} />
        <Route path="/CreateClassAdm" element={<CreateClassAdm />} />
        <Route path="/EditClassAdm" element={<EditClassAdm />} />
        <Route path="/SpecificClassAdm" element={<SpecificClassAdm />} />
        <Route path="/ClassAttendanceAdm" element={<ClassAttendanceAdm />} />
        <Route path="/StudentsAdm" element={<StudentsAdm />} />
        <Route path="/CreateStudentsAdm" element={<CreateStudentsAdm />} />
        <Route path="/EditStudentsAdm" element={<EditStudentsAdm />} />
        <Route path="/SpecificStudentAdm" element={<SpecificStudentAdm />} />
        <Route path="/StudentsFromClassAdm" element={<StudentsFromClassAdm />} />
        <Route path="/WarningsAdm" element={<WarningsAdm />} />
        <Route path="/ControlGraduationAdm" element={<ControlGraduationAdm />} />
        <Route path="/MonitorsAdm" element={<MonitorsAdm />} />
      </Route>
      
      <Route element={<LayoutMonitor />}>

      </Route>
    </Routes>
  );
};