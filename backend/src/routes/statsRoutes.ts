import { Router } from "express";
import { getAllStats } from "../controllers/statsController";

/**
 * @swagger
 * /stats:
 *   get:
 *     summary: Get all player stats
 *     responses:
 *       200:
 *         description: List of stats
 */

const router = Router();

// get STATS
router.get("/", getAllStats);

export default router;