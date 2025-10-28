import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ClassAdm() {
  return (
    <div className="w-full h-full bg-black flex flex-col justify-center items-center ">
      {/* Div Principal */}
      <div className="w-full h-full flex flex-col justify-center items-center p-5 mb-[70px] md:mb-0">

        {/* Caixa com as turmas individuais */}
        <div className="w-full h-[300px] md:h-1/2 bg-[#191A1C] rounded-[10px] flex flex-col m-2">
          <div className="w-full h-[65px] flex items-center justify-start px-5">
            <p className="text-3xl text-white font-arimo">Minhas Turmas</p>
          </div>
          <div className="bg-green-500 w-full h-[220px]"></div>
        </div>

        {/* Caixa com as turmas gerais */}
        <div className="w-full h-[300px] md:h-1/2 bg-[#191A1C] rounded-[10px] flex flex-col m-2">
          <div className="w-full h-[75px] flex items-center justify-between px-5">
            <p className="text-3xl text-white font-arimo">Turmas</p>
            {/* Botão para adicionar turma */}
            <Link to="/CreateClassAdm">
              <div className="bg-[#A70000] w-[60px] h-[60px] rounded-full flex justify-center items-center transition-all hover:scale-105 cursor-pointer">
                <AiOutlinePlus className="w-[45px] h-[45px]"/>
              </div>
            </Link>
          </div>
          <div className="bg-green-500 w-full h-[210px]"></div>
        </div>
      </div>
      

    </div>
  );
}