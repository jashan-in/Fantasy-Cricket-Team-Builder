import { useTeamContext } from "../context/TeamContext";

/**
 * useTeam Hook (Presentation Hook)
 *
 * Returned values (from TeamContext):
 * - players: list of available players for selection
 * - team: current selected fantasy team (shared across pages)
 * - creditsUsed: total credits used by the selected team
 * - addToTeam(player): adds a player to the team (uses service rules)
 * - removeFromTeam(playerId): removes a player from the team
 * - addPlayerToPool(name): adds a new player to the available player list
 *
 * Used in:
 * - PlayersPage (display players + add player/add to team)
 * - TeamPage (display selected team + remove players)
 */
export function useTeam() {
  return useTeamContext();
}