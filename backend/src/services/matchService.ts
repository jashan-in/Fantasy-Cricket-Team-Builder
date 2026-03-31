import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllMatches = async () => {
  return await prisma.match.findMany();
};

export const createMatchService = async (data: any) => {
  return await prisma.match.create({
    data: {
      teamA: data.teamA,
      teamB: data.teamB,
      date: data.date,
    },
  });
};