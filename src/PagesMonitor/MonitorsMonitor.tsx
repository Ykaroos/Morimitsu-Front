import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MonitorsMonitor() {
  const [alunos, setAlunos] = useState<any[]>([]);
  const [turmas, setTurmas] = useState<any[]>([]);

  useEffect(() => {
    const dadosAlunos = JSON.parse(localStorage.getItem("alunos") || "[]");
    const dadosTurmas = JSON.parse(localStorage.getItem("turmas") || "[]");
    setAlunos(dadosAlunos);
    setTurmas(dadosTurmas);
  }, []);

  const getPrimeiroESegundoNome = (nomeCompleto: string) => {
    const partes = nomeCompleto.trim().split(" ");
    return partes.slice(0, 2).join(" ");
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center overflow-x-hidden">
      {/* Conteúdo scrollável */}
      <div className="w-full flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide p-5 px-5 md:px-12 mb-[65px] md:mb-0">
        {alunos.length === 0 ? (
          <p className="text-white text-center mt-5 font-arimo">
            Nenhum aluno cadastrado ainda.
          </p>
        ) : (
          alunos.map((aluno) => (
            <div
              key={aluno.id}
              className="w-full bg-[#191A1C] rounded-[10px] flex flex-col m-2 p-4"
            >
              <div className="w-full h-auto flex flex-row justify-between mb-5">
                {/* Cabeçalho do monitor */}
                <div className="w-full flex justify-between items-center">
                  <p className="text-3xl text-white font-arimo">
                    {getPrimeiroESegundoNome(aluno.nomeCompleto)}
                  </p>
                </div>
              </div>

              {/* Turmas */}
              {turmas.length === 0 ? (
                <p className="text-white font-arimo text-md">
                  Nenhuma turma cadastrada ainda.
                </p>
              ) : (
                <div className="w-full overflow-x-auto scrollbar-hide rounded-[10px] px-1">
                  <div className="w-max flex flex-row justify-start items-center space-x-3">
                    {turmas.map((turma) => (
                      <Link to="/SpecificClassAdm" key={turma.id}>
                        <div className="bg-white w-[190px] md:w-[240px] h-[150px] rounded-[12px] flex flex-col justify-end items-start shrink-0">
                          <p className="text-black text-xl mx-3 m-1">
                            {turma.nome}
                          </p>
                          <div className="w-full h-[40px] bg-[#A70000] rounded-b-[10px] flex flex-row justify-between items-center px-2">
                            <p className="text-lg text-white">
                              {getPrimeiroESegundoNome(aluno.nomeCompleto)}
                            </p>
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
                </div>
              )}
            </div>
          ))
        )}

        
      </div>
    </div>
  );
}