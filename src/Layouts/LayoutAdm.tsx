import MenuAdm from "../components/MenuAdm";
import { Outlet } from "react-router-dom";

export default function LayoutAdm() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Menu lateral (desktop) ou inferior (mobile) */}
      <MenuAdm />

      {/* Área principal */}
      <div className="flex-1  md:ml-[250px] md:h-screen min-h-[calc(100vh-80px)] md:min-h-screen overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}