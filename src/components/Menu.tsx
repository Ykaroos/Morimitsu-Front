import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { AiFillHome } from "react-icons/ai";
import { MdClass } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { BiSolidBell } from "react-icons/bi";

export default function Menu() {
  return (
    <div className="fixed bottom-0 w-screen h-[80px] md:w-[250px] md:h-screen  bg-[#4D0000] text-white flex md:flex-col items-center p-2  md:justify-between">
      {/* Logo */}
      <div className="hidden md:w-[180px] md:flex justify-center ">
        <img
          className="w-2/3 md:w-full max-w-[200px] md:max-w-[350px] h-auto object-contain"
          src={Logo}
          alt="Logo"
        />
      </div>

      {/* Botões do menu */}
      <div className="md:w-[120px] md:h-[180px] flex flex-row md:flex-col justify-center space-x-8 md:space-y-4 items-start ml-[11px] md:ml-[0px]">

        {/* Botão de Ínicio */}
        <Link to="/HomeAdm">
          <div className="flex md:flex-row flex-col space-x-2 w-[50px] md:w-[140px] items-center justify-center md:justify-start md:items-baseline transition-all hover:scale-110 cursor-pointer">
            <AiFillHome className="w-[35px] h-[35px]"/> 
              <p className="text-md md:text-xl font-arimo">Ínicio</p>
          </div>
        </Link>
            
        {/* Botão de Turmas */}
        <div className="flex md:flex-row flex-col space-x-2 w-[50px] md:w-[140px] items-center justify-center md:justify-start transition-all hover:scale-110 cursor-pointer">
          <MdClass className="w-[35px] h-[35px] "/>
          <p className="text-md md:text-xl font-arimo">Turmas</p>
        </div>
            
        {/* Botão de Alunos */}
        <div className="flex md:flex-row flex-col space-x-2 w-[50px] md:w-[140px] items-center justify-center md:justify-start transition-all hover:scale-110 cursor-pointer">
          <PiStudentFill className="w-[35px] h-[35px] ml-2 md:ml-0"/>
          <p className="text-md md:text-xl font-arimo">Alunos</p>
        </div>

      </div>

      {/*Botões do final do menu */}
      <div className="w-[100px] md:w-[180px] h-[70px] flex flex-row justify-center items-end ml-10 md:ml-0 mb-3 md:mb-0">
        {/* Perfil */}
        <Link to="/ProfileAdm">
          <div className="flex flex-col items-center mx-4 transition-all hover:scale-110 cursor-pointer">
            <div className="md:w-[40px] md:h-[40px] flex items-center justify-center md:bg-white md:text-black rounded-full md:p-1 md:mt-4">
              <AiOutlineUser className="w-[35px] h-[35px] md:w-[30px] md:h-[30px]" />
            </div>
            <p className="text-md md:text-lg font-arimo md:mt-1">Perfil</p>
          </div>
        </Link>

        {/* Notificações */}
        <div className="flex flex-col items-center mx-4 transition-all hover:scale-110 cursor-pointer">
            <div className="md:w-[40px] md:h-[40px] flex items-center justify-center md:bg-white md:text-black rounded-full md:p-1 md:mt-4">
                <BiSolidBell className="w-[30px] h-[30px]" />
            </div>
            <p className=" md:text-lg font-arimo md:mt-1">Avisos</p>
        </div>
      </div>
    </div>
  );
}