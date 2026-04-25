import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const saveUserTeam = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).auth?.userId;

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { players } = req.body;

    const team = await prisma.userTeam.create({
      data: {
        clerkUserId: userId,
        players: players
      }
    });

    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ error: "Failed to save team" });
  }
};

export const getMyTeams = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).auth?.userId;

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const teams = await prisma.userTeam.findMany({
      where: {
        clerkUserId: userId
      }
    });

    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch teams" });
  }
};