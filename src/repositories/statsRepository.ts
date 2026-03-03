import type { Stats } from "../types/Stats";
import { statsTestData } from "../data/statsTestData";

/*
  statsRepository
  -------------------------
  Handles data access for Stats resource.
  No UI logic.
  No business logic.
*/

let statsData: Stats[] = [...statsTestData];

function getAll(): Stats[] {
  return statsData;
}

function getById(id: string): Stats | undefined {
  return statsData.find((s) => s.id === id);
}

function add(stats: Stats): void {
  statsData = [...statsData, stats];
}

function remove(id: string): void {
  statsData = statsData.filter((s) => s.id !== id);
}

export const statsRepository = {
  getAll,
  getById,
  add,
  remove
};