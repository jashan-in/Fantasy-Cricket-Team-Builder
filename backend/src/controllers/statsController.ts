import { Request, Response } from "express";
import { getStats } from "../services/statsService";

export const getAllStats = async (req: Request, res: Response) => {
  try {
    const stats = await getStats();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: "Error fetching stats" });
  }
};