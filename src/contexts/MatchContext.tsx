import React, { createContext, useContext, useEffect, useRef, useState } from "react";

type MatchData = {
  scoreLeoes: number;
  scoreDragoes: number;
  matchTime: number; // segundos
  isRunning: boolean;
  isSecondHalf: boolean;
  period: string; // "1º TEMPO", "INTERVALO", "2º TEMPO", "FINALIZADO"
};

type MatchContextType = {
  match: MatchData;
  addGoalLeoes: () => void;
  addGoalDragoes: () => void;
  toggleRun: () => void;
  addMinutes: (minutes?: number) => void;
  startSecondHalf: () => void;
  startInterval: () => void;
  endMatch: () => void;
  setMatchTime: (t: number) => void;
};

const MatchContext = createContext<MatchContextType | undefined>(undefined);

export const MatchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [match, setMatch] = useState<MatchData>({
    scoreLeoes: 0,
    scoreDragoes: 0,
    matchTime: 0,
    isRunning: false,
    isSecondHalf: false,
    period: "1º TEMPO",
  });

  const timerRef = useRef<number | null>(null);

  // Controle do cronômetro
  useEffect(() => {
    if (match.isRunning) {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = window.setInterval(() => {
        setMatch((m) => ({ ...m, matchTime: m.matchTime + 1 }));
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [match.isRunning]);

  const addGoalLeoes = () =>
    setMatch((m) => ({ ...m, scoreLeoes: m.scoreLeoes + 1 }));

  const addGoalDragoes = () =>
    setMatch((m) => ({ ...m, scoreDragoes: m.scoreDragoes + 1 }));

  const toggleRun = () =>
    setMatch((m) => ({ ...m, isRunning: !m.isRunning }));

  const addMinutes = (minutes = 1) =>
    setMatch((m) => ({ ...m, matchTime: m.matchTime + minutes * 60 }));

  const startSecondHalf = () =>
    setMatch((m) => ({
      ...m,
      isSecondHalf: true,
      matchTime: 45 * 60,
      isRunning: true,
      period: "2º TEMPO",
    }));

  const startInterval = () =>
    setMatch((m) => ({
      ...m,
      isRunning: false,
      period: "INTERVALO",
    }));

  const endMatch = () =>
    setMatch((m) => ({
      ...m,
      isRunning: false,
      matchTime: 0,
      isSecondHalf: false,
      period: "FINALIZADO",
    }));

  const setMatchTime = (t: number) =>
    setMatch((m) => ({ ...m, matchTime: t }));

  return (
    <MatchContext.Provider
      value={{
        match,
        addGoalLeoes,
        addGoalDragoes,
        toggleRun,
        addMinutes,
        startSecondHalf,
        startInterval,
        endMatch,
        setMatchTime,
      }}
    >
      {children}
    </MatchContext.Provider>
  );
};

export const useMatch = () => {
  const ctx = useContext(MatchContext);
  if (!ctx) throw new Error("useMatch must be used inside MatchProvider");
  return ctx;
};
