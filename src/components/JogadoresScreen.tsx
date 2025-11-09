import { Header } from "./Header";
// A importação de imagem não é necessária.

interface Player {
  number: number;
  name: string;
  position: string;
  inField: boolean;
}

// Interface para os Treinadores
interface Coach {
  name: string;
}

export function JogadoresScreen() {
  // --- DADOS DOS TIMES (AGORA COM RESERVAS) ---
  const leoesPlayers: Player[] = [
    // Titulares (4-4-2)
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
    // Reservas
    { number: 12, name: "Talles Magno", position: "Atacante", inField: false },
    { number: 15, name: "João Pedro", position: "Meio-Campo", inField: false },
    { number: 20, name: "Félix Torres", position: "Defesa", inField: false },
    { number: 22, name: "Ryan Ryan", position: "Defesa", inField: false },
  ];
  const leoesCoach: Coach = { name: "D. JÚNIOR" };

  const dragoesPlayers: Player[] = [
    // Titulares (3-4-1-2)
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
    // Reservas
    { number: 17, name: "Facundo Torres", position: "Atacante", inField: false },
    { number: 19, name: "Ramón Sosa", position: "Meio-Campo", inField: false },
    { number: 13, name: "Micael", position: "Defesa", inField: false },
    { number: 32, name: "Emiliano Martínez", position: "Meio-Campo", inField: false },
  ];
  const dragoesCoach: Coach = { name: "A. FERREIRA" };

  // --- FILTRANDO OS DADOS ---
  const leoesStarters = leoesPlayers.filter(p => p.inField);
  const leoesBench = leoesPlayers.filter(p => !p.inField);
  const dragoesStarters = dragoesPlayers.filter(p => p.inField);
  const dragoesBench = dragoesPlayers.filter(p => !p.inField);

  return (
    <div className="min-h-screen bg-[#0A0F1E] pb-16 text-white">
      <Header title="ESCALAÇÕES" />

      {/* TÍTULO LEÕES */}
      <div className="px-6 py-6">
        <h2 className="text-center text-white text-xl font-semibold mb-3">
          LEÕES F.C. (4-4-2)
        </h2>
      </div>

      {/* CAMPO ÚNICO (Passando apenas os titulares) */}
      <CampoVisual leoes={leoesStarters} dragoes={dragoesStarters} />

      {/* TÍTULO DRAGÕES */}
      <div className="px-6 py-6">
        <h2 className="text-center text-white text-xl font-semibold mt-6">
          DRAGÕES S.C. (3-4-1-2)
        </h2>
      </div>

      {/* ===============================================
      === SEÇÃO DE RESERVAS E TREINADORES (ATUALIZADA) ===
      ===============================================
      */}
      <div className="px-6 py-6 mt-4">
        {/* O "Retângulo" escuro */}
        <div className="bg-[#1A202C] rounded-lg p-6"> 
        
          {/* --- TÍTULO RESERVAS --- */}
          <h3 className="text-center text-gray-300 text-lg font-semibold mb-6 tracking-wider">RESERVAS</h3>
          
          {/* Grid de 2 colunas para os reservas */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            
            {/* Coluna Leões (Esquerda) - Alinhado à esquerda */}
            <div className="flex flex-col gap-3 text-left">
              {leoesBench.map(player => (
                <div key={player.number} className="flex items-center gap-3">
                  <span className="text-gray-400 w-6 text-right">{player.number}</span>
                  <span className="text-white font-medium">{player.name}</span>
                </div>
              ))}
            </div>
            
            {/* Coluna Dragões (Direita) - CORRIGIDO: Alinhado à direita */}
            <div className="flex flex-col gap-3 text-right">
              {dragoesBench.map(player => (
                <div key={player.number} className="flex items-center justify-end gap-3">
                  <span className="text-white font-medium">{player.name}</span>
                  <span className="text-gray-400 w-6 text-left">{player.number}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* --- TÍTULO TREINADOR --- */}
          <h3 className="text-center text-gray-300 text-lg font-semibold mt-10 mb-5 tracking-wider">TREINADOR</h3>
          
          {/* Grid de 2 colunas para os treinadores */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            
            {/* Treinador Leões (Esquerda) */}
            <div className="text-left">
              <span className="text-white font-medium">{leoesCoach.name}</span>
            </div>
            
            {/* Treinador Dragões (Direita) - CORRIGIDO: Alinhado à direita */}
            <div className="text-right">
              <span className="text-white font-medium">{dragoesCoach.name}</span>
            </div>
          </div>
        </div>
      </div>
      {/* === FIM DA SEÇÃO === */}

    </div>
  );
}

// --- COMPONENTE DO CAMPO VISUAL (COM LINHAS CSS) ---
function CampoVisual({ leoes, dragoes }: { leoes: Player[]; dragoes: Player[] }) {
  return (
    <div
      className="relative w-full aspect-[9/16] mx-auto rounded-2xl border-4 border-white flex flex-col justify-between py-4 shadow-lg overflow-hidden"
      style={{
        backgroundColor: "#188038", // Fundo verde sólido
      }}
    >
      {/* CAMADA 1: LINHAS DO CAMPO (z-0) */}
      <div className="absolute inset-0 opacity-80 z-0">
        {/* Linha central */}
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-white -translate-x-1/2"></div>
        {/* Círculo central */}
        <div className="absolute left-1/2 top-1/2 w-24 h-24 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        {/* Ponto do meio */}
        <div className="absolute left-1/2 top-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        {/* --- ÁREA SUPERIOR --- */}
        <div className="absolute top-0 left-1/2 w-[60%] h-[12%] border-[3px] border-white border-t-0 -translate-x-1/2"></div>
        <div className="absolute top-0 left-1/2 w-[30%] h-[6%] border-[3px] border-white border-t-0 -translate-x-1/2"></div>
        <div className="absolute top-[12%] left-1/2 w-[20%] h-[8%] border-2 border-white border-t-transparent rounded-b-full -translate-x-1/2 -mt-[2px]"></div>
        {/* --- ÁREA INFERIOR --- */}
        <div className="absolute bottom-0 left-1/2 w-[60%] h-[12%] border-[3px] border-white border-b-0 -translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/2 w-[30%] h-[6%] border-[3px] border-white border-b-0 -translate-x-1/2"></div>
        <div className="absolute bottom-[12%] left-1/2 w-[20%] h-[8%] border-2 border-white border-b-transparent rounded-t-full -translate-x-1/2 -mb-[2px]"></div>
      </div>

      {/* CAMADA 2: JOGADORES (z-10) */}
      
      {/* LEÕES (topo) */}
      <div className="relative flex flex-col gap-4 z-10">
        <div className="flex justify-center">
          {leoes
            .filter((p) => p.position === "Goleiro")
            .map((p) => (
              <PlayerIcon key={p.number} player={p} color="#00E676" />
            ))}
        </div>
        <div className="flex justify-around">
          {leoes
            .filter((p) => p.position === "Defesa")
            .map((p) => (
              <PlayerIcon key={p.number} player={p} color="#00E676" />
            ))}
        </div>
        <div className="flex justify-around">
          {leoes
            .filter((p) => p.position === "Meio-Campo")
            .map((p) => (
              <PlayerIcon key={p.number} player={p} color="#00E676" />
            ))}
        </div>
        <div className="flex justify-center gap-6">
          {leoes
            .filter((p) => p.position === "Atacante")
            .map((p) => (
              <PlayerIcon key={p.number} player={p} color="#00E676" />
            ))}
        </div>
      </div>

      {/* DRAGÕES (invertido na parte de baixo) */}
      <div className="relative flex flex-col gap-4 rotate-180 z-10">
        <div className="flex justify-center">
          {dragoes
            .filter((p) => p.position === "Goleiro")
            .map((p) => (
              <PlayerIcon key={p.number} player={p} color="#222222" />
            ))}
        </div>
        <div className="flex justify-around">
          {dragoes
            .filter((p) => p.position === "Defesa")
            .map((p) => (
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
        <div className="flex justify-center gap-6">
          {dragoes
            .filter((p) => p.position === "Atacante")
            .map((p) => (
              <PlayerIcon key={p.number} player={p} color="#222222" />
            ))}
        </div>
      </div>
    </div>
  );
}

// --- COMPONENTE DO ÍCONE DO JOGADOR ---
function PlayerIcon({
  player,
  color,
}: {
  player: Player; 
  color: string;
}) {
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