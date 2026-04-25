import { Router } from "express";
import {
  createUserTeamController,
  getUserTeamsController
} from "../controllers/userTeamController";

/**
 * @swagger
 * /user-team:
 *   get:
 *     summary: Get user teams (requires auth)
 *     responses:
 *       200:
 *         description: List of user teams
 *
 *   post:
 *     summary: Create user team (requires auth)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             matchId: 1
 *             playerIds: [1,2,3,4,5,6,7,8,9,10,11]
 *     responses:
 *       201:
 *         description: Team created
 */
const router = Router();

router.post("/", createUserTeamController);
router.get("/", getUserTeamsController);

export default router;