import { Router } from "express";
import { getPlayers, createPlayer, getPlayersByTeams } from "../controllers/playerController";

const router = Router();

/**
 * @swagger
 * /players:
 *   get:
 *     summary: Get all players
 *     responses:
 *       200:
 *         description: List of players
 */

router.get("/", getPlayers);
router.post("/", createPlayer);

// NEW ROUTE
router.get("/filter", getPlayersByTeams);

export default router;