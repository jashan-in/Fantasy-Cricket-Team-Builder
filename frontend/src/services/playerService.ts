import type { Player } from "../types/Player";
import { playerRepository } from "../repositories/playerRepository";

/*
playerService = business logic layer for players.
- No React state here
- Calls repository for data access
*/

export const playerService = {
getAllPlayers(): Player[] {
    return playerRepository.getAll();
},

addPlayer(player: Player): void {
    if (!player.name.trim()) {
    throw new Error("Player name cannot be empty.");
    }

    const exists = playerRepository.getAll().some((p) => p.id === player.id);
    if (exists) {
    throw new Error("Player with this ID already exists.");
    }

    playerRepository.add(player);
},

removePlayer(id: string): void {
    playerRepository.remove(id);
}
};