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
    <div className="w-full h-auto md:h-screen bg-black flex flex-col md:flex-row overflow-y-auto mb-[70px] md:mb-0 overflow-x-hidden">
      {/* Div do meio rolável */}
      <div className="w-screen md:w-2/3 md:h-screen md:overflow-y-auto scrollbar-hide px-5 md:px-10 md:overflow-x-hidden space-y-5">


        {/* Primeira caixa*/}
        <div className="w-full h-auto flex flex-col justify-center items-center bg-[#191A1C] rounded-[10px] mt-4 p-5 space-y-2">
          <p className="text-white text-2xl font-arimo">Nome da Turma</p>  
          <p className="text-white text-lg font-arimo">Nome do monitor, se existir</p>  
          <div className="w-full h-auto flex flex-row justify-center items-center space-x-2 px-30 mt-1">

            <Link to="" className="w-full h-auto">
              <div className="w-full h-[220px] bg-white rounded-[10px] flex flex-col justify-center items-center  text-black transition-all hover:scale-102 cursor-pointer">
                <PiStudentFill className="w-[80px] h-[80px]"/>
                <p className="text-black text-xl font-arimo">Alunos</p>
              </div>
            </Link>
            

            <Link to="/EditClassAdm" className="w-full h-auto">
              <div className="w-full h-[220px] bg-black rounded-[10px] border-1 border-white flex flex-col justify-center items-center text-white transition-all hover:scale-102 cursor-pointer">
                <BiPencil className="w-[60px] h-[60px]"/>
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
      <div className="w-1/3 h-screen flex justify-center items-center p-5">
        <div className="w-full h-full bg-[#191A1C] rounded-[10px] flex flex-col">
          <div className="w-full h-[60px] flex flex-row justify-between items-center px-3">
            <p className="text-white text-2xl font-arimo">Alunos</p>
            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-white text-black">
              <PiNotePencil className="w-[30px] h-[30px]"/>
            </div>
          </div>
          <div className="w-full h-full flex flex-col p-3 overflow-y-auto px-5 space-y-1">
            {alunos.length === 0 ? (
              <p className="text-white font-arimo text-lg">Nenhum aluno cadastrado ainda.</p>
            ) : (
              alunos.map((aluno, index) => (
                <div
                  key={index}
                  className="w-full h-[35px] flex justify-between items-center bg-[#434343] text-white font-arimo text-lg rounded-[5px] p-2"
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