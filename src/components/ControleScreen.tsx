import { Header } from "./Header";
import { Play, Pause, Clock } from "lucide-react";
import { useMatch } from "../contexts/MatchContext";

export function ControleScreen() {
  const {
    match,
    addGoalLeoes,
    addGoalDragoes,
    toggleRun,
    addMinutes,
    startSecondHalf,
    startInterval,
    endMatch,
    setMatchTime,
  } = useMatch();

  const { scoreLeoes, scoreDragoes, matchTime, isRunning } = match;

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-[#0A0F1E] pb-16">
      <Header title="PAINEL DE CONTROLE DO JOGO" />

      <div className="px-6 py-6">
        {/* Score Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#29B6F6] rounded-full flex items-center justify-center">
              <span className="text-xl">🦁</span>
            </div>
            <span className="text-white text-sm">LEÕES</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="text-white text-[48px] leading-none font-medium">
              {formatTime(matchTime)}
            </span>
            <span className="text-[#FFE600] text-[60px] leading-none font-bold">
              {scoreLeoes} - {scoreDragoes}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-white text-sm">DRAGÕES</span>
            <div className="w-10 h-10 bg-[#EF5350] rounded-full flex items-center justify-center">
              <span className="text-xl">🐉</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <button className="bg-[#00E676] text-white px-3 py-3 rounded-[10px]" onClick={addGoalLeoes}>
            <span className="text-[18px] font-medium">+1 GOL</span>
          </button>

          <button
            className="bg-[#00E676] text-white px-6 py-3 rounded-[10px] flex items-center gap-2"
            onClick={toggleRun}
          >
            {isRunning ? <Pause size={18} /> : <Play size={18} />}
            <span className="text-[18px] font-medium">{isRunning ? "PAUSAR" : "INICIAR"}</span>
          </button>

          <button className="bg-[#00E676] text-white px-3 py-3 rounded-[10px]" onClick={addGoalDragoes}>
            <span className="text-[18px] font-medium">+1 GOL</span>
          </button>
        </div>

        <button
          className="w-full bg-[#00E676] text-white py-3 rounded-[10px] mb-8 flex items-center justify-center gap-2"
          onClick={() => addMinutes(1)}
        >
          <Clock size={18} />
          <span className="text-[18px] font-medium">+ TEMPO DE ACRÉSCIMO</span>
        </button>

        {/* Event buttons kept as in original */}
        <div className="mb-6">
          <h3 className="text-[#BBBBBB] text-[16px] font-semibold mb-4 tracking-wide">REGISTRO DE EVENTOS</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-[#FFCA28] text-white py-6 rounded-[10px] flex flex-col items-center justify-center gap-2" onClick={() => alert("Cartão amarelo")}>
              <div className="w-8 h-10 bg-white rounded-sm"></div>
              <span className="text-[16px] font-medium">CARTÃO AMARELO</span>
            </button>
            <button className="bg-[#EF5350] text-white py-6 rounded-[10px] flex flex-col items-center justify-center gap-2" onClick={() => alert("Cartão vermelho")}>
              <div className="w-8 h-10 bg-white rounded-sm"></div>
              <span className="text-[16px] font-medium">CARTÃO VERMELHO</span>
            </button>
            <button className="bg-[#29B6F6] text-white py-6 rounded-[10px] flex flex-col items-center justify-center gap-2" onClick={() => alert("Substituição")}>
              <span className="text-2xl">⇄</span>
              <span className="text-[16px] font-medium">SUBSTITUIÇÃO</span>
            </button>
            <button className="bg-[#00E676] text-white py-6 rounded-[10px] flex flex-col items-center justify-center gap-2" onClick={() => alert("Evento de gol")}>
              <span className="text-3xl">⚽</span>
              <span className="text-[16px] font-medium">GOL</span>
            </button>
          </div>
        </div>

        {/* Period Control */}
        <div>
          <h3 className="text-[#BBBBBB] text-[16px] font-semibold mb-4 tracking-wide">CONTROLE DE PERÍODO</h3>
          <div className="flex flex-col gap-3">
            <button className="bg-[#1A202C] text-white py-4 rounded-[10px]" onClick={startSecondHalf}>
              <span className="text-[16px] font-medium">INICIAR 2º TEMPO</span>
            </button>
            <button className="bg-[#1A202C] text-white py-4 rounded-[10px]" onClick={startInterval}>
              <span className="text-[16px] font-medium">INICIAR INTERVALO</span>
            </button>
            <button className="bg-[#1A202C] text-white py-4 rounded-[10px]" onClick={endMatch}>
              <span className="text-[16px] font-medium">FINALIZAR PARTIDA</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
