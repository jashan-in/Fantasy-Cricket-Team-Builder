import type { Player } from "../types/Player";

let selectedTeam: Player[] = [];

export const teamService = {
  getTeam(): Player[] {
    return selectedTeam;
  },

  addPlayer(player: Player): void {
    if (!selectedTeam.find((p) => p.id === player.id)) {
      selectedTeam.push(player);
    }
  },

  removePlayer(id: string): void {
    selectedTeam = selectedTeam.filter((p) => p.id !== id);
  }
};