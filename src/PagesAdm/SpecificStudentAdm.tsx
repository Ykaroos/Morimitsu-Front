import { Link } from "react-router-dom";
import { BiPencil } from "react-icons/bi";
{/* Tenho que configurar o async */}
export default function SpecificStudentAdm() {

  return (
    <div className="w-full h-screen bg-black px-5 flex justify-center mb-[70px] md:mb-0">
      {/* Div scrollável */}
      <div className="w-full h-full block md:mx-15  md:px-3 overflow-y-auto scrollbar-hide space-y-3 py-10">

        {/* Div branco para azul */}
        <div className="w-full h-auto bg-[#191A1C] rounded-[10px] flex flex-col justify-end md:justify-between items-center p-2 md:p-4">
          <div className="w-full h-auto flex flex-row justify-between items-center">
            <p className="text-white text-2xl font-arimo">Nome do Aluno</p>
            <Link to="/EditStudentsAdm">
              <div className="w-auto h-full flex justify-center">
                <div className="w-[40px] h-[40px] md:w-[55px] md:h-[55px] bg-[#BA1E22] rounded-full transition-all hover:scale-105 cursor-pointer">
                  <BiPencil className="w-full h-full p-2 md:p-3 text-white"/>
                </div>
              </div>
            </Link>
            
          </div>

          {/* Div informações do aluno */}
          <div className="w-full h-auto">
            {/* Informações pessoais */}
            <div className="w-1/2 h-auto py-5 space-y-2">
              <div className="w-full h-[35px] bg-[#434343] rounded-[10px] text-white flex justify-start items-center px-2">Turma:</div>
              <div className="w-full h-[35px] bg-[#434343] rounded-[10px] text-white flex justify-start items-center px-2">CPF:</div>
              <div className="w-full h-[35px] flex flex-row space-x-2">
                <div className="w-1/2 h-full bg-[#434343] rounded-[10px] text-white flex justify-start items-center px-2">Idade:</div>
                <div className="w-1/2 h-full bg-[#434343] rounded-[10px] text-white flex justify-start items-center px-2">Gênero:</div>
              </div>
              <div className="w-full h-[35px] bg-[#434343] rounded-[10px] text-white flex justify-start items-center px-2">Data de Nascimento:</div>

            </div>
            {/* Informações das faixas */}
            <div className="w-1/2 h-auto bg-blue-900 px-5">
              <div className="w-full h-auto bg-[#434343]">
                <div></div> 
                <div></div>
              </div>
            </div>
          </div>


        </div>

        

      </div>
    </div>
  );
}