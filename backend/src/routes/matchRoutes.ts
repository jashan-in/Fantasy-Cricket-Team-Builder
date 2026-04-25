import { Router } from "express";
import { getMatches, createMatch } from "../controllers/matchController";
/**
 * @swagger
 * /matches:
 *   get:
 *     summary: Get all matches
 *     responses:
 *       200:
 *         description: List of matches
 *
 *   post:
 *     summary: Create a new match
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             teamA: "MI"
 *             teamB: "CSK"
 *             date: "2026-04-01"
 *     responses:
 *       201:
 *         description: Match created
 */
const router = Router();

router.get("/", getMatches);
router.post("/", createMatch);

export default router;