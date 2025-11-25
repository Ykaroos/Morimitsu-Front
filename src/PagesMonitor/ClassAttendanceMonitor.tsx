import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ClassAttendanceMonitor() {

  const [alunos, setAlunos] = useState<any[]>([]);
  
  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem("alunos") || "[]");
    setAlunos(dadosSalvos);
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleSendCode = () => {
    setShowModal(true);
  };

  return (
    <div className="w-full h-full bg-black flex justify-center items-center overflow-x-hidden md:px-[250px]">
      <div className="w-full h-[660px] md:h-full flex justify-center items-center p-5 mb-[65px] md:mb-0">
        <div className="w-full h-full bg-[#191A1C] rounded-[10px] flex flex-col py-2">
          <div className="w-full h-[60px] flex flex-row justify-center items-center">
            <p className="text-white text-3xl font-arimo">Frequência</p>
          </div>
          <div className="w-full h-full flex flex-col items-center p-5 overflow-y-auto px-5 space-y-1 scrollbar-hide">
            {alunos.length === 0 ? (
              <p className="text-white font-arimo text-lg">Nenhum aluno cadastrado ainda.</p>
            ) : (
              alunos.map((aluno, index) => (
                <div
                  key={index}
                  className="w-full h-[35px] flex justify-between items-center bg-[#434343] text-white font-arimo text-lg rounded-[5px] p-2"
                >
                  <p className="text-white text-md ">{aluno.nomeCompleto}</p>
                  <input 
                    type="checkbox" 
                    className="w-[20px] h-[20px]"
                  />
                  
                </div>
              ))
            )}
            <div className="w-full h-auto flex flex-row justify-center items-center space-x-3">
              {/* botão de voltar */}
              <Link to="/SpecificClassMonitor">
                <div className="w-[100px] h-[40px] bg-[#BA1E22] rounded-[5px] flex justify-center items-center mt-1 transition-all hover:scale-110 cursor-pointer shrink-0">
                  <p className="text-white text-xl font-arimo">Voltar</p>
                </div>
              </Link>
              

              {/* botão de salvar */}
              <div onClick={handleSendCode} className="w-[100px] h-[40px] bg-[#BA1E22] rounded-[5px] flex justify-center items-center mt-1 transition-all hover:scale-110 cursor-pointer shrink-0">
                <p className="text-white text-xl font-arimo">Salvar</p>
              </div>

            </div>
            
          </div>

        </div>
        {/* Telinha de aviso */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="w-[250px] h-[150px] md:w-[400px] md:h-[300px] bg-[#222529] rounded-[15px] flex flex-col items-center justify-center text-center space-y-5">

              <p className="text-lg font-arimo text-white md:text-2xl">Frequência Salva!</p>

              <Link to ="/SpecificClassMonitor" className="w-full md:w-[100px] flex justify-center">
                <div className= "w-[80px] h-[45px] bg-[#BA1E22] rounded-[15px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                  <p className="text-white text-lg md:text-xl font-arimo">
                    ok
                  </p>
                </div>
              </Link>

            </div>
          </div>
        )}
      </div>
    </div>  
    
  );
}