import { getPlayers } from "../repositories/playerRepository";
import type { Player } from "../types/Player";

export const playerService = {
    async getAllPlayers(): Promise<Player[]> {
        return await getPlayers();
    },

    async addPlayer(player: Player): Promise<Player> {
        if (!player.name.trim()) {
            throw new Error("Player name cannot be empty.");
        }

        return player;
    },

    async removePlayer(id: string): Promise<string> {
        return id;
    }
};