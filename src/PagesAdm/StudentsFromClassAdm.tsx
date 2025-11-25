import { BiSolidUserPlus, BiSolidUserMinus } from "react-icons/bi";
import { FaAngleDoubleUp } from "react-icons/fa";
import { LuFilter } from "react-icons/lu";
import { AiOutlineSearch, AiOutlineInfo, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function StudentsFromClassAdm() {
  const [alunos, setAlunos] = useState<any[]>([]);
  const [modoPromocao, setModoPromocao] = useState(false);
  const [modoAdicionar, setModoAdicionar] = useState(false);
  const [modoRemover, setModoRemover] = useState(false);
  const [showPromoverModal, setShowPromoverModal] = useState(false);
  const [showSavedPromoverModal, setShowSavedPromoverModal] = useState(false);
  const [showAdicionarModal, setShowAdicionarModal] = useState(false);
  const [showSavedAdicionarModal, setShowSavedAdicionarModal] = useState(false);
  const [showRemoverModal, setShowRemoverModal] = useState(false);
  const [showSavedRemoverModal, setShowSavedRemoverModal] = useState(false);

  const handleSendPromoverCode = () => {
    setShowPromoverModal(true);
  };

  const handleClosePromoverModal = () => {
    setShowPromoverModal(false);
  };

  const handlePromoverSave = () => {
    setShowPromoverModal(false);
    setShowSavedPromoverModal(true);
  };

  const handleClosePromoverSaved = () => {
    setShowSavedPromoverModal(false);
  };

  const handleSendAdicionarCode = () => {
    setShowAdicionarModal(true);
  };

  const handleCloseAdicionarModal = () => {
    setShowAdicionarModal(false);
  };

  const handleAdicionarSave = () => {
    setShowAdicionarModal(false);
    setShowSavedAdicionarModal(true);
  };

  const handleCloseAdicionarSaved = () => {
    setShowSavedAdicionarModal(false);
  };

  const handleSendRemoverCode = () => {
    setShowRemoverModal(true);
  };

  const handleCloseRemoverModal = () => {
    setShowRemoverModal(false);
  };

  const handleRemoverSave = () => {
    setShowRemoverModal(false);
    setShowSavedRemoverModal(true);
  };

  const handleCloseRemoverSaved = () => {
    setShowSavedRemoverModal(false);
  };

  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem("alunos") || "[]");
    setAlunos(dadosSalvos);
  }, []);

  const ativarModoPromocao = () => {
    setModoPromocao(!modoPromocao);
    setModoAdicionar(false);
    setModoRemover(false);
  };

  const ativarModoAdicionar = () => {
    setModoAdicionar(!modoAdicionar);
    setModoPromocao(false);
    setModoRemover(false);
  };

  const ativarModoRemover = () => {
    setModoRemover(!modoRemover);
    setModoPromocao(false);
    setModoAdicionar(false);
  };

  return (
    <div className="w-full h-full bg-black p-2 md:p-5 flex justify-center items-center overflow-x-hidden md:px-30">
      <div className="w-full h-[660px] md:h-full bg-[#191A1C] rounded-[10px] flex flex-col mb-[65px] md:mb-0">

        <div className="w-full h-[80px] flex flex-row justify-between items-center px-2 md:px-5">

          <div className="w-[200px] md:w-[300px] h-[50px] flex flex-row justify-center items-center space-x-2">
            <div className="relative w-[150px] md:w-[260px]">
              <input
                type="text"
                placeholder="Pesquisar..."
                className="w-full h-[40px] md:h-[50px] rounded-[10px] text-lg font-arimo text-white placeholder-white bg-[#434343] focus:outline-none focus:ring-2 focus:ring-[#434343] px-3"
              />
              <AiOutlineSearch className="absolute right-3 top-2 w-[25px] h-[25px] md:w-[35px] md:h-[35px] text-white transition-all hover:scale-102 cursor-pointer" />
            </div>

            <div className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center text-black">
              <LuFilter className="w-[20px] h-[20px] mt-1" />
            </div>
          </div>

          <div className="w-[230px] h-auto flex flex-row justify-center md:justify-between items-center space-x-2 md:space-x-0">

            <div
              onClick={ativarModoPromocao}
              className="hidden w-[110px] h-[45px] bg-[#A70000] md:flex flex-row justify-center items-center rounded-[10px] text-white transition-all hover:scale-102 cursor-pointer space-x-1"
            >
              <p className="text-white text-lg font-arimo">
                {modoPromocao ? "Cancelar" : "Promover"}
              </p>
            </div>

            <div
              onClick={ativarModoPromocao}
              className="md:hidden w-[45px] h-[45px] bg-[#A70000] flex flex-row justify-center items-center rounded-full text-white transition-all hover:scale-102 cursor-pointer"
            >
              {modoPromocao ? (
                <AiOutlineClose className="w-[28px] h-[28px]" />
              ) : (
                <FaAngleDoubleUp className="w-[30px] h-[30px]" />
              )}
            </div>

            <div
              onClick={ativarModoAdicionar}
              className="w-[45px] h-[45px] bg-[#A70000] flex flex-row justify-center items-center rounded-full text-white transition-all hover:scale-102 cursor-pointer"
            >
              {modoAdicionar ? (
                <AiOutlineClose className="w-[28px] h-[28px]" />
              ) : (
                <BiSolidUserPlus className="w-[30px] h-[30px]" />
              )}
            </div>

            <div
              onClick={ativarModoRemover}
              className="w-[45px] h-[45px] bg-[#A70000] flex flex-row justify-center items-center rounded-full text-white transition-all hover:scale-102 cursor-pointer"
            >
              {modoRemover ? (
                <AiOutlineClose className="w-[28px] h-[28px]" />
              ) : (
                <BiSolidUserMinus className="w-[30px] h-[30px]" />
              )}
            </div>

          </div>

        </div>

        <div className="w-full h-full flex flex-col p-3 overflow-y-auto px-5 space-y-1 scrollbar-hide">
          {alunos.length === 0 ? (
            <p className="text-white font-arimo text-lg">Nenhum aluno cadastrado ainda.</p>
          ) : (
            alunos.map((aluno, index) => (
              <div
                key={index}
                className="w-full h-[40px] flex justify-between items-center bg-[#434343] text-white font-arimo text-lg rounded-[5px] p-2"
              >
                <p className="text-white text-md mx-3 m-1">{aluno.nomeCompleto}</p>

                {modoPromocao ? (
                  <div
                    onClick={handleSendPromoverCode}
                    className="w-[100px] h-[30px] rounded-[5px] flex justify-center items-center bg-[#A70000] p-1 text-white transition-all hover:scale-105 cursor-pointer"
                  >
                    <p className="text-white text-lg font-arimo">Promover</p>
                  </div>
                ) : modoAdicionar ? (
                  <div
                    onClick={handleSendAdicionarCode}
                    className="w-[100px] h-[30px] rounded-[5px] flex justify-center items-center bg-[#A70000] p-1 text-white transition-all hover:scale-105 cursor-pointer"
                  >
                    <p className="text-white text-lg font-arimo">Adicionar</p>
                  </div>
                ) : modoRemover ? (
                  <div
                    onClick={handleSendRemoverCode}
                    className="w-[100px] h-[30px] rounded-[5px] flex justify-center items-center bg-[#A70000] p-1 text-white transition-all hover:scale-105 cursor-pointer"
                  >
                    <p className="text-white text-lg font-arimo">Remover</p>
                  </div>
                ) : (
                  <Link to="/SpecificStudentAdm">
                    <div className="w-[20px] h-[20px] rounded-full flex justify-center items-center bg-white p-1 text-black transition-all hover:scale-110 cursor-pointer">
                      <AiOutlineInfo />
                    </div>
                  </Link>
                )}
              </div>
            ))
          )}
        </div>

        {/* Modais de promover */}
        {showPromoverModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="w-[250px] h-[150px] md:w-[400px] md:h-[300px] bg-[#222529] rounded-[15px] flex flex-col items-center justify-center text-center space-y-8 md:space-y-15">

              <p className="text-lg font-arimo text-white md:text-2xl">Deseja mesmo promover o aluno?</p>

              <div className="w-full h-auto flex flex-row justify-between px-3 md:px-10">

                <div onClick={handleClosePromoverModal} className="w-full md:w-[100px] flex justify-center">
                  <div className="w-[90px] md:w-[120px] h-[45px] bg-white rounded-[10px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                    <p className="text-black text-lg md:text-xl font-arimo">Cancelar</p>
                  </div>
                </div>

                <div onClick={handlePromoverSave} className="w-full md:w-[100px] flex justify-center">
                  <div className="w-[90px] md:w-[120px] h-[45px] bg-[#BA1E22] rounded-[10px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                    <p className="text-white text-lg md:text-xl font-arimo">Promover</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {showSavedPromoverModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="w-[250px] h-[150px] md:w-[400px] md:h-[300px] bg-[#222529] rounded-[15px] flex flex-col items-center justify-center text-center space-y-5">

              <p className="text-lg font-arimo text-white md:text-2xl">Aluno promovido!</p>

              <div onClick={handleClosePromoverSaved} className="w-full md:w-[100px] flex justify-center">
                <div className="w-[80px] h-[45px] bg-[#BA1E22] rounded-[15px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                  <p className="text-white text-lg md:text-xl font-arimo">ok</p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Modais de Adicionar */}
        {showAdicionarModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="w-[250px] h-[150px] md:w-[400px] md:h-[300px] bg-[#222529] rounded-[15px] flex flex-col items-center justify-center text-center space-y-8 md:space-y-15">

              <p className="text-lg font-arimo text-white md:text-2xl">Deseja adicionar o aluno?</p>

              <div className="w-full h-auto flex flex-row justify-between px-3 md:px-10">

                <div onClick={handleCloseAdicionarModal} className="w-full md:w-[100px] flex justify-center">
                  <div className="w-[90px] md:w-[120px] h-[45px] bg-white rounded-[10px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                    <p className="text-black text-lg md:text-xl font-arimo">Cancelar</p>
                  </div>
                </div>

                <div onClick={handleAdicionarSave} className="w-full md:w-[100px] flex justify-center">
                  <div className="w-[90px] md:w-[120px] h-[45px] bg-[#BA1E22] rounded-[10px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                    <p className="text-white text-lg md:text-xl font-arimo">Adicionar</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {showSavedAdicionarModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="w-[250px] h-[150px] md:w-[400px] md:h-[300px] bg-[#222529] rounded-[15px] flex flex-col items-center justify-center text-center space-y-5">

              <p className="text-lg font-arimo text-white md:text-2xl">Aluno adicionado!</p>

              <div onClick={handleCloseAdicionarSaved} className="w-full md:w-[100px] flex justify-center">
                <div className="w-[80px] h-[45px] bg-[#BA1E22] rounded-[15px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                  <p className="text-white text-lg md:text-xl font-arimo">ok</p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Modais de remover */}
        {showRemoverModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="w-[250px] h-[150px] md:w-[400px] md:h-[300px] bg-[#222529] rounded-[15px] flex flex-col items-center justify-center text-center space-y-8 md:space-y-15">

              <p className="text-lg font-arimo text-white md:text-2xl">Deseja remover o aluno?</p>

              <div className="w-full h-auto flex flex-row justify-between px-3 md:px-10">

                <div onClick={handleCloseRemoverModal} className="w-full md:w-[100px] flex justify-center">
                  <div className="w-[90px] md:w-[120px] h-[45px] bg-white rounded-[10px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                    <p className="text-black text-lg md:text-xl font-arimo">Cancelar</p>
                  </div>
                </div>

                <div onClick={handleRemoverSave} className="w-full md:w-[100px] flex justify-center">
                  <div className="w-[90px] md:w-[120px] h-[45px] bg-[#BA1E22] rounded-[10px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                    <p className="text-white text-lg md:text-xl font-arimo">Remover</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {showSavedRemoverModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="w-[250px] h-[150px] md:w-[400px] md:h-[300px] bg-[#222529] rounded-[15px] flex flex-col items-center justify-center text-center space-y-5">

              <p className="text-lg font-arimo text-white md:text-2xl">Aluno removido!</p>

              <div onClick={handleCloseRemoverSaved} className="w-full md:w-[100px] flex justify-center">
                <div className="w-[80px] h-[45px] bg-[#BA1E22] rounded-[15px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                  <p className="text-white text-lg md:text-xl font-arimo">ok</p>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
