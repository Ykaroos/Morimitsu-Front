import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CreateClassAdm() {
  const [showModal, setShowModal] = useState(false);
  const [showSavedModal, setShowSavedModal] = useState(false);
  const [className, setClassName] = useState("");
  const [monitor, setMonitor] = useState("");

  const navigate = useNavigate();

  const handleSendCode = () => {
    if (!className.trim()) {
      alert("Digite o nome da turma!");
      return;
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    const novaTurma: any = {
      id: Date.now(),
      nome: className,
    };

    
    if (monitor.trim() !== "") {
      novaTurma.monitor = monitor;
    }

    {/* aqui ta salvando */}
    const turmasExistentes = JSON.parse(localStorage.getItem("turmas") || "[]");
    turmasExistentes.push(novaTurma);
    localStorage.setItem("turmas", JSON.stringify(turmasExistentes));

    setShowModal(false);
    setShowSavedModal(true);
  };

  const handleOk = () => {
    setShowSavedModal(false);
    navigate("/ClassAdm");
  };

  return (
    <div className="w-full h-screen md:h-full bg-black flex justify-center items-center p-5 md:p-0">
      <div className="w-full h-[430px] md:w-[700px] md:h-[380px] bg-[#191A1C] rounded-[10px] flex flex-col justify-between md:justify-center items-center mb-[80px] md:mb-0 ">
        <p className="text-white text-2xl md:text-3xl font-arimo mb-0 md:mb-3 mt-8 md:mt-0">
          Turma
        </p>

        <div className="w-full md:w-[600px] h-[180px] flex flex-col justify-center items-center p-5 md:p-0">
          {/* Nome da Turma */}
          <input
            type="text"
            placeholder="Nome da Turma"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="w-full h-[45px] rounded-[10px] text-lg font-arimo text-white placeholder-white bg-[#434343] focus:outline-none focus:ring-2 focus:ring-[#434343] p-4 m-2"
          />

          {/* Monitor (opcional) */}
          <input
            type="text"
            placeholder="Monitor (opcional)"
            value={monitor}
            onChange={(e) => setMonitor(e.target.value)}
            className="w-full h-[45px] rounded-[10px] text-lg font-arimo text-white placeholder-white bg-[#434343] focus:outline-none focus:ring-2 focus:ring-[#434343] p-4 m-2"
          />
        </div>

        <div className="w-full md:w-[600px] h-[60px] flex flex-row items-center justify-between px-5 md:px-0 mb-8 md:mb-0">
          <Link to="/ClassAdm">
            <div className="w-[120px] h-[55px] bg-white rounded-[15px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
              <p className="text-black text-xl font-arimo">Cancelar</p>
            </div>
          </Link>

          <div onClick={handleSendCode}>
            <div className="w-[120px] h-[55px] bg-[#BA1E22] rounded-[15px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer mx-auto md:mx-0">
              <p className="text-white text-xl font-arimo">Salvar</p>
            </div>
          </div>
        </div>

        {/* Modal de confirmação */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="w-[260px] h-[150px] md:w-[400px] md:h-[300px] bg-[#222529] rounded-[15px] flex flex-col items-center justify-center text-center space-y-5 md:space-y-15">
              <p className="text-lg font-arimo text-white md:text-2xl">
                Deseja mesmo criar a turma?
              </p>
              <div className="w-full h-auto flex flex-row justify-between px-3 md:px-10">
                <div onClick={handleCloseModal} className="w-full md:w-[100px] flex justify-center">
                  <div className="w-[90px] md:w-[120px] h-[45px] bg-white rounded-[10px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                    <p className="text-black text-lg md:text-xl font-arimo">Cancelar</p>
                  </div>
                </div>

                <div onClick={handleSave} className="w-full md:w-[100px] flex justify-center">
                  <div className="w-[90px] md:w-[120px] h-[45px] bg-[#BA1E22] rounded-[10px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                    <p className="text-white text-lg md:text-xl font-arimo">Criar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal de sucesso */}
        {showSavedModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="w-[250px] h-[150px] md:w-[400px] md:h-[300px] bg-[#222529] rounded-[15px] flex flex-col items-center justify-center text-center space-y-5">
              <p className="text-lg font-arimo text-white md:text-2xl">Turma Criada!</p>

              <div onClick={handleOk} className="w-full md:w-[100px] flex justify-center">
                <div className="w-[80px] h-[45px] bg-[#BA1E22] rounded-[15px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                  <p className="text-white text-lg md:text-xl font-arimo">Ok</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
