import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Player } from "../types/Player";
import { PlayerRepository } from "../repositories/PlayerRepository";
import { TeamService } from "../services/TeamService";

type TeamContextValue = {
  players: Player[];
  team: Player[];
  creditsUsed: number;
  addToTeam: (player: Player) => void;
  removeFromTeam: (playerId: string) => void;
  addPlayerToPool: (name: string) => Promise<void>;
};

const TeamContext = createContext<TeamContextValue | null>(null);

export function TeamProvider({ children }: { children: React.ReactNode }) {
  const repo = useMemo(() => new PlayerRepository(), []);
  const [players, setPlayers] = useState<Player[]>([]);
  const [team, setTeam] = useState<Player[]>([]);

  useEffect(() => {
    repo.getAll().then(setPlayers);
  }, [repo]);

  const addToTeam = (player: Player) => {
    setTeam((prev) => TeamService.addPlayer(prev, player));
  };

  const removeFromTeam = (playerId: string) => {
    setTeam((prev) => TeamService.removePlayer(prev, playerId));
  };

  const addPlayerToPool = async (name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;

    const exists = players.some((p) => p.name.toLowerCase() === trimmed.toLowerCase());
    if (exists) return;

    const newPlayer: Player = {
      id: crypto.randomUUID(),
      name: trimmed,
      role: "Batsman",
      team: "Custom",
      credit: 8,
    };

    await repo.create(newPlayer);
    const refreshed = await repo.getAll();
    setPlayers(refreshed);
  };

  const creditsUsed = TeamService.getTotalCredits(team);

  return (
    <TeamContext.Provider
      value={{ players, team, creditsUsed, addToTeam, removeFromTeam, addPlayerToPool }}
    >
      {children}
    </TeamContext.Provider>
  );
}

export function useTeamContext() {
  const ctx = useContext(TeamContext);
  if (!ctx) throw new Error("useTeamContext must be used within <TeamProvider>");
  return ctx;
}