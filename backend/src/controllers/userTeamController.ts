import { Request, Response } from "express";
import { getAuth } from "@clerk/express";
import {
  createUserTeam,
  getUserTeams
} from "../services/userTeamService";

export const createUserTeamController = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { matchId, playerIds } = req.body;

    const team = await createUserTeam({
      userId,
      matchId,
      playerIds
    });

    res.status(201).json(team);
  } catch (error) {
    console.error("CREATE TEAM ERROR:", error);
    res.status(500).json({ message: "Failed to save team" });
  }
};

export const getUserTeamsController = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const teams = await getUserTeams(userId);

    res.json(teams);
  } catch (error) {
    console.error("FETCH TEAM ERROR:", error);
    res.status(500).json({ message: "Failed to fetch teams" });
  }
};