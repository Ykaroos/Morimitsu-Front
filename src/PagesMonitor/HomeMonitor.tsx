import { MdClass } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { IoSchoolSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HomeMonitor() {

  const [turmas, setTurmas] = useState<any[]>([]);
  const [alunos, setAlunos] = useState<any[]>([]);

  useEffect(() => {
    const dadosTurmaSalvos = JSON.parse(localStorage.getItem("turmas") || "[]");
    setTurmas(dadosTurmaSalvos);
  }, []);
  
  useEffect(() => {
  const dadosAlunosSalvos = JSON.parse(localStorage.getItem("alunos") || "[]");
  setAlunos(dadosAlunosSalvos);
  }, []);

  return (
    <div className="w-full h-auto md:h-screen bg-black flex flex-col md:flex-row overflow-y-auto mb-[65px] md:mb-0 overflow-x-hidden">
      {/* Div do meio rolável */}
      <div className="w-screen md:w-2/3 md:h-screen md:overflow-y-auto scrollbar-hide px-5 md:px-10 md:overflow-x-hidden space-y-5">
        {/* Primeira caixa, turmas e notificações */}
        <div className="w-full h-auto md:h-[450px] bg-[#191A1C] md:m-4 mt-4 rounded-[10px] p-5">

          {/* Caixa com as notificações */}
          <div className="bg-[#141416] w-full h-[80px] md:h-[120px] rounded-[10px]"></div>

          {/* Caixa com as turmas */}
          <div className=" w-full h-[250px] md:mt-8 flex flex-col items-center justify-center p-y-5">
            <p className="text-white text-2xl font-arimo mb-8">Minhas Turmas</p>
            <div className="w-full h-[220px] overflow-x-auto scrollbar-hide  rounded-b-[10px] px-3">
              {turmas.length === 0 ? (
                <p className="text-white text-center mt-5 font-arimo">
                  Nenhuma turma criada ainda.
                </p>
              ) : (
                <div className="w-max h-full flex flex-row justify-start items-center space-x-3 ">
                  {turmas.map((turma) => (
                    <Link to ="/SpecificClassAdm">
                      <div
                        key={turma.id}
                        className="bg-white w-[190px] md:w-[240px] h-[150px] rounded-[12px] flex flex-col justify-end items-start shrink-0">
                        <p className="text-black text-xl mx-3 m-1">{turma.nome}</p>
                        <div className="w-full h-[40px] bg-[#A70000] rounded-b-[10px] flex flex-row justify-between items-center px-2">
                          <p className="text-lg text-white">monitor</p>
                          <Link to="/EditClassAdm">
                            <div className="w-[30px] h-[30px] bg-white text-black p-1 rounded-full">
                              <BsThreeDotsVertical className="w-full h-full" />
                            </div>
                          </Link>
                          
                        </div>
                      </div>
                    </Link>
                    
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Segunda caixa, botões de turmas, alunos e monitores; respectivamente */}
        <div className="w-full h-auto md:h-[400px] bg-[#191A1C] md:m-4 rounded-[10px] p-3  flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 ">

          {/* Botão de Turmas */}
          <Link to="/ClassMonitor" className="w-full h-auto px-3">
            <div className="flex flex-row-reverse md:flex-col justify-center items-center w-full h-[50px] md:h-[280px] bg-[#BA1E22] rounded-[10px] text-white transition-all hover:scale-102 cursor-pointer">
              <p className="font-arimo text-xl md:text-4xl md:mb-5 ml-1 md:ml-0 mr-6 md:mr-0">Turmas</p>
              <MdClass className="w-[35px] h-[35px] md:w-[100px] md:h-[100px] "/>
            </div>
          </Link>
          

          {/* Botão de Alunos */}
          <Link to="/StudentsMonitor" className="w-full h-auto px-3">
            <div className="flex flex-row-reverse md:flex-col justify-center items-center w-full h-[50px] md:h-[280px] bg-white rounded-[10px] transition-all hover:scale-102 cursor-pointer">
              <p className="font-arimo text-xl md:text-4xl md:mb-5 mr-8 md:mr-0">Alunos</p>
              <PiStudentFill className="w-[45px] h-[45px] md:w-[100px] md:h-[100px]"/>
            </div>
          </Link>
          

          {/* Botão de Monitores */}
          <Link to="/MonitorsMonitor" className="w-full h-auto px-3">
            <div className="flex flex-row-reverse md:flex-col justify-center items-center w-full h-[50px] md:h-[280px] bg-black rounded-[10px] border-1 border-white text-white transition-all hover:scale-102 cursor-pointer">
              <p className="font-arimo text-xl md:text-4xl md:mb-5 ml-2 md:ml-0">Monitores</p>
              <IoSchoolSharp className="w-[35px] h-[35px] md:w-[100px] md:h-[100px]"/>
            </div>
          </Link>
          
        </div>
      </div>

      {/* Div lateral fixa */}
      <div className="w-screen md:w-1/3 md:h-screen flex flex-col justify-center items-center md:p-3 px-5 md:px-8">

        {/* Caixa com os aniversáriantes */}
        <div className="bg-[#191A1C] w-full h-auto md:h-[250px] rounded-[10px] m-3 mt-0 flex flex-col items-center justify-center p-5">
          <p className="text-white text-2xl font-arimo">Aniversários</p>
          <div className="w-full h-[70px] flex flex-row md:flex-col md:h-full mt-3 overflow-x-auto md:overflow-x-hidden overflow-y-hidden md:overflow-y-auto scrollbar-hide space-y-1 space-x-2 py-2">
            {alunos.length === 0 ? (
              <p className="text-white font-arimo text-lg">
                Nenhum aluno cadastrado ainda.
              </p>
            ) : (
              alunos.map((aluno, index) => {
                const dataFormatada = new Date(aluno.dataNascimento).toLocaleDateString(
                  "pt-BR",
                  { day: "2-digit", month: "2-digit" }
                );
                const primeiroNome = aluno.nomeCompleto.split(" ")[0];

                return (
                  <div
                    key={index}
                    className="w-[220px] md:w-full h-[60px] flex justify-between items-center bg-[#434343] text-white font-arimo text-lg rounded-[10px] p-2 shrink-0"
                  >
                    <p className="text-white text-lg md:text-2xl">{primeiroNome}</p>
                    <p className="text-white text-lg md:text-2xl">{dataFormatada}</p>
                  </div>
                );
              })
            )}

          </div>
        </div>

        {/* Caixa com o grafico de faixas */}
        <div className="bg-[#191A1C] w-full h-[250px] rounded-[10px] m-3 mb-0 text-white flex justify-center items-center">
          Aqui vai ter o grafico de faixas em geral
        </div>
      </div>

    </div>
  );
}