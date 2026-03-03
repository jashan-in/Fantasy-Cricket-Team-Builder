import { useState } from "react";
import type { Player } from "../types/Player";
import { teamService } from "../services/teamService";

/*
  useTeam manages presentation state.
  It connects UI to business logic (teamService).
*/

export function useTeam() {
  const [team, setTeam] = useState<Player[]>(teamService.getTeam());

  const addPlayer = (player: Player) => {
    teamService.addPlayer(player);
    setTeam([...teamService.getTeam()]);
  };

  const removePlayer = (id: string) => {
    teamService.removePlayer(id);
    setTeam([...teamService.getTeam()]);
  };

  return { team, addPlayer, removePlayer };
}