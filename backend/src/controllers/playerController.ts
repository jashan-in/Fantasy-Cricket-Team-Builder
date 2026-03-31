import { Request, Response } from "express";
import {
  getAllPlayers,
  createPlayerService,
  getPlayersByTeamsService
} from "../services/playerService";

/**
 * GET all players
 */
export const getPlayers = async (req: Request, res: Response) => {
  try {
    const players = await getAllPlayers();
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: "Error fetching players" });
  }
};

/**
 * POST create player
 */
export const createPlayer = async (req: Request, res: Response) => {
  try {
    const player = await createPlayerService(req.body);
    res.status(201).json(player);
  } catch (error) {
    res.status(500).json({ message: "Error creating player" });
  }
};

/**
 * GET players by selected teams
 */
export const getPlayersByTeams = async (req: Request, res: Response) => {
  try {
    const { teamA, teamB } = req.query;

    if (!teamA || !teamB) {
      return res.status(400).json({ message: "Missing team parameters" });
    }

    const players = await getPlayersByTeamsService(
      teamA as string,
      teamB as string
    );

    res.json(players);
  } catch (error) {
    res.status(500).json({ message: "Error filtering players" });
  }
};