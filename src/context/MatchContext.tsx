import { createContext, useContext, useState, type ReactNode } from "react";
import { useTeam } from "./TeamContext";

type Match = {
  teamA: string;
  teamB: string;
};

type MatchContextType = {
  selectedMatch: Match | null;
  setSelectedMatch: (match: Match) => void;
};

const MatchContext = createContext<MatchContextType | undefined>(undefined);

type MatchProviderProps = {
  children: ReactNode;
};

export function MatchProvider({ children }: MatchProviderProps) {
  const [selectedMatch, setSelectedMatchState] = useState<Match | null>(null);
  const { isRegistered, resetTeam, team } = useTeam();

  const setSelectedMatch = (match: Match) => {
    if (isRegistered) {
      alert("Void your previous team before selecting a new match");
      return;
    }

    if (team.length > 0) {
      const confirmReset = window.confirm(
        "Changing match will clear your current team. Continue?"
      );

      if (!confirmReset) return;

      resetTeam();
    }

    setSelectedMatchState(match);
  };

  return (
    <MatchContext.Provider value={{ selectedMatch, setSelectedMatch }}>
      {children}
    </MatchContext.Provider>
  );
}

export function useMatch() {
  const context = useContext(MatchContext);

  if (!context) {
    throw new Error("useMatch must be used within a MatchProvider");
  }

  return context;
}