import { Router } from "express";
import { getAllTeams, createTeamController } from "../controllers/teamController";

/**
 * @swagger
 * /teams:
 *   get:
 *     summary: Get all teams
 *     responses:
 *       200:
 *         description: List of teams
 */
const router = Router();

router.get("/", getAllTeams);
router.post("/", createTeamController);

export default router;