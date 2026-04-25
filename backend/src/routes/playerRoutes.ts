import { Router } from "express";
import { getPlayers } from "../controllers/playerController";

const router = Router();

router.get("/", getPlayers);

export default router;