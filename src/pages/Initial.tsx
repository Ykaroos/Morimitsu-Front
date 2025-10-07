import Logo from "../assets/Logo.png";
import Background from "../assets/Background.png";

export default function Initial (){
    return(
        <body className="w-screen h-screen bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${Background})` }}>
            <div className="flex bg-black/85">
                <div className="w-1/2 h-screen p-4 flex items-center justify-center">
                    <img className="w-[500px] h-[500px] object-cover" src={Logo} alt="Logo" />
                </div>
                <div className="w-1/2 h-screen p-4 flex items-center justify-center">
                    <div className="w-[450px] h-[250px] text-center mr-25">
                        <p className="text-white text-5xl font-sans">Bem-Vindo à</p>
                        <p className="font-bold text-6xl font-sans text-[#BA1E22]">MORIMITSU</p>
                        <button className="w-[100px] h-[50px] bg-[#BA1E22] mt-10 text-white rounded-[15px]">Entrar</button>
                    </div>
                </div>
            </div>
        </body>
    );
}