import type { Player } from "../types/Player";

/*
  teamService
  -----------------------------------
  Business Logic Layer

  Responsibilities:
  - Store selected team
  - Prevent duplicate players
  - Remove players by id

  This file does NOT:
  - Use React
  - Contain UI logic
  - Access repository
*/

let selectedTeam: Player[] = [];

/**
 * Returns current selected team.
 */
function getTeam(): Player[] {
  return selectedTeam;
}

/**
 * Adds player to team if not already selected.
 */
function addPlayer(player: Player): void {
  const exists = selectedTeam.some((p) => p.id === player.id);

  if (!exists) {
    selectedTeam = [...selectedTeam, player];
  }
}

/**
 * Removes player by id.
 */
function removePlayer(id: string): void {
  selectedTeam = selectedTeam.filter((p) => p.id !== id);
}

export const teamService = {
  getTeam,
  addPlayer,
  removePlayer
};