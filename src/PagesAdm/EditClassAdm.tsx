import { Link } from "react-router-dom";
import { useState } from "react";

export default function EditClassAdm() {
  {/* Para a tela de deletar */}
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showSavedModal, setShowSavedModal] = useState(false);

  const handleSendSaveCode = () => {
    setShowSaveModal(true);
  };  

  const handleCloseSaveModal = () => {
    setShowSaveModal(false);
  };

  const handleSave = () => {
    setShowSaveModal(false);
    setShowSavedModal(true);
  };

  {/* Para a tela de deletar */}
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeletedModal, setShowDeletedModal] = useState(false);

  const handleSendDeleteCode = () => {
    setShowDeleteModal(true);
  };  

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleDelete = () => {
    setShowDeleteModal(false);
    setShowDeletedModal(true);
  };

  return (
    <div className="w-full h-screen md:h-full bg-black flex justify-center items-center p-5 md:p-0">
      {/* Container principal */}
      <div className="w-full h-[430px] md:w-[730px] md:h-[400px] bg-[#191A1C] rounded-[10px] flex flex-col justify-between md:justify-center items-center mb-[80px] md:mb-0 ">

        {/* Texto */}
        <p className="text-white text-2xl md:text-3xl font-arimo mb-0 md:mb-3 mt-8 md:mt-0">Editar Turma</p>

        {/* Caixas para inserir os dados da turma */}
        <div className="w-full md:w-[600px] h-[180px] flex flex-col justify-center items-center p-5 md:p-0">

          {/* Input de Nome da turma */}
          <input
            type="text"
            placeholder="Novo nome da turma"
            className="w-full h-[45px] rounded-[10px] text-lg font-arimo text-white placeholder-white bg-[#434343] focus:outline-none focus:ring-2 focus:ring-[#434343] p-4 m-2"
          />
          {/* Input de Monitor */}
          <input
            type="text"
            placeholder="Novo monitor"
            className="w-full h-[45px] rounded-[10px] text-lg font-arimo text-white placeholder-white bg-[#434343] focus:outline-none focus:ring-2 focus:ring-[#434343] p-4 m-2"
          />
        </div>

         

        {/* Div com os botões de excluir, cancelar e salvar */}
        <div className="w-full md:w-[600px] h-[60px] flex flex-row items-center justify-between px-5 md:px-0 mb-8 md:mb-0">

          {/* Botão de Excluir */}
          <div onClick={handleSendDeleteCode}>
            <div className="w-[110px] md:w-[140px] h-[55px] bg-[#434343] rounded-[15px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
              <p className="text-white text-md md:text-xl font-arimo">Excluir Turma</p>
            </div>
          </div>  
          
          {/* Botão de cancelar */}
          <Link to="/ClassAdm">
            <div className="w-[90px] md:w-[120px] h-[55px] bg-white rounded-[15px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
              <p className="text-black text-md md:text-xl font-arimo">Cancelar</p>
            </div>
          </Link>

          {/* Botão de Salvar */}
          <div onClick={handleSendSaveCode}>
            <div className="w-[90px] md:w-[120px] h-[55px] bg-[#BA1E22] rounded-[15px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer mx-auto md:mx-0">
              <p className="text-white text-md md:text-xl font-arimo">Salvar</p>
            </div>
          </div>

        </div>

        {/* Telinha de confirmação de salvar */}
        {showSaveModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="w-[250px] h-[150px] md:w-[400px] md:h-[300px] bg-[#222529] rounded-[15px] flex flex-col items-center justify-center text-center space-y-8 md:space-y-15">

              <p className="text-lg font-arimo text-white md:text-2xl">Deseja mesmo alterar os dados?</p>
              <div className="w-full h-auto flex flex-row justify-between px-3 md:px-10">

              {/* Botão de cancelar */}
              <div onClick={handleCloseSaveModal} className="w-full md:w-[100px] flex justify-center">
                <div className="w-[90px] md:w-[120px] h-[45px] bg-white rounded-[10px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                  <p className="text-black text-lg md:text-xl font-arimo">
                    Cancelar
                  </p>
                </div>
              </div>

              {/* Botão de aceitar */}
              <div onClick={handleSave} className="w-full md:w-[100px] flex justify-center">
                <div className="w-[90px] md:w-[120px] h-[45px] bg-[#BA1E22] rounded-[10px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                  <p className="text-white text-lg md:text-xl font-arimo">
                    Alterar
                  </p>
                </div>
              </div>
            </div>

            </div>
          </div>
        )}
        
        {/* Telinha de confirmação */}
        {showSavedModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="w-[250px] h-[150px] md:w-[400px] md:h-[300px] bg-[#222529] rounded-[15px] flex flex-col items-center justify-center text-center space-y-5">

              <p className="text-lg font-arimo text-white md:text-2xl">Alterações salvas!</p>

              <Link to ="/ClassAdm" className="w-full md:w-[100px] flex justify-center">
                <div className= "w-[80px] h-[45px] bg-[#BA1E22] rounded-[15px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                  <p className="text-white text-lg md:text-xl font-arimo">
                    ok
                  </p>
                </div>
              </Link>

            </div>
          </div>
        )}

        {/* modal para quando apertar em deletar */}
        {showDeleteModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="w-[250px] h-[150px] md:w-[400px] md:h-[300px] bg-[#222529] rounded-[15px] flex flex-col items-center justify-center text-center space-y-8 md:space-y-15">

              <p className="text-lg font-arimo text-white md:text-2xl">Deseja mesmo excluir a turma?</p>
              <div className="w-full h-auto flex flex-row justify-between px-3 md:px-10">

              {/* Botão de cancelar */}
              <div onClick={handleCloseDeleteModal} className="w-full md:w-[100px] flex justify-center">
                <div className="w-[90px] md:w-[120px] h-[45px] bg-white rounded-[10px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                  <p className="text-black text-lg md:text-xl font-arimo">
                    Cancelar
                  </p>
                </div>
              </div>

              {/* Botão de aceitar */}
              <div onClick={handleDelete} className="w-full md:w-[100px] flex justify-center">
                <div className="w-[90px] md:w-[120px] h-[45px] bg-[#BA1E22] rounded-[10px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                  <p className="text-white text-lg md:text-xl font-arimo">
                    Excluir
                  </p>
                </div>
              </div>
            </div>

            </div>
          </div>
        )}
        
        {/* Telinha de confirmação */}
        {showDeletedModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="w-[250px] h-[150px] md:w-[400px] md:h-[300px] bg-[#222529] rounded-[15px] flex flex-col items-center justify-center text-center space-y-5">

              <p className="text-lg font-arimo text-white md:text-2xl">Turma Excluida!</p>

              <Link to ="/ClassAdm" className="w-full md:w-[100px] flex justify-center">
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