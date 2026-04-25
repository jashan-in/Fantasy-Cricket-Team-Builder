import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllPlayers = async () => {
  return await prisma.player.findMany();
};