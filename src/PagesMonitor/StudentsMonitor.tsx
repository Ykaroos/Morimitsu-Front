import { BiSolidUserPlus } from "react-icons/bi";
import { LuFilter } from "react-icons/lu";
import { AiOutlineSearch, AiOutlineInfo } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function StudentsMonitor() {
  const [alunos, setAlunos] = useState<any[]>([]);

  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem("alunos") || "[]");
    setAlunos(dadosSalvos);
  }, []);

  return (
    <div className="w-full h-full bg-black  p-5 flex justify-center items-start md:items-center overflow-x-hidden md:px-30">
      <div className="w-full h-[660px] md:h-full bg-[#191A1C] rounded-[10px] flex flex-col mb-[65px] md:mb-0 ">

        {/* Div do cabeçalho */}
        <div className="w-full h-[80px] flex flex-row justify-between items-center px-2 md:px-5">

          {/* Caixa de pesquisa e filtro */}
          <div className="w-[200px] md:w-[300px] h-[50px] flex flex-row justify-center items-center space-x-2">
            <div className="relative w-[150px] md:w-[260px]">
              <input
                type="text"
                placeholder="Pesquisar..."
                className="w-full h-[40px] md:h-[50px] rounded-[10px] text-lg font-arimo text-white placeholder-white bg-[#434343] focus:outline-none focus:ring-2 focus:ring-[#434343] px-3"
              />
              <AiOutlineSearch
                className="absolute right-3 top-2 w-[25px] h-[25px] md:w-[35px] md:h-[35px] text-white transition-all hover:scale-102 cursor-pointer"
              />
            </div>

            <div className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center text-black">
              <LuFilter className="w-[20px] h-[20px] mt-1" />
            </div>
          </div>

          {/* Botão Criar */}
          <Link to="/CreateStudentsMonitor">
            <div className="w-[110px] h-[45px] bg-[#A70000] flex flex-row justify-center items-center rounded-[10px] text-white transition-all hover:scale-102 cursor-pointer space-x-1">
              <BiSolidUserPlus className="w-[35px] h-[35px]" />
              <p className="text-lg font-arimo">Criar</p>
            </div>
          </Link>
        </div>

        {/* Div onde irão aparecer os alunos */}
        <div className="w-full h-full flex flex-col p-3 overflow-y-auto px-5 space-y-1">
          {alunos.length === 0 ? (
            <p className="text-white font-arimo text-lg">Nenhum aluno cadastrado ainda.</p>
          ) : (
            alunos.map((aluno, index) => (
              <div
                key={index}
                className="w-full h-[35px] flex justify-between items-center bg-[#434343] text-white font-arimo text-lg rounded-[5px] p-2"
              >
                <p className="text-white text-md mx-3 m-1">{aluno.nomeCompleto}</p>
                <Link to="/SpecificStudentMonitor">
                  <div className="w-[20px] h-[20px] rounded-full flex justify-center items-center bg-white p-1 text-black transition-all hover:scale-110 cursor-pointer">
                    <AiOutlineInfo className="w-auto h-auto"/>
                  </div>
                </Link>
                
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}