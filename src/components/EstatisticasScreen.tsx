import { Header } from "./Header";

interface StatCardProps {
  title: string;
  leoes: number;
  dragoes: number;
  type: "possession" | "shots" | "cards" | "corners";
}

function StatCard({ title, leoes, dragoes, type }: StatCardProps) {
  const renderContent = () => {
    switch (type) {
      case "possession":
        const total = leoes + dragoes;
        const leoesPercent = (leoes / total) * 100;
        const dragoesPercent = (dragoes / total) * 100;
        return (
          <>
            <div className="text-white text-[24px] font-bold mb-3">{leoes}% - {dragoes}%</div>
            <div className="flex w-full h-3 gap-3">
              <div className="bg-[#29B6F6] rounded-full" style={{ width: `${leoesPercent}%` }}></div>
              <div className="bg-[#EF5350] rounded-full" style={{ width: `${dragoesPercent}%` }}></div>
            </div>
          </>
        );
      
      case "shots":
        const maxShots = Math.max(leoes, dragoes);
        return (
          <>
            <div className="text-white text-[24px] font-bold mb-3">{leoes} - {dragoes}</div>
            <div className="flex justify-around items-end h-24">
              <div className="w-12 bg-[#29B6F6] rounded-t" style={{ height: `${(leoes / maxShots) * 100}%` }}></div>
              <div className="w-12 bg-[#EF5350] rounded-t" style={{ height: `${(dragoes / maxShots) * 100}%` }}></div>
            </div>
          </>
        );
      
      case "cards":
        return (
          <>
            <div className="text-white text-[24px] font-bold mb-3">{leoes} - {dragoes}</div>
            <div className="flex justify-center gap-4">
              <div className="flex gap-1">
                {Array.from({ length: leoes }).map((_, i) => (
                  <div key={`l${i}`} className="w-4 h-6 bg-[#FFCA28] rounded-[3px]"></div>
                ))}
              </div>
              <div className="flex gap-1">
                {Array.from({ length: dragoes }).map((_, i) => (
                  <div key={`d${i}`} className="w-4 h-6 bg-[#FFCA28] rounded-[3px]"></div>
                ))}
              </div>
            </div>
          </>
        );
      
      case "corners":
        return (
          <>
            <div className="text-white text-[24px] font-bold mb-3">{leoes} - {dragoes}</div>
            <div className="flex justify-center gap-8 text-2xl">
              <div className="flex items-end gap-1">
                <span className="text-[#29B6F6]">🚩</span>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-[#EF5350]">🚩</span>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="bg-[#1A202C] rounded-[10px] p-5">
      <h4 className="text-[#BBBBBB] text-[16px] font-semibold mb-4">{title}</h4>
      {renderContent()}
    </div>
  );
}

export function EstatisticasScreen() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] pb-16">
      <Header title="ESTATÍSTICAS DA PARTIDA" />
      
      {/* Stats Grid */}
      <div className="px-6 py-6 grid grid-cols-1 gap-4">
        <StatCard
          title="POSSE DE BOLA"
          leoes={55}
          dragoes={45}
          type="possession"
        />
        
        <StatCard
          title="FINALIZAÇÕES"
          leoes={15}
          dragoes={8}
          type="shots"
        />
        
        <StatCard
          title="CARTÕES AMARELOS"
          leoes={3}
          dragoes={2}
          type="cards"
        />
        
        <StatCard
          title="ESCANTEIOS"
          leoes={7}
          dragoes={4}
          type="corners"
        />
        
        {/* Additional Stats */}
        <div className="bg-[#1A202C] rounded-[10px] p-5">
          <h4 className="text-[#BBBBBB] text-[16px] font-semibold mb-4">PASSES COMPLETOS</h4>
          <div className="text-white text-[24px] font-bold">342 - 289</div>
        </div>
        
        <div className="bg-[#1A202C] rounded-[10px] p-5">
          <h4 className="text-[#BBBBBB] text-[16px] font-semibold mb-4">FALTAS</h4>
          <div className="text-white text-[24px] font-bold">12 - 15</div>
        </div>
      </div>
    </div>
  );
}
