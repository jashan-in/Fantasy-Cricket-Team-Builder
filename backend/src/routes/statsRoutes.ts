import { Router } from "express";
import { getAllStats } from "../controllers/statsController";

const router = Router();

// get STATS
router.get("/", getAllStats);

export default router;