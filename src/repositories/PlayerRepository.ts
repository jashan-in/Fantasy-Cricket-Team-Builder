import type { Player } from "../types/Player";
import { PLAYERS_TEST_DATA } from "../data/players.testData";

export class PlayerRepository {
  private players: Player[] = [...PLAYERS_TEST_DATA];

  async getAll(): Promise<Player[]> {
    return [...this.players];
  }

  async getById(id: string): Promise<Player | undefined> {
    return this.players.find((p) => p.id === id);
  }

  async create(player: Player): Promise<void> {
    this.players = [...this.players, player];
  }

  async update(id: string, updated: Partial<Player>): Promise<void> {
    this.players = this.players.map((p) => (p.id === id ? { ...p, ...updated } : p));
  }

  async delete(id: string): Promise<void> {
    this.players = this.players.filter((p) => p.id !== id);
  }
}