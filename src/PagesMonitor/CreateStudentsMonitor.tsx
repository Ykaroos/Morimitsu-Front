import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CreateStudentsMonitor() {
  const [showModal, setShowModal] = useState(false);
  const [showSavedModal, setShowSavedModal] = useState(false);
  const navigate = useNavigate();

  const [nomeCompleto, setNomeCompleto] = useState("");
  const [nomeSocial, setNomeSocial] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("");
  const [cpf, setCpf] = useState("");
  const [emailPessoal, setEmailPessoal] = useState("");
  const [telefone1, setTelefone1] = useState("");
  const [telefone2, setTelefone2] = useState("");
  const [emailResponsavel, setEmailResponsavel] = useState("");
  const [telResp1, setTelResp1] = useState("");
  const [telResp2, setTelResp2] = useState("");
  const [faixa, setFaixa] = useState("");
  const [grau, setGrau] = useState("");
  const [turma, setTurma] = useState("");
  const [frequencia, setFrequencia] = useState("");

  {/* turmas já criadas */}
  const [turmas, setTurmas] = useState<any[]>([]);

  useEffect(() => {
    const turmasSalvas = JSON.parse(localStorage.getItem("turmas") || "[]");
    setTurmas(turmasSalvas);
  }, []);

  const handleSendCode = () => {
    if (!nomeCompleto.trim() || !cpf.trim()) {
      alert("Preencha ao menos o nome e CPF!");
      return;
    }
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleSave = () => {
    const novoAluno = {
      id: Date.now(),
      nomeCompleto,
      nomeSocial,
      dataNascimento,
      sexo,
      cpf,
      emailPessoal,
      telefone1,
      telefone2,
      emailResponsavel,
      telResp1,
      telResp2,
      faixa,
      grau,
      turma,
      frequencia,
    };

    const alunosExistentes = JSON.parse(localStorage.getItem("alunos") || "[]");
    alunosExistentes.push(novoAluno);
    localStorage.setItem("alunos", JSON.stringify(alunosExistentes));

    setShowModal(false);
    setShowSavedModal(true);
  };

  const handleOk = () => {
    setShowSavedModal(false);
    navigate("/StudentsMonitor");
  };

  return (
    <div className="w-full h-screen md:h-full bg-black flex flex-col justify-center items-center mb-[65px] md:mb-0">
      <div className="w-full h-full block overflow-y-auto scrollbar-hide p-5 space-y-3">
        
        {/* Dados do aulo */}
        <div className="w-full h-auto bg-[#191A1C] rounded-[10px] flex flex-col justify-center items-center  space-y-4 p-5">
          <p className="text-xl text-white font-arimo">Dados Pessoais</p>

          <input
            type="text"
            placeholder="Nome Completo"
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
            className="w-full h-[35px] rounded-[5px] text-md font-arimo text-white placeholder-white bg-[#434343] px-3"
          />

          <input
            type="text"
            placeholder="Nome Social*"
            value={nomeSocial}
            onChange={(e) => setNomeSocial(e.target.value)}
            className="w-full h-[35px] rounded-[5px] text-md font-arimo text-white placeholder-white bg-[#434343] px-3"
          />

          <div className="w-full flex flex-col md:flex-row justify-center items-center md:space-x-5">
            <div className="w-full md:w-1/2">
              <p className="text-md text-white font-arimo m-1">Data de Nascimento:</p>
              <input
                type="date"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
                className="w-full h-[35px] rounded-[5px] text-md font-arimo text-white bg-[#434343] px-3 [color-scheme:dark]"
              />
            </div>
            
            <div className="w-full md:w-1/2">
              <p className="text-md text-white font-arimo m-1">Sexo:</p>
              <div className="w-full flex flex-row justify-between items-center rounded-[5px] bg-[#434343] md:px-20">
                <div className="w-1/2 flex justify-center items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="masculino"
                    onChange={(e) => setSexo(e.target.value)}
                    checked={sexo === "masculino"}
                    className="w-[20px] h-[20px] cursor-pointer"
                  />
                  <p className="text-md text-white font-arimo ml-2">Masculino</p>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="feminino"
                    onChange={(e) => setSexo(e.target.value)}
                    checked={sexo === "feminino"}
                    className="w-[20px] h-[20px] cursor-pointer"
                  />
                  <p className="text-md text-white font-arimo ml-2">Feminino</p>
                </div>
              </div>
            </div>
          </div>

          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className="w-full h-[35px] rounded-[5px] text-md font-arimo text-white placeholder-white bg-[#434343] px-3"
          />

          <p className="text-xl text-white font-arimo">Contato (Pessoal)</p>
          <input
            type="text"
            placeholder="Email"
            value={emailPessoal}
            onChange={(e) => setEmailPessoal(e.target.value)}
            className="w-full h-[35px] rounded-[5px] text-md font-arimo text-white placeholder-white bg-[#434343] px-3"
          />

          <div className="w-full flex flex-row justify-center items-center space-x-5">
            <input
              type="text"
              placeholder="Telefone 1"
              value={telefone1}
              onChange={(e) => setTelefone1(e.target.value)}
              className="w-1/2 h-[35px] rounded-[5px] text-md font-arimo text-white placeholder-white bg-[#434343] px-3"
            />
            <input
              type="text"
              placeholder="Telefone 2*"
              value={telefone2}
              onChange={(e) => setTelefone2(e.target.value)}
              className="w-1/2 h-[35px] rounded-[5px] text-md font-arimo text-white placeholder-white bg-[#434343] px-3"
            />
          </div>

          <p className="text-xl text-white font-arimo">Contato (Responsável)</p>
          <input
            type="text"
            placeholder="Email*"
            value={emailResponsavel}
            onChange={(e) => setEmailResponsavel(e.target.value)}
            className="w-full h-[35px] rounded-[5px] text-md font-arimo text-white placeholder-white bg-[#434343] px-3"
          />
          <div className="w-full flex flex-row justify-center items-center space-x-5">
            <input
              type="text"
              placeholder="Telefone 1*"
              value={telResp1}
              onChange={(e) => setTelResp1(e.target.value)}
              className="w-1/2 h-[35px] rounded-[5px] text-md font-arimo text-white placeholder-white bg-[#434343] px-3"
            />
            <input
              type="text"
              placeholder="Telefone 2*"
              value={telResp2}
              onChange={(e) => setTelResp2(e.target.value)}
              className="w-1/2 h-[35px] rounded-[5px] text-md font-arimo text-white placeholder-white bg-[#434343] px-3"
            />
          </div>
        </div>

        {/* informações de faixa e turma */}
        <div className="w-full flex flex-col md:flex-row justify-content items-center space-y-3 md:space-y-0 md:space-x-3">
          <div className="w-full md:w-1/2 bg-[#191A1C] rounded-[10px] flex flex-col justify-center items-center space-y-4 p-5">
            <p className="text-xl text-white font-arimo m-1">Faixa:</p>

            <select
              value={faixa}
              onChange={(e) => setFaixa(e.target.value)}
              className="w-full h-[35px] rounded-[5px] text-md font-arimo text-white bg-[#434343] px-3"
            >
              <option value="">Selecione a cor</option>
              <option value="branco">Branco</option>
              <option value="azul">Azul</option>
              <option value="roxo">Roxo</option>
              <option value="marrom">Marrom</option>
              <option value="preto">Preto</option>
              <option value="cinza">Cinza</option>
              <option value="cinza-branco">Cinza-Branco</option>
              <option value="cinza-preto">Cinza-Preto</option>
              <option value="amarelo">Amarelo</option>
              <option value="amarelo-branco">Amarelo-Branco</option>
              <option value="amarelo-preto">Amarelo-Preto</option>
              <option value="laranja">Laranja</option>
              <option value="laranja-branco">Laranja-Branco</option>
              <option value="laranja-preto">Laranja-Preto</option>
              <option value="verde">Verde</option>
              <option value="verde-branco">Verde-Branco</option>
              <option value="verde-preto">Verde-Preto</option>
            </select>

            <select
              value={grau}
              onChange={(e) => setGrau(e.target.value)}
              className="w-full h-[35px] rounded-[5px] text-md font-arimo text-white bg-[#434343] px-3"
            >
              <option value="">Selecione o grau</option>
              <option value="grau 0">grau 0</option>
              <option value="grau 1">grau 1</option>
              <option value="grau 2">grau 2</option>
              <option value="grau 3">grau 3</option>
              <option value="grau 4">grau 4</option>
              
            </select>
          </div>

          <div className="w-full md:w-1/2 bg-[#191A1C] rounded-[10px] flex flex-col justify-center items-center space-y-4 p-5">
            <p className="text-xl text-white font-arimo m-1">Turma:</p>
            <select
              value={turma}
              onChange={(e) => setTurma(e.target.value)}
              className="w-full h-[35px] rounded-[5px] text-md font-arimo text-white bg-[#434343] px-3"
            >
              <option value="">Selecione a turma</option>
              {turmas.map((t: any) => (
                <option key={t.id} value={t.nome}>{t.nome}</option>
              ))}
            </select>

            <div className="w-full flex flex-row justify-center items-center">
              <p className="text-lg text-white font-arimo mx-2">Frequência:</p>
              <input
                type="text"
                value={frequencia}
                onChange={(e) => setFrequencia(e.target.value)}
                className="w-[100px] h-[35px] rounded-[5px] text-md font-arimo text-white bg-[#434343] px-3"
              />
            </div>
          </div>
        </div>

        {/* Botões de baixo */}
        <div className="w-full flex flex-row justify-center items-center space-x-30">
          <Link to="/StudentsMonitor">
            <div className="w-[120px] h-[55px] bg-white rounded-[10px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer mx-auto md:mx-0">
              <p className="text-black text-xl font-arimo">Cancelar</p>
            </div>
          </Link>

          <div onClick={handleSendCode}>
            <div className="w-[130px] h-[55px] bg-[#BA1E22] rounded-[10px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer mx-auto md:mx-0">
              <p className="text-white text-xl font-arimo">Criar Aluno</p>
            </div>
          </div>
        </div>

        {/* telas de confirmação */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="w-[250px] h-[150px] md:w-[400px] md:h-[300px] bg-[#222529] rounded-[15px] flex flex-col items-center justify-center text-center space-y-5">
              <p className="text-lg font-arimo text-white md:text-2xl">Deseja mesmo criar o aluno?</p>
              <div className="w-full flex flex-row justify-between px-3 md:px-10">
                <div onClick={handleCloseModal} className="w-full md:w-[100px] flex justify-center">
                  <div className="w-[90px] md:w-[120px] h-[45px] bg-white rounded-[10px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                    <p className="text-black text-lg md:text-xl font-arimo">Cancelar</p>
                  </div>
                </div>
                <div onClick={handleSave} className="w-full md:w-[100px] flex justify-center">
                  <div className="w-[90px] md:w-[120px] h-[45px] bg-[#BA1E22] rounded-[10px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                    <p className="text-white text-lg md:text-xl font-arimo">Criar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showSavedModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="w-[250px] h-[150px] md:w-[400px] md:h-[300px] bg-[#222529] rounded-[15px] flex flex-col items-center justify-center text-center space-y-5">
              <p className="text-lg font-arimo text-white md:text-2xl">Aluno Criado!</p>
              <div onClick={handleOk} className="w-full md:w-[100px] flex justify-center">
                <div className="w-[80px] h-[45px] bg-[#BA1E22] rounded-[15px] flex items-center justify-center transition-all hover:scale-105 cursor-pointer">
                  <p className="text-white text-lg md:text-xl font-arimo">Ok</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}