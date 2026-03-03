import type { Match } from "../types/Match";
import { matchTestData } from "../data/matchTestData";

/*
  matchRepository
  -------------------------
  Data Access Layer for Match resource

  Handles CRUD for match data.
  No UI logic.
  No business logic.
*/

let matches: Match[] = [...matchTestData];

function getAll(): Match[] {
  return matches;
}

function getById(id: string): Match | undefined {
  return matches.find((m) => m.id === id);
}

function add(match: Match): void {
  matches = [...matches, match];
}

function remove(id: string): void {
  matches = matches.filter((m) => m.id !== id);
}

export const matchRepository = {
  getAll,
  getById,
  add,
  remove
};