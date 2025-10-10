import Logo from "../assets/Logo.png";
import Background from "../assets/Background.png";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Login() {
  return (
   <div className="w-screen h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center" 
   style={{ backgroundImage: `url(${Background})` }}>
      <div className="bg-black/80 w-screen h-screen flex items-center justify-center p-5">
        {/* Container principal */}
        <div className="flex flex-col md:flex-row bg-[#191A1C] rounded-[15px] items-center justify-center w-[1100px] h-[450px] md:h-[580px] p-5 md:p-0">

         {/* Logo */}
         <div className="w-[200px] md:w-[350px] flex justify-center md:justify-end mb-8 md:mb-0 md:mr-5">
            <img
               className="w-2/3 md:w-full max-w-[200px] md:max-w-[350px] h-auto object-contain"
               src={Logo}
               alt="Logo"
            />
         </div>

         {/* Formulário */}
         <div className="w-full md:w-[600px] md:bg-[#222529] rounded-[15px] flex flex-col justify-center items-center p-5 md:p-10 space-y-4">
            
            {/* Ícone de usuário só aparece no desktop*/}
            <div className="hidden md:flex w-[100px] h-[100px] rounded-full bg-[#6D6D6E] mb-5 justify-center items-center">
              <AiOutlineUser className="w-[80px] h-[80px]" />
            </div>

            {/* Caixinhas de informações */}
            <input
              type="text"
              placeholder="Email"
              className="w-full md:w-[550px] h-[45px] md:h-[60px] rounded-[15px] text-lg font-arimo text-[#222529] bg-[#6D6D6E] p-4"
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-full md:w-[550px] h-[45px] md:h-[60px] rounded-[15px] text-lg font-arimo text-[#222529] bg-[#6D6D6E] p-4"
            />

            {/* Esqueceu a senha e botão */}
            <div className="flex flex-col md:flex-row justify-between w-full md:w-[550px] mt-2 space-y-3 md:space-y-0">
              <Link to="/ForgotPassword">
                <div className="text-[#6D6D6E] font-arimo text-center md:text-left cursor-pointer">
                  Esqueci a senha?
                </div>
              </Link>

              <Link to="/">
               <div className="w-full md:w-[120px] h-[50px] bg-[#BA1E22] rounded-[15px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer mx-auto md:mx-0">
                  <p className="text-white text-lg md:text-xl font-arimo">Entrar</p>
               </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}