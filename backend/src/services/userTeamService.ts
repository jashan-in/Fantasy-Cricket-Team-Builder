import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUserTeam = async (data: any) => {
  return await prisma.userTeam.create({
    data: {
      userId: data.userId,
      matchId: data.matchId,
      players: {
        connect: data.playerIds.map((id: number) => ({ id }))
      }
    },
    include: {
      players: true
    }
  });
};

export const getUserTeams = async (userId: string) => {
  return await prisma.userTeam.findMany({
    where: { userId },
    include: {
      players: true
    }
  });
};