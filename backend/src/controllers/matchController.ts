import { Request, Response } from "express";
import { getAllMatches, createMatchService } from "../services/matchService";

export const getMatches = async (req: Request, res: Response) => {
  try {
    const matches = await getAllMatches();
    res.json(matches);
  } catch (error) {
    res.status(500).json({ message: "Error fetching matches" });
  }
};

export const createMatch = async (req: Request, res: Response) => {
  try {
    const match = await createMatchService(req.body);
    res.status(201).json(match);
  } catch (error) {
    res.status(500).json({ message: "Error creating match" });
  }
};