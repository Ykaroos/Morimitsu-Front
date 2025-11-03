import { useState } from "react";
import { BiPencil } from "react-icons/bi";
import {BiRightArrowAlt} from "react-icons/bi";
{/* Tenho que configurar o async */}
export default function ControlGraduationAdm() {

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

  const handleCloseSavedModal = () => {
    setShowSavedModal(false);
  };

  return (
    <div className="w-full h-screen bg-black px-5 flex justify-center mb-[70px] md:mb-0">
      {/* Div scrollável */}
      <div className="w-full h-full block md:mx-15  md:px-3 overflow-y-auto scrollbar-hide space-y-3 py-10">

        {/* Div turma kids e baby */}
        <div className="w-full h-[70px] bg-[#191A1C] rounded-[10px] flex justify-between items-center p-2 md:p-4">
          {/* Div com texto e indicador  */}
          <div className="flex items-center justify-center space-x-5">
            <p className="text-white text-lg md:text-2xl font-arimo">Turma Kids e Baby:</p>
            <div className="bg-[#222529] w-[80px] md:w-[100px] h-[40px] rounded-[10px] flex items-center text-xl md:text-2xl text-white justify-center">N°</div>
          </div>
          {/* Div com botão para ajuste  */}
          <div onClick={handleSendCode} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]  bg-[#BA1E22]  rounded-full transition-all hover:scale-105 cursor-pointer">
            <BiPencil className="w-full h-full p-2 md:p-3 text-white"/>
          </div>
        </div>


        {/* Div turma mista */}
        <div className="w-full h-[70px] bg-[#191A1C] rounded-[10px] flex justify-between items-center p-2 md:p-4">
          {/* Div com texto e indicador  */}
          <div className="flex items-center justify-center space-x-5">
            <p className="text-white text-lg md:text-2xl font-arimo">Turmas Mista:</p>
            <div className="bg-[#222529] w-[80px] md:w-[100px] h-[40px] rounded-[10px] flex items-center text-xl md:text-2xl text-white justify-center">N°</div>
          </div>
          {/* Div com botão para ajuste  */}
          <div onClick={handleSendCode} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#BA1E22] rounded-full transition-all hover:scale-105 cursor-pointer">
            <BiPencil className="w-full h-full p-2 md:p-3 text-white"/>
          </div>
        </div>


        {/* Div branco para azul */}
        <div className="w-full h-[180px] bg-[#191A1C] rounded-[10px] flex justify-end md:justify-between items-center p-2 md:p-4 md:space-x-8">
          {/* Div com as faixas e numero */}
          <div className="w-[300px] h-[150px]  md:w-[700px] md:h-[250px] flex justify-center items-center p-2 ml-15">

            {/* Primeira faixa */}
            <div className="w-[80px] md:w-[200px] h-full flex flex-col justify-center items-center">
              <div className="w-[70px] h-[50px] md:w-[150px] md:h-[80px] bg-white rounded-[10px]"></div>
              <p className="text-lg md:text-2xl text-white mt-1 font-arimo">Branco</p>
            </div>

            {/* Setas e indicador */}
            <div className="w-[180px] md:w-[300px] h-full flex justify-center items-center space-x-3 md:space-x-8">
              <BiRightArrowAlt className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] text-white"/>
              <div className="bg-[#222529] w-[70px] h-[40px] md:w-[100px] md:h-[50px] rounded-[10px] flex items-center text-lg md:text-2xl text-white justify-center">N°</div>
              <BiRightArrowAlt className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] text-white"/>
            </div>

            {/* Segunda faixa */}
            <div className="w-[80px] md:w-[200px] h-full flex flex-col justify-center items-center">
              <div className="w-[70px] h-[50px] md:w-[150px] md:h-[80px] bg-[#0000FF] rounded-[10px]"></div>
              <p className="text-lg md:text-2xl text-white mt-1 font-arimo">Azul</p>
            </div>

          </div>

          {/* Div com botão para ajuste  */}
          <div className="w-auto h-full flex justify-center">
            <div onClick={handleSendCode} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#BA1E22] rounded-full transition-all hover:scale-105 cursor-pointer">
              <BiPencil className="w-full h-full p-2 md:p-3 text-white"/>
            </div>
          </div>
        </div>


        {/* Div azul para roxo*/}
        <div className="w-full h-[180px] bg-[#191A1C] rounded-[10px] flex justify-end md:justify-between items-center p-2 md:p-4 md:space-x-8">
          {/* Div com as faixas e numero */}
          <div className="w-[300px] h-[150px]  md:w-[700px] md:h-[250px] flex justify-center items-center p-2 ml-15">

            {/* Primeira faixa */}
            <div className="w-[80px] md:w-[200px] h-full flex flex-col justify-center items-center">
              <div className="w-[70px] h-[50px] md:w-[150px] md:h-[80px] bg-[#0000FF] rounded-[10px]"></div>
              <p className="text-lg md:text-2xl text-white mt-1 font-arimo">Azul</p>
            </div>

            {/* Setas e indicador */}
            <div className="w-[180px] md:w-[300px] h-full flex justify-center items-center space-x-3 md:space-x-8">
              <BiRightArrowAlt className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] text-white"/>
              <div className="bg-[#222529] w-[70px] h-[40px] md:w-[100px] md:h-[50px] rounded-[10px] flex items-center text-lg md:text-2xl text-white justify-center">N°</div>
              <BiRightArrowAlt className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] text-white"/>
            </div>

            {/* Segunda faixa */}
            <div className="w-[80px] md:w-[200px] h-full flex flex-col justify-center items-center">
              <div className="w-[70px] h-[50px] md:w-[150px] md:h-[80px] bg-[#800080] rounded-[10px]"></div>
              <p className="text-lg md:text-2xl text-white mt-1 font-arimo">Roxo</p>
            </div>

          </div>

          {/* Div com botão para ajuste  */}
          <div className="w-auto h-full flex justify-center">
            <div onClick={handleSendCode} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#BA1E22] rounded-full transition-all hover:scale-105 cursor-pointer">
              <BiPencil className="w-full h-full p-2 md:p-3 text-white"/>
            </div>
          </div>
        </div>

        {/* Div roxo para marrom*/}
        <div className="w-full h-[180px] bg-[#191A1C] rounded-[10px] flex justify-end md:justify-between items-center p-2 md:p-4 md:space-x-8">
          {/* Div com as faixas e numero */}
          <div className="w-[300px] h-[150px]  md:w-[700px] md:h-[250px] flex justify-center items-center p-2 ml-15">

            {/* Primeira faixa */}
            <div className="w-[80px] md:w-[200px] h-full flex flex-col justify-center items-center">
              <div className="w-[70px] h-[50px] md:w-[150px] md:h-[80px] bg-[#800080] rounded-[10px]"></div>
              <p className="text-lg md:text-2xl text-white mt-1 font-arimo">Roxo</p>
            </div>

            {/* Setas e indicador */}
            <div className="w-[180px] md:w-[300px] h-full flex justify-center items-center space-x-3 md:space-x-8">
              <BiRightArrowAlt className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] text-white"/>
              <div className="bg-[#222529] w-[70px] h-[40px] md:w-[100px] md:h-[50px] rounded-[10px] flex items-center text-lg md:text-2xl text-white justify-center">N°</div>
              <BiRightArrowAlt className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] text-white"/>
            </div>

            {/* Segunda faixa */}
            <div className="w-[80px] md:w-[200px] h-full flex flex-col justify-center items-center">
              <div className="w-[70px] h-[50px] md:w-[150px] md:h-[80px] bg-[#63300C] rounded-[10px]"></div>
              <p className="text-lg md:text-2xl text-white mt-1 font-arimo">Marrom</p>
            </div>

          </div>

          {/* Div com botão para ajuste  */}
          <div className="w-auto h-full flex justify-center">
            <div onClick={handleSendCode} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#BA1E22] rounded-full transition-all hover:scale-105 cursor-pointer">
              <BiPencil className="w-full h-full p-2 md:p-3 text-white"/>
            </div>
          </div>
        </div>

        {/* Div marrom para preto*/}
        <div className="w-full h-[180px] bg-[#191A1C] rounded-[10px] flex justify-end md:justify-between items-center p-2 md:p-4 md:space-x-8">
          {/* Div com as faixas e numero */}
          <div className="w-[300px] h-[150px]  md:w-[700px] md:h-[250px] flex justify-center items-center p-2 ml-15">

            {/* Primeira faixa */}
            <div className="w-[80px] md:w-[200px] h-full flex flex-col justify-center items-center">
              <div className="w-[70px] h-[50px] md:w-[150px] md:h-[80px] bg-[#63300C] rounded-[10px]"></div>
              <p className="text-lg md:text-2xl text-white mt-1 font-arimo">Marrom</p>
            </div>

            {/* Setas e indicador */}
            <div className="w-[180px] md:w-[300px] h-full flex justify-center items-center space-x-3 md:space-x-8">
              <BiRightArrowAlt className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] text-white"/>
              <div className="bg-[#222529] w-[70px] h-[40px] md:w-[100px] md:h-[50px] rounded-[10px] flex items-center text-lg md:text-2xl text-white justify-center">N°</div>
              <BiRightArrowAlt className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] text-white"/>
            </div>

            {/* Segunda faixa */}
            <div className="w-[80px] md:w-[200px] h-full flex flex-col justify-center items-center">
              <div className="w-[70px] h-[50px] md:w-[150px] md:h-[80px] bg-black rounded-[10px]"></div>
              <p className="text-lg md:text-2xl text-white mt-1 font-arimo">Preto</p>
            </div>

          </div>

          {/* Div com botão para ajuste  */}
          <div className="w-auto h-full flex justify-center">
            <div onClick={handleSendCode} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#BA1E22] rounded-full transition-all hover:scale-105 cursor-pointer">
              <BiPencil className="w-full h-full p-2 md:p-3 text-white"/>
            </div>
          </div>
        </div>
        

      </div>

      {/* Modal único para todos os botões */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="w-[300px] h-[200px] md:w-[400px] md:h-[300px] bg-[#191A1C] rounded-[15px] flex flex-col items-center justify-center text-center space-y-5 md:space-y-7">

            <p className="text-2xl font-arimo text-white md:text-3xl">Nova Frequência</p>

            {/* Campo para adicionar a nova frequencia */}
            <input 
            type="Text" 
            className="bg-[#222529] w-[90px] md:w-[130px] h-[50px] md:h-[70px] rounded-[10px] font-arimo text-4xl md:text-5xl text-center text-white focus:outline-none focus:ring-2 focus:ring-[#222529]"
            />

            <div className="w-full h-auto flex flex-row justify-between px-3 md:px-10">
              {/* Botão de cancelar */}
              <div onClick={handleCloseModal} className="w-full md:w-[100px] flex justify-center">
                <div className="w-[90px] md:w-[120px] h-[45px] bg-white rounded-[10px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                  <p className="text-black text-lg md:text-xl font-arimo">
                    Cancelar
                  </p>
                </div>
              </div>

              {/* Botão de salvar */}
              <div onClick={handleSave} className="w-full md:w-[100px] flex justify-center">
                <div className="w-[90px] md:w-[120px] h-[45px] bg-[#BA1E22] rounded-[10px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                  <p className="text-white text-lg md:text-xl font-arimo">
                    Salvar
                  </p>
                </div>
              </div>
            </div>
             
          </div>
        </div>
      )}

      {/* modal para quando apertar em salvar */}
      {showSavedModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="w-[250px] h-[150px] md:w-[400px] md:h-[300px] bg-[#222529] rounded-[15px] flex flex-col items-center justify-center text-center space-y-5">

            <p className="text-lg font-arimo text-white md:text-2xl">Alterações salvas!</p>

            <div onClick={handleCloseSavedModal} className="w-full md:w-[100px] flex justify-center">
              <div className="w-[80px] h-[45px] bg-[#BA1E22] rounded-[15px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                <p className="text-white text-lg md:text-xl font-arimo">ok</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}