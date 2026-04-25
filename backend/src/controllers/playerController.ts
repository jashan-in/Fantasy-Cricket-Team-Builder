import { Request, Response } from "express";
import { getAllPlayers } from "../services/playerService";

export const getPlayers = async (req: Request, res: Response) => {
  try {
    const players = await getAllPlayers();
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch players" });
  }
};