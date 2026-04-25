import { Router } from "express";
import { saveUserTeam, getMyTeams } from "../controllers/userTeamController";

const router = Router();

router.post("/", saveUserTeam);
router.get("/my", getMyTeams);

export default router;