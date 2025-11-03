import { MdClass } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { IoSchoolSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function HomeAdm() {
  return (
    <div className="w-full h-auto md:h-screen bg-black flex flex-col md:flex-row overflow-y-auto mb-[70px] md:mb-0 overflow-x-hidden">
      {/* Div do meio rolável */}
      <div className="w-screen md:w-2/3 md:h-screen md:overflow-y-auto scrollbar-hide px-5 md:px-10 md:overflow-x-hidden space-y-5">
        {/* Primeira caixa, turmas e notificações */}
        <div className="w-full h-[400px] md:h-[530px] bg-[#191A1C] md:m-4 mt-4 rounded-[10px] p-5">

          {/* Caixa com as notificações */}
          <div className="bg-[#141416] w-full h-[80px] md:h-[120px] rounded-[10px]"></div>

          {/* Caixa com as turmas */}
          <div className=" w-full h-[330px] md:mt-8 flex flex-col items-center justify-center p-y-5">
            <p className="text-white text-2xl font-arimo mb-8">Minhas Turmas</p>
            <div className="w-full h-[150px] md:h-[200px] bg-blue-500"></div>
          </div>
        </div>

        {/* Segunda caixa, botões de turmas, alunos e monitores; respectivamente */}
        <div className="w-full h-auto md:h-[350px] bg-[#191A1C] md:m-4 rounded-[10px] p-3  flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 ">

          {/* Botão de Turmas */}
          <Link to="/ClassAdm" className="w-full h-auto px-3">
            <div className="flex flex-row-reverse md:flex-col justify-center items-center w-full h-[50px] md:h-[280px] bg-[#BA1E22] rounded-[10px] text-white transition-all hover:scale-102 cursor-pointer">
              <p className="font-arimo text-xl md:text-4xl md:mb-5 ml-1 md:ml-0 mr-6 md:mr-0">Turmas</p>
              <MdClass className="w-[35px] h-[35px] md:w-[100px] md:h-[100px] "/>
            </div>
          </Link>
          

          {/* Botão de Alunos */}
          <Link to="/StudentsAdm" className="w-full h-auto px-3">
            <div className="flex flex-row-reverse md:flex-col justify-center items-center w-full h-[50px] md:h-[280px] bg-white rounded-[10px] transition-all hover:scale-102 cursor-pointer">
              <p className="font-arimo text-xl md:text-4xl md:mb-5 mr-8 md:mr-0">Alunos</p>
              <PiStudentFill className="w-[45px] h-[45px] md:w-[100px] md:h-[100px]"/>
            </div>
          </Link>
          

          {/* Botão de Monitores */}
          <Link to="" className="w-full h-auto px-3">
            <div className="flex flex-row-reverse md:flex-col justify-center items-center w-full h-[50px] md:h-[280px] bg-black rounded-[10px] border-1 border-white text-white transition-all hover:scale-102 cursor-pointer">
              <p className="font-arimo text-xl md:text-4xl md:mb-5 ml-2 md:ml-0">Monitores</p>
              <IoSchoolSharp className="w-[35px] h-[35px] md:w-[100px] md:h-[100px]"/>
            </div>
          </Link>
          
        </div>

        {/* Terceira caixa, Botão para gerenciar as graduações */}
        <Link to="/ControlGraduationAdm">
          <div className="hidden md:flex justify-center items-center w-full h-auto bg-[#191A1C] m-4 rounded-[10px] p-8">
            <div className="w-auto h-[80px] bg-[#BA1E22] rounded-[10px] flex items-center justify-center transition-all hover:scale-102 cursor-pointer px-10">
              <p className="text-white text-3xl font-arimo">Gerenciamento de Graduação</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Div lateral fixa */}
      <div className="w-screen md:w-1/3 md:h-screen flex flex-col justify-center items-center md:p-3 px-5 md:px-8">

        {/* Caixa com os aniversáriantes */}
        <div className="bg-[#191A1C] w-full h-auto md:h-[220px] rounded-[10px] m-3 mt-0 flex flex-col items-center justify-center p-5">
          <p className="text-white text-2xl font-arimo">Aniversários</p>
          <div className="w-full h-[70px] md:h-full bg-yellow-500 mt-3"></div>
        </div>

        {/* Caixa com os graduandos */}
        <div className="bg-[#191A1C] w-full h-auto md:h-[220px] rounded-[10px] m-3  flex flex-col items-center justify-center p-5">
          <p className="text-white text-2xl font-arimo">Graduandos</p>
          <div className="w-full h-[70px] md:h-full bg-cyan-500 mt-3"></div>
        </div>

        {/* Caixa com o grafico de faixas */}
        <div className="bg-[#191A1C] w-full h-[220px] rounded-[10px] m-3 mb-0 text-white flex justify-center items-center">
          Aqui vai ter o grafico de faixas em geral
        </div>
      </div>

      {/* Botão de gerenciar que só aparece mobile */}
      <Link to="/ControlGraduationAdm">
        <div className="md:hidden flex w-screen p-5">
          <div className="flex justify-center items-center w-full h-auto bg-[#191A1C] md:m-4 rounded-[10px] p-4">
            <div className="w-full h-[60px] bg-[#BA1E22] rounded-[10px] flex items-center justify-center transition-all hover:scale-102 cursor-pointer">
              <p className="text-white text-xl font-arimo">Gerenciamento de Graduação</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}