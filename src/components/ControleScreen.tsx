import { Header } from "./Header";
import { Play, Pause, Plus, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export function ControleScreen() {
  // Comece a adicionar os estados aqui:
  const [scoreLeoes, setScoreLeoes] = useState(0); 
  const [scoreDragoes, setScoreDragoes] = useState(0); 
  const [matchTime, setMatchTime] = useState(0); // Tempo em segundos
  const [isRunning, setIsRunning] = useState(false); // Se o cronômetro está rodando
  const [isSecondHalf, setIsSecondHalf] = useState(false); // Para 1º ou 2º tempo

  // Adicione o useEffect aqui (para o cronômetro):
  useEffect(() => {
    let timer: NodeJS.Timeout; 
    if (isRunning) {
      timer = setInterval(() => {
        setMatchTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    // Limpa o timer quando o componente desmonta ou isRunning muda
    return () => clearInterval(timer); 
  }, [isRunning]);

  // Adicione a função de formatação de tempo aqui:
  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Adicione os Handlers de Eventos (handleAddGoalLeoes, handleToggleRun, etc.) aqui:
  const handleAddGoalLeoes = () => setScoreLeoes((prev) => prev + 1);
  const handleAddGoalDragoes = () => setScoreDragoes((prev) => prev + 1);
  
  const handleToggleRun = () => {
    // Se o tempo estiver 0 e não estiver rodando, inicia com 0, se não, apenas alterna
    if (!isRunning && matchTime === 0 && !isSecondHalf) {
        setMatchTime(0); // Garante que começa do 0 para o primeiro tempo
    } else if (!isRunning && matchTime === 0 && isSecondHalf) {
        setMatchTime(45 * 60); // Inicia o segundo tempo
    }
    setIsRunning((prev) => !prev);
  };

  const handleAddTime = () => {
    alert("Adicionar tempo de acréscimo");
    setMatchTime(prev => prev + 60); // Exemplo: adiciona 1 minuto
  };
  const handleCard = (type: 'yellow' | 'red') => {
    alert(`Cartão ${type === 'yellow' ? 'Amarelo' : 'Vermelho'} registrado!`);
    // Aqui você adicionaria a lógica para atualizar o número de cartões nas estatísticas, etc.
  };
  const handleSubstitution = () => alert("Substituição registrada!");
  const handleGoalEvent = () => alert("Evento de Gol registrado!");
  const handleStartSecondHalf = () => {
    if (!isSecondHalf) { // Para evitar iniciar o 2º tempo várias vezes
      setIsSecondHalf(true);
      setMatchTime(45 * 60); // Inicia o 2º tempo com 45 minutos (se a partida for de 90 min)
      setIsRunning(true);
      alert("Iniciado 2º Tempo!");
    } else {
        alert("O segundo tempo já foi iniciado ou está em andamento!");
    }
  };
  const handleStartInterval = () => {
    setIsRunning(false);
    alert("Iniciado Intervalo!");
  };
  const handleEndMatch = () => {
    setIsRunning(false);
    setMatchTime(0); // Reinicia o tempo (ou armazena o final, dependendo da lógica)
    alert("Partida Finalizada!");
    // Aqui você faria a lógica de registro final da partida
  };


  return ( // <-- O JSX do componente começa aqui
    <div className="min-h-screen bg-[#0A0F1E] pb-16">
      <Header title="PAINEL DE CONTROLE DO JOGO" />
      
      {/* Main Content */}
      <div className="px-6 py-6">
        {/* Score Header with Teams */}
        <div className="flex items-center justify-between mb-8">
          {/* Left Team - Leões */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#29B6F6] rounded-full flex items-center justify-center">
              <span className="text-xl">🦁</span>
            </div>
            <span className="text-white text-sm">LEÕES</span>
          </div>
          
          {/* Center - Time and Score */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-white text-[48px] leading-none font-medium">
              {formatTime(matchTime)} {/* Use o tempo formatado */}
            </span>
            <span className="text-[#FFE600] text-[60px] leading-none font-bold">
              {scoreLeoes} - {scoreDragoes} {/* Use os placares dinâmicos */}
            </span>
          </div>
          
          {/* Right Team - Dragões */}
          <div className="flex items-center gap-2">
            <span className="text-white text-sm">DRAGÕES</span>
            <div className="w-10 h-10 bg-[#EF5350] rounded-full flex items-center justify-center">
              <span className="text-xl">🐉</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <button
            className="bg-[#00E676] text-white px-3 py-3 rounded-[10px]"
            onClick={handleAddGoalLeoes} // <-- Adicionado onClick
          >
            <span className="text-[18px] font-medium">+1 GOL</span>
          </button>
          <button
            className="bg-[#00E676] text-white px-6 py-3 rounded-[10px] flex items-center gap-2"
            onClick={handleToggleRun} // <-- Adicionado onClick
          >
            {isRunning ? ( // Alterne entre Play e Pause
              <Pause size={18} fill="white" />
            ) : (
              <Play size={18} fill="white" />
            )}
            <span className="text-[18px] font-medium">
              {isRunning ? "PAUSAR" : "INICIAR"}
            </span>
          </button>
          <button
            className="bg-[#00E676] text-white px-3 py-3 rounded-[10px]"
            onClick={handleAddGoalDragoes} // <-- Adicionado onClick
          >
            <span className="text-[18px] font-medium">+1 GOL</span>
          </button>
        </div>

        <button
          className="w-full bg-[#00E676] text-white py-3 rounded-[10px] mb-8 flex items-center justify-center gap-2"
          onClick={handleAddTime} // <-- Adicionado onClick
        >
          <Clock size={18} />
          <span className="text-[18px] font-medium">+ TEMPO DE ACRÉSCIMO</span>
        </button>

        {/* Event Registration */}
        <div className="mb-6">
          <h3 className="text-[#BBBBBB] text-[16px] font-semibold mb-4 tracking-wide">REGISTRO DE EVENTOS</h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              className="bg-[#FFCA28] text-white py-6 rounded-[10px] flex flex-col items-center justify-center gap-2"
              onClick={() => handleCard('yellow')} // <-- Adicionado onClick
            >
              <div className="w-8 h-10 bg-white rounded-sm"></div> {/* Ícone do cartão */}
              <span className="text-[16px] font-medium">CARTÃO AMARELO</span>
            </button>
            <button
              className="bg-[#EF5350] text-white py-6 rounded-[10px] flex flex-col items-center justify-center gap-2"
              onClick={() => handleCard('red')} // <-- Adicionado onClick
            >
              <div className="w-8 h-10 bg-white rounded-sm"></div> {/* Ícone do cartão */}
              <span className="text-[16px] font-medium">CARTÃO VERMELHO</span>
            </button>
            <button
              className="bg-[#29B6F6] text-white py-6 rounded-[10px] flex flex-col items-center justify-center gap-2"
              onClick={handleSubstitution} // <-- Adicionado onClick
            >
              <span className="text-2xl">⇄</span>
              <span className="text-[16px] font-medium">SUBSTITUIÇÃO</span>
            </button>
            <button
              className="bg-[#00E676] text-white py-6 rounded-[10px] flex flex-col items-center justify-center gap-2"
              onClick={handleGoalEvent} // <-- Adicionado onClick
            >
              <span className="text-3xl">⚽</span>
              <span className="text-[16px] font-medium">GOL</span>
            </button>
          </div>
        </div>

        {/* Period Control */}
        <div>
          <h3 className="text-[#BBBBBB] text-[16px] font-semibold mb-4 tracking-wide">CONTROLE DE PERÍODO</h3>
          <div className="flex flex-col gap-3">
            <button
              className="bg-[#1A202C] text-white py-4 rounded-[10px]"
              onClick={handleStartSecondHalf} // <-- Adicionado onClick
            >
              <span className="text-[16px] font-medium">INICIAR 2º TEMPO</span>
            </button>
            <button
              className="bg-[#1A202C] text-white py-4 rounded-[10px]"
              onClick={handleStartInterval} // <-- Adicionado onClick
            >
              <span className="text-[16px] font-medium">INICIAR INTERVALO</span>
            </button>
            <button
              className="bg-[#1A202C] text-white py-4 rounded-[10px]"
              onClick={handleEndMatch} // <-- Adicionado onClick
            >
              <span className="text-[16px] font-medium">FINALIZAR PARTIDA</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
