import { useRef, useState, useEffect } from "react";
import Logo from "../assets/Logo.png";
import Background from "../assets/Background.png";
import { Link } from "react-router-dom";

export default function InsertPin() {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const [pin, setPin] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    {/*Aqui controla a movimentação entre as caixinhas*/}
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      if (index < inputs.current.length - 1) {
        inputs.current[index + 1]?.focus();
      }

      {/*Aqui é para atualizar o PIN*/}
      const newPin = inputs.current.map((input) => input?.value || "").join("");
      setPin(newPin);
    } else {
      e.target.value = "";
    }
  };
  {/*Aqui é para voltar quando apagar um numerto*/}
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  {/* para juntar os numeros do PIN*/}
  {/* pode mexer nele pra enviar pro back ou pra fazer uma verificação*/}
  useEffect(() => {
    if (pin.length === 6) {
      console.log("PIN completo:", pin);
    }
  }, [pin]);

  return (
    <div className="w-screen h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center"
    style={{ backgroundImage: `url(${Background})` }}>
      <div className="bg-black/80 w-screen h-screen flex items-center justify-center p-5">
        {/* Container principal */}
        <div className="flex flex-col md:flex-row bg-[#191A1C] rounded-[15px] items-center justify-center w-full md:w-[1100px] h-[450px] md:h-[580px] p-5 md:p-0">

          {/* Formulário */}
          <div className="w-full md:w-[600px] h-[400px] md:bg-[#222529] rounded-[15px] flex flex-col justify-center items-center p-5 md:p-10">

            {/* Logo */}
            <div className="w-[200px] flex justify-center mb-10">
              <img
                className="w-2/3 md:w-[170px] h-auto object-contain"
                src={Logo}
                alt="Logo"
              />
            </div>

            {/* Caixinhas de PIN */}
            <div className="flex justify-center space-x-3 mb-10">
              {/* aqui cria automaticamente as 6 caixinhas */}
              {/* aqui tambem é meio que as configurações das caixinhas, como a movimentação, numero de caixas e quantos numeros podem ser inseridos em cada caixa*/}
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  ref={(el) => {(inputs.current[index] = el)}}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-[45px] h-[60px] md:w-[60px] md:h-[60px] text-center text-[#191A1C] text-xl bg-[#6D6D6E] text-[#222529] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#6D6D6E]"
                />
              ))}
            </div>

            {/* Botão */}
            <div className="flex justify-center w-full">
              <Link to="/ForgotPassword" className="w-[200px]">
                <div className="w-full md:w-[180px] h-[45px] md:h-[50px] bg-[#BA1E22] rounded-[15px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                  <p className="text-white text-lg md:text-xl font-arimo">
                    Verificar código
                  </p>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
