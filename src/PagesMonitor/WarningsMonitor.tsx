import { BiSolidBell } from "react-icons/bi";
import { useEffect, useState } from "react";

export default function WarningsMonitor() {
  const [alunos, setAlunos] = useState<any[]>([]);
    
  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem("alunos") || "[]");
    setAlunos(dadosSalvos);
  }, []);

  return (
    <div className="w-full h-screen md:h-full bg-black p-5 md:p-8 flex justify-center items-center">
      <div className="w-full h-[580px] md:h-full bg-[#191A1C] rounded-[10px] flex flex-col mb-[65px] md:mb-0 ">
        <div className="w-full h-full flex flex-col p-3 overflow-y-auto px-5 space-y-1 scrollbar-hide">
          {alunos.length === 0 ? (
            <p className="text-white font-arimo text-lg">Nenhum aluno cadastrado ainda.</p>
          ) : (
            alunos.map((aluno, index) => (
              <div
                key={index}
                className="w-full h-[60px] flex justify-Start items-center bg-[#434343] text-white font-arimo text-lg rounded-[5px] p-2 shrink-0 space-x-3"
              >
                <BiSolidBell className="text-[#B90101] w-[40px] h-[40px]" />
                <p className="text-white text-md ">{aluno.nomeCompleto} pode subir de grau</p>
                
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}