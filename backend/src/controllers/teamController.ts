import { Request, Response } from "express";
import { getTeams, createTeam } from "../services/teamService";

export const getAllTeams = async (req: Request, res: Response) => {
  const teams = await getTeams();
  res.json(teams);
};

export const createTeamController = async (req: Request, res: Response) => {
  const team = await createTeam(req.body);
  res.status(201).json(team);
};