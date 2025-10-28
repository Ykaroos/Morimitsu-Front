import { BiSolidUserPlus } from "react-icons/bi";
import { LuFilter } from "react-icons/lu";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function StudentsAdm() {
  return (
    <div className="w-full h-screen md:h-full bg-black p-2 md:p-5 flex justify-center items-center mb-[70px] md:mb-0 overflow-x-hidden">
      <div className="w-full h-full bg-[#191A1C] rounded-[10px] flex flex-col">

        {/* Div do cabeçalho */}
        <div className="w-full h-[80px]  flex flex-row justify-between items-center px-5">

          {/*Div para caixa de pesquisa e botão de filtro*/}
          <div className="w-[300px] h-[50px] flex flex-row justify-center items-center space-x-2">

            {/* Input de pesquisa */}
            <div className="relative w-[200px]">
              <input
                type="text"
                placeholder="Pesquisar..."
                className="w-full h-[50px] rounded-[10px] text-lg font-arimo text-white bg-[#222529] focus:outline-none focus:ring-2 focus:ring-[#222529] px-3"
              />

              {/* Ícone de lupa */}
              <AiOutlineSearch
                className="absolute right-3 top-2 w-[35px] h-[35px] text-white transition-all hover:scale-102 cursor-pointer"
              />
            </div>

            {/* Botão de filtro */}
            <div className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center text-black">
              <LuFilter className="w-[20px] h-[20px] mt-1"/>
            </div>
          </div>

          {/* Botão para criar aluno */}
          <Link to="/CreateStudentsAdm">
            <div className="w-[110px] h-[45px] bg-[#A70000] flex flex-row justify-center items-center rounded-[10px] text-white transition-all hover:scale-102 cursor-pointer space-x-1">
              <BiSolidUserPlus className="w-[35px] h-[35px]"/>
              <p className="text-lg font-arimo">Criar</p>
            </div>
          </Link>
          
        </div>

        {/* Div onde irão aparecer os alunos */}
        <div className="w-full h-full bg-pink-950"></div>
          
      </div>
    </div>
  );
}