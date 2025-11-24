import { Link, useNavigate } from "react-router-dom";
import { BiPencil } from "react-icons/bi";
import FaixaAluno from "../components/Faixas"; 

export default function SpecificStudentMonitor() {

  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-black px-5 flex justify-center mb-[65px] md:mb-0">
      {/* Div scrollável */}
      <div className="w-full h-full block md:mx-15  md:px-3 overflow-y-auto scrollbar-hide space-y-3 py-5">

        {/* Primeira caixa de infos */}
        <div className="w-full h-auto bg-[#191A1C] rounded-[10px] flex flex-col items-center p-2 md:p-4">

          {/* Nome e botão */}
          <div className="w-full h-auto flex flex-row justify-between items-center">
            <p className="text-white text-2xl font-arimo">Nome do Aluno</p>
            <Link to="/EditStudentsMonitor">
              <div className="w-auto h-full flex justify-center">
                <div className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] bg-[#BA1E22] rounded-full transition-all hover:scale-105 cursor-pointer">
                  <BiPencil className="w-full h-full p-2 md:p-3 text-white"/>
                </div>
              </div>
            </Link>
            
          </div>

          {/* Div informações do aluno */}
          <div className="w-full h-auto flex flex-col md:flex-row">
            {/* Informações pessoais */}
            <div className="w-full md:w-1/2 h-[200px] flex flex-col justify-center items-center px-3 space-y-2">

              <div className="w-full h-[35px] bg-[#434343] rounded-[10px] text-white flex justify-start items-center px-2">
                <p className="text-white text-md font-arimo" >Turma:</p>
              </div>

              <div className="w-full h-[35px] bg-[#434343] rounded-[10px] text-white flex justify-start items-center px-2">
                <p className="text-white text-md font-arimo" >CPF:</p>
              </div>

              <div className="w-full h-[35px] flex flex-row space-x-2">
                <div className="w-1/2 h-full bg-[#434343] rounded-[10px] text-white flex justify-start items-center px-2">
                  <p className="text-white text-md font-arimo" >Idade:</p>
                </div>

                <div className="w-1/2 h-full bg-[#434343] rounded-[10px] text-white flex justify-start items-center px-2">
                  <p className="text-white text-md font-arimo" >Gênero:</p>
                </div>
              </div>

              <div className="w-full h-[35px] bg-[#434343] rounded-[10px] text-white flex justify-start items-center px-2">
                <p className="text-white text-md font-arimo" >Data de Nascimento:</p>
              </div>

            </div>
            {/* Informações das faixas */}
            <div className="w-full md:w-1/2 h-[165px] bg-[#434343] flex flex-row justify-center items-center rounded-[10px] mt-[17px]">
              {/*representação da faixa*/}
              <div className="w-1/2 h-full flex justify-center items-center px-4 md:px-8">
                <FaixaAluno faixa="verde-preto" />
              </div> 
              {/*textos da faixa*/}
              <div className="w-1/2 h-full flex flex-col justify-center items-center space-y-4 px-4">
                <div className="w-full h-[45px] bg-[#434343] flex justify-center items-center rounded-[10px] border-3 border-black">
                  <p className="text-white text-lg font-arimo">Cor da Faixa</p>
                </div>
                <div className="w-full h-[45px] bg-[#434343] flex justify-center items-center rounded-[10px] border-3 border-black">
                  <p className="text-white text-lg font-arimo">Grau da Faixa</p>
                </div>
              </div>
            </div>
          </div>


        </div>

        <div className="w-full h-auto bg-[#191A1C] rounded-[10px] flex flex-col items-center p-2 md:p-4 space-y-3">

          <p className="text-white text-2xl font-arimo" >Frequência</p>


          <p className="text-white text-xl font-arimo" >Frequencia por fração</p>

          {/* Div com os inputs de telefone (1 e 2) */}
          <div className="w-full h-[50px] bg-[#434343] flex flex-row justify-center items-center space-x-5 mx-10">
            contador percentual
          </div>
        </div>

        <div className="w-full h-auto bg-[#191A1C] rounded-[10px] flex flex-col items-center p-2 md:p-4 space-y-3">

          <p className="text-white text-2xl font-arimo" >Contatos</p>

          {/* Input de Email */}
          <div className="w-full h-[35px] rounded-[5px] text-md font-arimo text-white bg-[#434343] px-3 flex justify-start items-center" >
            <p className="text-white text-md font-arimo" >Email:</p>
          </div>

          {/* Div com os inputs de telefone (1 e 2) */}
          <div className="w-full h-auto flex flex-row justify-center items-center space-x-5">

            {/* Telefone 1 */}
            <div className="w-1/2 h-[35px] rounded-[5px] text-md font-arimo text-white bg-[#434343] flex justify-start items-center px-3">
              <p className="text-white text-md font-arimo" >Telefone 1:</p>
            </div>

            {/* Telefone 2 */}
            <div className="w-1/2 h-[35px] rounded-[5px] text-md font-arimo text-white bg-[#434343] flex justify-start items-center px-3 ">
              <p className="text-white text-md font-arimo" >Telefone 2:</p>
            </div>
          </div>
        </div>

        <div className="w-full h-auto bg-[#191A1C] rounded-[10px] flex flex-col items-center p-2 md:p-4 space-y-3">

          <p className="text-white text-2xl font-arimo" >Contatos (Responsável) </p>

          {/* Input de Email */}
          <div className="w-full h-[35px] rounded-[5px] text-md font-arimo text-white bg-[#434343] px-3 flex justify-start items-center" >
            <p className="text-white text-md font-arimo" >Email:</p>
          </div>

          {/* Div com os inputs de telefone (1 e 2) */}
          <div className="w-full h-auto flex flex-row justify-center items-center space-x-5">

            {/* Telefone 1 */}
            <div className="w-1/2 h-[35px] rounded-[5px] text-md font-arimo text-white bg-[#434343] flex justify-start items-center px-3">
              <p className="text-white text-md font-arimo" >Telefone 1:</p>
            </div>

            {/* Telefone 2 */}
            <div className="w-1/2 h-[35px] rounded-[5px] text-md font-arimo text-white bg-[#434343] flex justify-start items-center px-3 ">
              <p className="text-white text-md font-arimo" >Telefone 2:</p>
            </div>
          </div>
        </div>

        <div className="w-full h-auto flex flex-row justify-center items-center">
          {/* Botão de Cancelar */}

          <div onClick={() =>navigate(-1)}>
            <div className="w-[120px] h-[55px] bg-white rounded-[10px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer mx-auto md:mx-0">
              <p className="text-black text-xl font-arimo">Cancelar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}