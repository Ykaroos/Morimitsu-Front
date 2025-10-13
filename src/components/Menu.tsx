import Logo from "../assets/Logo.png";
import { AiFillHome } from "react-icons/ai";
import { MdClass } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { BiSolidBell } from "react-icons/bi";

export default function Menu() {
  return (
    <div className="fixed bottom-0 w-screen h-[80px] md:w-[255px] md:h-screen  bg-[#4D0000] text-white flex md:flex-col items-center p-2 justify-between">
        {/* Logo */}
        <div className="hidden md:w-[180px] md:flex justify-center ">
        <img
            className="w-2/3 md:w-full max-w-[200px] md:max-w-[350px] h-auto object-contain"
            src={Logo}
            alt="Logo"
        />
        </div>
        {/* Botões do menu */}
        <div className="md:w-[120px] md:h-[180px] flex flex-row md:flex-col justify-center space-x-10 md:space-y-4 items-start ml-[8px] md:ml-[0px]">

            <div className="flex md:flex-row flex-col space-x-2 w-[50px] md:w-[140px] items-center justify-center md:justify-start md:items-baseline">
                <AiFillHome className="w-[35px] h-[35px]"/> 
                <p className="text-md md:text-xl font-arimo">Ínicio</p>
            </div>

            <div className="flex md:flex-row flex-col space-x-2 w-[50px] md:w-[140px] items-center justify-center md:justify-start">
                <MdClass className="w-[35px] h-[35px]"/>
                <p className="text-md md:text-xl font-arimo">Turmas</p>
            </div>
            
            <div className="flex md:flex-row flex-col space-x-2 w-[50px] md:w-[140px] items-center justify-center md:justify-start">
                <PiStudentFill className="w-[35px] h-[35px]"/>
                <p className="text-md md:text-xl font-arimo">Alunos</p>
            </div>

        </div>

        {/*Botões do final do menu */}
        <div className="w-[100px] md:w-[180px] h-[80px] flex flex-row justify-center">
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-white text-black rounded-full p-1 m-2 mt-4 md:m-6"> 
                <AiOutlineUser className="w-[35px] h-[35px]"/>
            </div>
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-white text-black rounded-full p-1 m-2 mt-4 md:m-6">
                <BiSolidBell className="w-[30px] h-[30px]"/>
            </div>
        </div>

    </div>
  );
}