import React from "react";
import { Header } from "./Header";

// TIPAGENS
interface Player {
  number: number;
  name: string;
  position: string;
  inField: boolean;
}
interface Coach {
  name: string;
}

export function JogadoresScreen() {
  // --- DADOS ---
  const leoesPlayers: Player[] = [
    { number: 1, name: "GABRIEL MENDES", position: "Goleiro", inField: true },
    { number: 2, name: "LUCAS ARAÚJO", position: "Defesa", inField: true },
    { number: 3, name: "RICARDO LIMA", position: "Defesa", inField: true },
    { number: 4, name: "FELIPE COSTA", position: "Defesa", inField: true },
    { number: 5, name: "MIGUEL ROCHA", position: "Defesa", inField: true },
    { number: 6, name: "CARLOS SANTOS", position: "Meio-Campo", inField: true },
    { number: 7, name: "JOÃO COSTA", position: "Meio-Campo", inField: true },
    { number: 8, name: "RODRIGO PIRES", position: "Meio-Campo", inField: true },
    { number: 10, name: "PAULO SOARES", position: "Meio-Campo", inField: true },
    { number: 9, name: "PEDRO SILVA", position: "Atacante", inField: true },
    { number: 11, name: "BRUNO FERREIRA", position: "Atacante", inField: true },
    // reservas
    { number: 12, name: "Talles Magno", position: "Atacante", inField: false },
    { number: 15, name: "João Pedro", position: "Meio-Campo", inField: false },
    { number: 20, name: "Félix Torres", position: "Defesa", inField: false },
    { number: 22, name: "Ryan Ryan", position: "Defesa", inField: false },
  ];
  const leoesCoach: Coach = { name: "E. D. JÚNIOR" };

  const dragoesPlayers: Player[] = [
    { number: 1, name: "ANDRÉ PINTO", position: "Goleiro", inField: true },
    { number: 2, name: "MARCO SILVA", position: "Defesa", inField: true },
    { number: 3, name: "LUÍS ALVES", position: "Defesa", inField: true },
    { number: 4, name: "HENRIQUE MELO", position: "Defesa", inField: true },
    { number: 5, name: "PAULO SOARES", position: "Meio-Campo", inField: true },
    { number: 6, name: "RENAN LOPES", position: "Meio-Campo", inField: true },
    { number: 7, name: "DIOGO MOURA", position: "Meio-Campo", inField: true },
    { number: 8, name: "RAFAEL PEREIRA", position: "Meio-Campo", inField: true },
    { number: 10, name: "VICTOR REIS", position: "Armador", inField: true },
    { number: 9, name: "GUILHERME DUARTE", position: "Atacante", inField: true },
    { number: 11, name: "LUCAS MARTINS", position: "Atacante", inField: true },
    // reservas
    { number: 17, name: "Facundo Torres", position: "Atacante", inField: false },
    { number: 19, name: "Ramón Sosa", position: "Meio-Campo", inField: false },
    { number: 13, name: "Micael", position: "Defesa", inField: false },
    { number: 32, name: "Emiliano Martínez", position: "Meio-Campo", inField: false },
  ];
  const dragoesCoach: Coach = { name: "A. FERREIRA" };

  // --- FILTROS ---
  const leoesStarters = leoesPlayers.filter((p) => p.inField);
  const leoesBench = leoesPlayers.filter((p) => !p.inField);
  const dragoesStarters = dragoesPlayers.filter((p) => p.inField);
  const dragoesBench = dragoesPlayers.filter((p) => !p.inField);

  return (
    <div className="min-h-screen bg-[#0A0F1E] pb-32 text-white">
      <Header title="ESCALAÇÕES" />

      {/* TÍTULO LEÕES */}
      <div className="px-6 py-6">
        <h2 className="text-center text-white text-xl font-semibold mb-3">
          LEÕES F.C. (4-4-2)
        </h2>
      </div>

      {/* CAMPO */}
      <CampoVisual leoes={leoesStarters} dragoes={dragoesStarters} />

      {/* TÍTULO DRAGÕES */}
      <div className="px-6 py-6">
        <h2 className="text-center text-white text-xl font-semibold mt-6">
          DRAGÕES S.C. (3-4-1-2)
        </h2>

        {/* Divisória elegante */}
        <div className="w-2/3 mx-auto my-3 border-t border-gray-600 opacity-70" />

        {/* Título “RESERVAS” */}
        <h3 className="text-center text-white text-2xl md:text-3xl font-bold mt-2 mb-6 tracking-wider">
          RESERVAS
        </h3>
      </div>

      {/* RESERVAS */}
      <div className="px-6 pb-10">
        <div className="bg-[#0F1724] rounded-lg p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 text-sm">
            {/* LEÕES */}
            <div className="flex flex-col gap-2 items-start">
              {leoesBench.map((player) => (
                <div key={player.number} className="flex items-center gap-3">
                  <span className="text-gray-400 w-8 text-right">{player.number}</span>
                  <span className="text-white font-medium">{player.name}</span>
                </div>
              ))}
            </div>

            {/* DRAGÕES */}
            <div className="flex flex-col gap-2 items-end">
              {dragoesBench.map((player) => (
                <div key={player.number} className="flex items-center gap-3">
                  <span className="text-white font-medium">{player.name}</span>
                  <span className="text-gray-400 w-8 text-left">{player.number}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divisória entre reservas e treinadores */}
          <div className="w-full mx-auto my-5 border-t border-gray-700 opacity-60" />

          {/* TREINADORES (sem título) */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-300">
            <span className="font-medium">{leoesCoach.name}</span>
            <span className="font-bold text-[#FFD54F] text-lg">{dragoesCoach.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- COMPONENTE CAMPO VISUAL ---------- */
function CampoVisual({ leoes, dragoes }: { leoes: Player[]; dragoes: Player[] }) {
  return (
    <div className="relative w-full max-w-4xl mx-auto my-4">
      <div
        className="relative w-full aspect-[9/14] rounded-2xl border-4 border-white flex flex-col justify-between py-14 shadow-lg overflow-hidden"
        style={{ backgroundColor: "#188038", minHeight: 440 }}
      >
        {/* Linhas do campo */}
        <div className="absolute inset-0 opacity-80 z-0">
          <div className="absolute left-1/2 top-0 h-full w-[3px] bg-white -translate-x-1/2"></div>
          <div className="absolute left-1/2 top-1/2 w-24 h-24 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-1/2 top-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>

          {/* Áreas */}
          <div className="absolute top-0 left-1/2 w-[60%] h-[12%] border-[3px] border-white border-t-0 -translate-x-1/2"></div>
          <div className="absolute top-0 left-1/2 w-[30%] h-[6%] border-[3px] border-white border-t-0 -translate-x-1/2"></div>
          <div className="absolute top-[12%] left-1/2 w-[20%] h-[8%] border-2 border-white border-t-transparent rounded-b-full -translate-x-1/2 -mt-[2px]"></div>
          <div className="absolute bottom-0 left-1/2 w-[60%] h-[12%] border-[3px] border-white border-b-0 -translate-x-1/2"></div>
          <div className="absolute bottom-0 left-1/2 w-[30%] h-[6%] border-[3px] border-white border-b-0 -translate-x-1/2"></div>
          <div className="absolute bottom-[12%] left-1/2 w-[20%] h-[8%] border-2 border-white border-b-transparent rounded-t-full -translate-x-1/2 -mb-[2px]"></div>
        </div>

        {/* LEÕES */}
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex justify-center">
            {leoes.filter((p) => p.position === "Goleiro").map((p) => (
              <PlayerIcon key={p.number} player={p} color="#00E676" />
            ))}
          </div>
          <div className="flex justify-around">
            {leoes.filter((p) => p.position === "Defesa").map((p) => (
              <PlayerIcon key={p.number} player={p} color="#00E676" />
            ))}
          </div>
          <div className="flex justify-around">
            {leoes.filter((p) => p.position === "Meio-Campo").map((p) => (
              <PlayerIcon key={p.number} player={p} color="#00E676" />
            ))}
          </div>
          <div className="flex justify-center gap-6">
            {leoes.filter((p) => p.position === "Atacante").map((p) => (
              <PlayerIcon key={p.number} player={p} color="#00E676" />
            ))}
          </div>
        </div>

        {/* DRAGÕES */}
        <div className="relative z-10 flex flex-col gap-4 rotate-180">
          <div className="flex justify-center gap-6">
            {dragoes.filter((p) => p.position === "Atacante").map((p) => (
              <PlayerIcon key={p.number} player={p} color="#222222" />
            ))}
          </div>
          <div className="flex justify-around">
            {dragoes
              .filter((p) => p.position === "Meio-Campo" || p.position === "Armador")
              .map((p) => (
                <PlayerIcon key={p.number} player={p} color="#222222" />
              ))}
          </div>
          <div className="flex justify-around">
            {dragoes.filter((p) => p.position === "Defesa").map((p) => (
              <PlayerIcon key={p.number} player={p} color="#222222" />
            ))}
          </div>
          <div className="flex justify-center">
            {dragoes.filter((p) => p.position === "Goleiro").map((p) => (
              <PlayerIcon key={p.number} player={p} color="#222222" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- PLAYER ICON ---------- */
function PlayerIcon({ player, color }: { player: Player; color: string }) {
  return (
    <div className="flex flex-col items-center rotate-180">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md border-2 border-white/50"
        style={{ backgroundColor: color }}
      >
        {player.number}
      </div>
      <p className="text-[10px] text-white mt-1 text-center px-1 font-semibold">{player.name}</p>
    </div>
  );
}

export default JogadoresScreen;
