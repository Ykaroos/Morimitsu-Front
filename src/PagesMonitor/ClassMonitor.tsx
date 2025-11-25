import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ClassMonitor() {
  const [turmas, setTurmas] = useState<any[]>([]);

  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem("turmas") || "[]");
    setTurmas(dadosSalvos);
  }, []);

  return (
    <div className="w-full h-full bg-black flex flex-col justify-center items-center">
      <div className="w-full h-full flex flex-col justify-center items-center p-5 px-5 md:px-25 mb-[65px] md:mb-0">
        
        {/* Caixa Minhas Turmas */}
        <div className="w-full h-[620px] md:full bg-[#191A1C] rounded-[10px] flex flex-col m-2">
          <div className="w-full h-[65px] flex items-center justify-start px-5">
            <p className="text-4xl text-white font-arimo">Minhas Turmas</p>
          </div>
          <div className="w-full h-full overflow-y-auto scrollbar-hide rounded-b-[10px] px-3">
            {turmas.length === 0 ? (
              <p className="text-white text-center mt-5 font-arimo">
                Nenhuma turma criada ainda.
              </p>
            ) : (
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center py-4 md">
                {turmas.map((turma) => (

                  <Link to="/SpecificClassMonitor">
                    <div
                      key={turma.id}
                      className="bg-white w-[280px] md:w-[240px] h-[150px] rounded-[12px] flex flex-col justify-end items-start shrink-0">
                      <p className="text-black text-xl mx-3 m-1">{turma.nome}</p>
                      <div className="w-full h-[40px] bg-[#A70000] rounded-b-[10px] flex flex-row justify-between items-center px-2">
                        <p className="text-lg text-white">{turma.monitor}</p>

                        <Link to="/EditClassMonitor">
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
    </div>
  );
}