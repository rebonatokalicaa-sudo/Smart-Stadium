import React from "react";
import { Header } from "./Header";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useMatch } from "../contexts/MatchContext";

export function PlacarScreen() {
  const { match } = useMatch();
  const {
    scoreLeoes = 0,
    scoreDragoes = 0,
    matchTime = 0,
    period = "1º TEMPO",
    isRunning = false,
  } = match as any;

  const formatTime = (totalSeconds: number) => {
    const t = Number(totalSeconds) || 0;
    if (isNaN(t) || t < 0) return "00:00";
    const minutes = Math.floor(t / 60);
    const seconds = t % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-[#0A0F1E] pb-16 relative overflow-hidden">
      {/* Background Stadium Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1632380148925-ff9f845087f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBzdGFkaXVtJTIwbmlnaHR8ZW58MXx8fHwxNzYxMDc1OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Stadium background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0A0F1E] opacity-90"></div>
      </div>

      {/* Background decorative lines */}
      <div className="absolute inset-0 z-10 overflow-hidden opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 0 L75 25 L75 50 L50 75 L25 50 L25 25 Z" fill="none" stroke="#FFFFFF" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="relative z-20">
        <Header title="PLACAR INTELIGENTE" />
        
        {/* Main Content */}
        <div className="px-6 py-8 flex flex-col items-center">
          {/* Teams */}
          <div className="flex items-center justify-between w-full mb-12 px-4">
            {/* Leões FC */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-[#29B6F6] rounded-full flex items-center justify-center">
                <span className="text-3xl">🦁</span>
              </div>
              <span className="text-white text-[18px] font-bold">LEÕES F.C.</span>
            </div>

            {/* Dragões SC */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-[#EF5350] rounded-full flex items-center justify-center">
                <span className="text-3xl">🐉</span>
              </div>
              <span className="text-white text-[18px] font-bold">DRAGÕES S.C.</span>
            </div>
          </div>

          {/* Score */}
          <div className="flex items-center gap-6 mb-10">
            <span className="text-[#FFE600] text-[90px] leading-none font-bold">{scoreLeoes}</span>
            <span className="text-white text-[90px] leading-none font-bold">-</span>
            <span className="text-[#FFE600] text-[90px] leading-none font-bold">{scoreDragoes}</span>
          </div>

          {/* Timer */}
          <div className="flex flex-col items-center gap-1.5 mb-2">
            <span className="text-white text-[48px] leading-none font-medium">{formatTime(matchTime)}</span>
            <span className="text-[#BBBBBB] text-[18px] leading-none">{period}</span>
          </div>

          {/* Live Indicator */}
          <div className="flex items-center gap-2 mt-4">
            <div className={`w-2 h-2 rounded-full ${isRunning ? "bg-[#EF5350] animate-pulse" : "bg-gray-600"}`}></div>
            <span className="text-[#BBBBBB] text-xs">{isRunning ? "AO VIVO" : "PAUSADO"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlacarScreen;
