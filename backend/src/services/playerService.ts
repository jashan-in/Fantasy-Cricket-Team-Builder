import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Get all players
 */
export const getAllPlayers = async () => {
  return await prisma.player.findMany();
};

/**
 * Create a new player
 */
export const createPlayerService = async (data: any) => {
  return await prisma.player.create({
    data: {
      name: data.name,
      team: data.team,
      role: data.role,
    },
  });
};

/**
 * Get players by selected teams
 */
export const getPlayersByTeamsService = async (
  teamA: string,
  teamB: string
) => {
  return await prisma.player.findMany({
    where: {
      OR: [{ team: teamA }, { team: teamB }],
    },
  });
};