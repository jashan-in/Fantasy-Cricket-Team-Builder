import { Request, Response } from "express";
import { getAllTeams } from "../services/teamService";

export const getTeams = async (req: Request, res: Response) => {
  try {
    const teams = await getAllTeams();
    res.json(teams);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch teams" });
  }
};