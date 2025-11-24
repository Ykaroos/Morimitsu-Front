import { MdClass } from "react-icons/md";
import { PiStudentFill, PiNotePencil } from "react-icons/pi";
import { AiOutlineInfo } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SpecificClassAdm() {

  const [alunos, setAlunos] = useState<any[]>([]);
  
  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem("alunos") || "[]");
    setAlunos(dadosSalvos);
  }, []);

  return (
    <div className="w-full h-auto md:h-screen bg-black flex flex-col md:flex-row overflow-y-auto mb-[65px] md:mb-0 overflow-x-hidden">
      {/* Div do meio rolável */}
      <div className="w-screen md:w-2/3 md:h-screen md:overflow-y-auto scrollbar-hide px-5 md:px-10 md:overflow-x-hidden space-y-5">


        {/* Primeira caixa*/}
        <div className="w-full h-auto flex flex-col justify-center items-center bg-[#191A1C] rounded-[10px] mt-4 p-5 space-y-2">
          <p className="text-white text-2xl font-arimo">Nome da Turma</p>  
          <p className="text-white text-lg font-arimo">Nome do monitor, se existir</p>  
          <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2 md:px-40 mt-1">

            <Link to="/ClassAttendanceAdm" className="md:hidden w-full h-auto">
              <div className="w-full h-[50px] md:h-[220px] bg-[#A70000] rounded-[10px] flex flex-row justify-center items-center text-white transition-all hover:scale-102 cursor-pointer space-x-2">
                <MdClass className="w-[30px] h-[30px]"/>
                <p className="text-white text-xl font-arimo">Frequência</p>
              </div>
            </Link>

            <Link to="/StudentsFromClassAdm" className="w-full h-auto">
              <div className="w-full h-[50px] md:h-[220px] bg-white rounded-[10px] flex flex-row md:flex-col justify-center items-center  text-black transition-all hover:scale-102 cursor-pointer space-x-2 md:space-x-0">
                <PiStudentFill className="w-[30px] h-[30px] md:w-[80px] md:h-[80px]"/>
                <p className="text-black text-xl font-arimo">Alunos</p>
              </div>
            </Link>
            

            <Link to="/EditClassAdm" className="w-full h-auto">
              <div className="w-full h-[50px] md:h-[220px] bg-black rounded-[10px] border-1 border-white flex flex-row md:flex-col justify-center items-center text-white transition-all hover:scale-102 cursor-pointer space-x-2 md:space-x-0">
                <BiPencil className="w-[30px] h-[30px] md:w-[60px] md:h-[60px]"/>
                <p className="text-white text-xl font-arimo">Edição</p>
              </div>
            </Link>
            

          </div>
        </div>

        <div className="w-full h-[600px] bg-[#191A1C] rounded-[10px] text-white mb-5">
          fazer o grafico
        </div> 

      </div>

      {/* Div lateral fixa */}
      <div className="hidden w-1/3 h-screen md:flex justify-center items-center p-5">
        <div className="w-full h-full bg-[#191A1C] rounded-[10px] flex flex-col">
          <div className="w-full h-[60px] flex flex-row justify-between items-center px-3">
            <p className="text-white text-2xl font-arimo">Alunos</p>
            <Link to="/ClassAttendanceAdm">
              <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-white text-black">
                <PiNotePencil className="w-[30px] h-[30px]"/>
              </div>
            </Link>
            
          </div>
          <div className="w-full h-full flex flex-col p-3 overflow-y-auto px-5 space-y-1 scrollbar-hide">
            {alunos.length === 0 ? (
              <p className="text-white font-arimo text-lg">Nenhum aluno cadastrado ainda.</p>
            ) : (
              alunos.map((aluno, index) => (
                <div
                  key={index}
                  className="w-full h-[39px] flex justify-between items-center bg-[#434343] text-white font-arimo text-lg rounded-[5px] p-2"
                >
                  <p className="text-white text-md ">{aluno.nomeCompleto}</p>
                  <Link to="/SpecificStudentAdm">
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
    </div>
  );
}