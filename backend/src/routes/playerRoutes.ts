import { Router } from "express";
import { getPlayers, createPlayer, getPlayersByTeams } from "../controllers/playerController";

const router = Router();

router.get("/", getPlayers);
router.post("/", createPlayer);

// NEW ROUTE
router.get("/filter", getPlayersByTeams);

export default router;