import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex">
      <Menu />
      <div className=" md:ml-[255px] p-6 w-full h-screen bg-[#191A1C]">
        <Outlet />
      </div>
    </div>
  );
}