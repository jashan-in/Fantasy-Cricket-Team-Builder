import type { Player } from "../types/Player";
import { teamTestData } from "../data/teamTestData";

/*
  teamRepository
  -------------------------
  Data Access Layer

  Responsible for storing and retrieving team data.
  Does NOT contain business logic.
*/

let team: Player[] = [...teamTestData];

function getAll(): Player[] {
  return team;
}

function add(player: Player): void {
  team.push(player);
}

function remove(id: string): void {
  team = team.filter((p) => p.id !== id);
}

function clear(): void {
  team = [];
}

export const teamRepository = {
  getAll,
  add,
  remove,
  clear
};