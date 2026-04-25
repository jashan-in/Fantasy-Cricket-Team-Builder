import { createContext, useContext, useState } from "react";

import type { Player } from "../types/Player";

type TeamContextType = {
  team: Player[];
  addPlayer: (player: Player) => void;
  removePlayer: (id: number) => void;
  isRegistered: boolean;
  registerTeam: () => void;
  resetTeam: () => void;
};

const TeamContext = createContext<TeamContextType | null>(null);

export const useTeam = () => {
  const ctx = useContext(TeamContext);
  if (!ctx) throw new Error("useTeam must be used inside provider");
  return ctx;
};

export const TeamProvider = ({ children }: any) => {
  const [team, setTeam] = useState<Player[]>([]);
  const [isRegistered, setIsRegistered] = useState(false);

  const addPlayer = (player: Player) => {
    if (isRegistered) {
      alert("Team already registered. Void it first.");
      return;
    }

    if (team.length >= 11) {
      alert("You can only select 11 players");
      return;
    }

    if (team.find((p) => p.id === player.id)) return;

    setTeam([...team, player]);
  };

  const removePlayer = (id: number) => {
    if (isRegistered) return;
    setTeam(team.filter((p) => p.id !== id));
  };

  const registerTeam = () => {
    if (team.length !== 11) {
      alert("You must select exactly 11 players");
      return;
    }

    setIsRegistered(true);
    alert("Team Registered ✅");
  };

  const resetTeam = () => {
    setTeam([]);
    setIsRegistered(false);
  };

  return (
    <TeamContext.Provider
      value={{ team, addPlayer, removePlayer, isRegistered, registerTeam, resetTeam }}
    >
      {children}
    </TeamContext.Provider>
  );
};