import { Link } from "react-router-dom";
import { useState } from "react";

export default function CreateClassAdm() {
  const [showModal, setShowModal] = useState(false);

  const handleSendCode = () => {
    setShowModal(true);
  };  
  return (
    <div className="w-full h-screen md:h-full bg-black flex justify-center items-center p-5 md:p-0">
      {/* Container principal */}
      <div className="w-full h-[430px] md:w-[700px] md:h-[380px] bg-[#191A1C] rounded-[10px] flex flex-col justify-between md:justify-center items-center mb-[80px] md:mb-0 ">

        {/* Texto */}
        <p className="text-white text-2xl md:text-3xl font-arimo mb-0 md:mb-3 mt-8 md:mt-0">Turma</p>

        {/* Caixas para inserir os dados da turma */}
        <div className="w-full md:w-[600px] h-[180px] flex flex-col justify-center items-center p-5 md:p-0">

          {/* Input de Nome da turma */}
          <input
            type="text"
            placeholder="Nome da Turma"
            className="w-full h-[45px] rounded-[10px] text-lg font-arimo text-white bg-[#222529] focus:outline-none focus:ring-2 focus:ring-[#222529] p-4 m-2"
          />
          {/* Input de Monitor */}
          <input
            type="text"
            placeholder="Monitor"
            className="w-full h-[45px] rounded-[10px] text-lg font-arimo text-white bg-[#222529] focus:outline-none focus:ring-2 focus:ring-[#222529] p-4 m-2"
          />
        </div>

        {/* Div com os botões de cancelar e salvar */}
        <div className="w-full md:w-[600px] h-[60px] flex flex-row items-center justify-between px-5 md:px-0 mb-8 md:mb-0">
          
          {/* Botão de cancelar */}
          <Link to="/ClassAdm">
            <div className="w-[120px] h-[55px] bg-white rounded-[15px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
              <p className="text-black text-xl font-arimo">Cancelar</p>
            </div>
          </Link>

          {/* Botão de Salvar */}
          <div onClick={handleSendCode}>
            <div className="w-[120px] h-[55px] bg-[#BA1E22] rounded-[15px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer mx-auto md:mx-0">
              <p className="text-white text-xl font-arimo">Salvar</p>
            </div>
          </div>

        </div>
        
        {/* Telinha de confirmação */}
        {showModal && (
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
      </div>
    </div>
  );
}