import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EditStudentsMonitor() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showSavedModal, setShowSavedModal] = useState(false);

  const handleSendCode = () => {
    setShowModal(true);
  };  

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    setShowModal(false);
    setShowSavedModal(true);
  };

  return (
    <div className="w-full h-screen md:h-full bg-black flex flex-col justify-center items-center mb-[65px] md:mb-0">
      <div className="w-full h-full block overflow-y-auto scrollbar-hide p-5 space-y-3">
        <div className="w-full h-auto bg-[#191A1C] rounded-[10px] flex flex-col justify-center items-center  space-y-4 p-5">
          <p className="text-xl text-white font-arimo">Dados Pessoais</p>
          {/* Input de Nome Completo */}
          <input
            type="text"
            placeholder="Nome Completo"
            className="w-full h-[35px] rounded-[5px] text-md font-arimo text-white placeholder-white bg-[#434343] focus:outline-none focus:ring-2 focus:ring-[#434343] px-3"
          />

          {/* Input de Nome Social */}
          <input
            type="text"
            placeholder="Nome Social*"
            className="w-full h-[35px] rounded-[5px] text-md font-arimo text-white  placeholder-white bg-[#434343] focus:outline-none focus:ring-2 focus:ring-[#434343] px-3"
          />

          {/* Div com os imputs de data de nascimento e Sexo */}
          <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center md:space-x-5">
            {/* Div com o input de data */}
            <div className="w-full md:w-1/2 h-auto ">
              <p className="text-md text-white font-arimo m-1">Data de Nascimento:</p>
              <input
                type="date"
                className="w-full h-[35px] rounded-[5px] text-md font-arimo text-white bg-[#434343] focus:outline-none focus:ring-2 focus:ring-[#434343] px-3 [color-scheme:dark]"
              />
            </div>
            
            {/* Div com os inputs para selecionar o gênero */}
            <div className="w-full md:w-1/2 h-auto ">
              <p className="text-md text-white font-arimo m-1">Sexo:</p>
              <div className="w-full h-auto flex flex-row justify-between items-center rounded-[5px] bg-[#434343]  md:px-20">

                {/* Opção Masculino */}
                <div className="w-1/2 h-[35px] flex justify-center items-center">
                  <input
                    type="radio"
                    name="gender" 
                    value="masculino"
                    className="w-[20px] h-[20px] text-md font-arimo text-white  cursor-pointer px-3"
                  />
                  <p className="text-md text-white font-arimo ml-2">Masculino</p>
                </div>

                {/* Opção Feminino */}
                <div className="w-1/2 h-auto flex justify-center items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="feminino"
                    className="w-[20px] h-[20px] text-md font-arimo text-white cursor-pointer px-3"
                  />
                  <p className="text-md text-white font-arimo ml-2">Feminino</p>
                </div>

              </div>
            </div>          
          </div>

          {/* Input de CPF */}
          <input
            type="text"
            placeholder="CPF"
            className="w-full h-[35px] rounded-[5px] text-md font-arimo text-white  placeholder-white bg-[#434343] focus:outline-none focus:ring-2 focus:ring-[#434343] px-3"
          />

          <p className="text-xl text-white font-arimo">Contato (Pessoal)</p>

          {/* Input de Email */}
          <input
            type="text"
            placeholder="Email"
            className="w-full h-[35px] rounded-[5px] text-md font-arimo text-white  placeholder-white bg-[#434343] focus:outline-none focus:ring-2 focus:ring-[#434343] px-3"
          />
          {/* Div com os inputs de telefone (1 e 2) */}
          <div className="w-full h-auto flex flex-row justify-center items-center space-x-5">
            {/* Telefone 1 */}
            <input
              type="text"
              placeholder="Telefone 1"
              className="w-1/2 h-[35px] rounded-[5px] text-md font-arimo text-white  placeholder-white bg-[#434343] focus:outline-none focus:ring-2 focus:ring-[#434343] px-3"
            />
            {/* Telefone 2 */}
            <input
              type="text"
              placeholder="Telefone 2"
              className="w-1/2 h-[35px] rounded-[5px] text-md font-arimo text-white  placeholder-white bg-[#434343] focus:outline-none focus:ring-2 focus:ring-[#434343] px-3"
            />
          </div>

          <p className="text-xl text-white font-arimo">Contato (Responsável)</p>

          {/* Input de Email */}
          <input
            type="text"
            placeholder="Email"
            className="w-full h-[35px] rounded-[5px] text-md font-arimo text-white  placeholder-white bg-[#434343] focus:outline-none focus:ring-2 focus:ring-[#434343] px-3"
          />
          {/* Div com os inputs de telefone (1 e 2) */}
          <div className="w-full h-auto flex flex-row justify-center items-center space-x-5">
            {/* Telefone 1 */}
            <input
              type="text"
              placeholder="Telefone 1"
              className="w-1/2 h-[35px] rounded-[5px] text-md font-arimo text-white  placeholder-white bg-[#434343] focus:outline-none focus:ring-2 focus:ring-[#434343] px-3"
            />
            {/* Telefone 2 */}
            <input
              type="text"
              placeholder="Telefone 2"
              className="w-1/2 h-[35px] rounded-[5px] text-md font-arimo text-white  placeholder-white bg-[#434343] focus:outline-none focus:ring-2 focus:ring-[#434343] px-3"
            />
          </div>

        </div>

        <div className="w-full h-auto flex flex-row justify-center items-center space-x-30">
          {/* Botão de Cancelar */}
          <div onClick={() =>navigate(-2)}>
            <div className="w-[120px] h-[55px] bg-white rounded-[10px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer mx-auto md:mx-0">
              <p className="text-black text-xl font-arimo">Cancelar</p>
            </div>
          </div>

          {/* Botão de Editar Aluno */}            
          <div onClick={handleSendCode}>
            <div className="w-[130px] h-[55px] bg-[#BA1E22] rounded-[10px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer mx-auto md:mx-0">
              <p className="text-white text-xl font-arimo">Editar Aluno</p>
            </div>
          </div>
        </div>

        {/* Telinha de confirmação */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="w-[250px] h-[150px] md:w-[400px] md:h-[300px] bg-[#222529] rounded-[15px] flex flex-col items-center justify-center text-center space-y-5 md:space-y-15">

              <p className="text-lg font-arimo text-white md:text-2xl">Deseja mesmo editar o aluno?</p>
              <div className="w-full h-auto flex flex-row justify-between px-3 md:px-10">

              {/* Botão de cancelar */}
              <div onClick={handleCloseModal} className="w-full md:w-[100px] flex justify-center">
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
                    Editar
                  </p>
                </div>
              </div>
            </div>

            </div>
          </div>
        )}

        {/* modal para quando apertar em alterar */}
        {showSavedModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="w-[250px] h-[150px] md:w-[400px] md:h-[300px] bg-[#222529] rounded-[15px] flex flex-col items-center justify-center text-center space-y-5">

              <p className="text-lg font-arimo text-white md:text-2xl">Aluno Editado!</p>

              <div onClick={() =>navigate(-2)} className="w-full md:w-[100px] flex justify-center">
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
}