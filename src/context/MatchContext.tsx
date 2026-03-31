import { createContext, useContext, useState, ReactNode } from "react";
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

export const MatchProvider = ({ children }: { children: ReactNode }) => {
  const [selectedMatch, setSelectedMatchState] = useState<Match | null>(null);

  const { isRegistered, resetTeam, team } = useTeam();

  const setSelectedMatch = (match: Match) => {
    // Block if already registered
    if (isRegistered) {
      alert("Void your previous team before selecting a new match");
      return;
    }

    // If team exists but not registered, warn before switching
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
};

export const useMatch = () => {
  const context = useContext(MatchContext);
  if (!context) {
    throw new Error("useMatch must be used within MatchProvider");
  }
  return context;
};