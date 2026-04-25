import { Router } from "express";
import { getAllTeams, createTeamController } from "../controllers/teamController";

const router = Router();

router.get("/", getAllTeams);
router.post("/", createTeamController);

export default router;