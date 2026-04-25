import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTeams = async () => {
  return await prisma.team.findMany({
    include: {
      players: true
    }
  });
};

export const createTeam = async (data: any) => {
  return await prisma.team.create({
    data: {
      name: data.name
    }
  });
};