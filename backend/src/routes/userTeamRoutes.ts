import { Router } from "express";
import {
  createUserTeamController,
  getUserTeamsController
} from "../controllers/userTeamController";

const router = Router();

router.post("/", createUserTeamController);
router.get("/", getUserTeamsController);

export default router;