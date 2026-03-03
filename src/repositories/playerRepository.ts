import type { Player } from "../types/Player";
import { playerTestData } from "../data/playerTestData";

/*
  playerRepository handles data access.
  No business logic here.
*/

let players: Player[] = [...playerTestData];

export const playerRepository = {
  getAll(): Player[] {
    return players;
  },

  getById(id: string): Player | undefined {
    return players.find((p) => p.id === id);
  },

  add(player: Player): void {
    players.push(player);
  },

  remove(id: string): void {
    players = players.filter((p) => p.id !== id);
  }
};