import Logo from "../assets/Logo.png";
import Background from "../assets/Background.png";

export default function Initial (){
    return(
        <div className="w-screen h-screen bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${Background})` }}>
            <div className="flex bg-black/85">
                <div className="w-1/2 h-screen flex items-center justify-end">
                    <img className="w-[60%] max-w-[600px] h-auto object-contain" src={Logo} alt="Logo" />
                </div>

                <div className="w-1/2 h-screen flex items-center justify-start">
                    <div className="w-[450px] h-[250px] text-center">
                        <p className="text-white sm:text-3xl md:text-4xl lg:text-6xl font-arimo">Bem-Vindo à</p>
                        <p className="font-bold sm:text-4xl md:text-5xl lg:text-7xl font-arimo text-[#BA1E22]">MORIMITSU</p>
                        <button className="w-[105px] sm:h-[30px] md:h-[40px] lg:h-[60px] bg-[#BA1E22] mt-10  rounded-[15px] object-contain">
                            <p className="text-white text-lg font-arimo">Entrar</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}