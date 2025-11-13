import { useState } from "react";
import { BottomNav } from "./components/BottomNav";
import { PlacarScreen } from "./components/PlacarScreen";
import { ControleScreen } from "./components/ControleScreen";
import { EstatisticasScreen } from "./components/EstatisticasScreen";
import { JogadoresScreen } from "./components/JogadoresScreen";
import { MatchProvider } from "./contexts/MatchContext";


export default function App() {
  const [activeTab, setActiveTab] = useState("placar");

  const renderScreen = () => {
    switch (activeTab) {
      case "placar":
        return <PlacarScreen />;
      case "controle":
        return <ControleScreen />;
      case "jogadores":
        return <JogadoresScreen />;
      case "estatisticas":
        return <EstatisticasScreen />;
      default:
        return <PlacarScreen />;
    }
  };

  return (
    <MatchProvider>
      <div className="size-full bg-[#0A0F1E] max-w-[430px] mx-auto relative">
        {renderScreen()}
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </MatchProvider>
  );
}
