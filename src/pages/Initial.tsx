import Logo from "../assets/Logo.png";
import Background from "../assets/Background.png";
import { Link } from "react-router-dom";

export default function Initial() {
  return (
    <div className="w-screen h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${Background})` }}>
      {/* Container principal */}
      <div className="flex flex-col md:flex-row bg-black/80 w-screen h-screen">
        
        {/* Logo */}
        <div className="w-screen md:w-1/2 h-1/2 md:h-screen flex items-center justify-center md:justify-end ">
          <img
            className="w-2/3 max-w-[300px] md:max-w-[600px] h-auto object-contain"
            src={Logo}
            alt="Logo"
          />
        </div>

        {/* Texto e botão de entrar */}
        <div className="w-full md:w-1/2 h-1/5 md:h-full flex items-center justify-center md:justify-start md:ml-10">
          <div className="text-center md:text-center">
            <p className="text-white text-3xl md:text-5xl font-arimo">
              Bem-vindo à
            </p>
            <p className="font-bold text-4xl md:text-6xl font-arimo text-[#BA1E22]">
              MORIMITSU
            </p>

            <Link to="/Login">
                <button className="w-[120px] md:w-[140px] h-[50px] md:h-[60px] bg-[#BA1E22] mt-8 rounded-[15px] transition-all hover:scale-105 cursor-pointer"> 
                    <p className="text-white text-lg md:text-xl font-arimo">Entrar</p>
                </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}