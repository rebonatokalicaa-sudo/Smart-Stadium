import { BarChart3, Gamepad2, Users } from "lucide-react";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

// Football icon as SVG component
function FootballIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 3 L14 8 L19 8 L15 11 L17 16 L12 13 L7 16 L9 11 L5 8 L10 8 Z" fill="currentColor"/>
    </svg>
  );
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: "placar", label: "Placar", icon: FootballIcon },
    { id: "controle", label: "Controle", icon: Gamepad2 },
    { id: "jogadores", label: "Jogadores", icon: Users },
    { id: "estatisticas", label: "Estatísticas", icon: BarChart3 },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0A0F1E] border-t border-[#1A202C] h-16">
      <div className="flex items-center justify-around h-full max-w-[430px] mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex flex-col items-center justify-center gap-1 flex-1 h-full"
            >
              <Icon
                size={20}
                className={isActive ? "text-[#00E676]" : "text-[#BBBBBB]"}
              />
              <span
                className={`text-xs ${
                  isActive ? "text-[#00E676]" : "text-[#BBBBBB]"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
