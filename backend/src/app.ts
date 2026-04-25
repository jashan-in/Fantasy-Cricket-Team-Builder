import { clerkMiddleware, getAuth } from "@clerk/express";
import cors from "cors";
import "dotenv/config";
import express from "express";
import matchRoutes from "./routes/matchRoutes";
import playerRoutes from "./routes/playerRoutes";
import statsRoutes from "./routes/statsRoutes";
import teamRoutes from "./routes/teamRoutes";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Backend is running");
});

app.get("/me", clerkMiddleware(), (req, res) => {
  const auth = getAuth(req);

  if (!auth.isAuthenticated) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  return res.json({
    userId: auth.userId,
  });
});

app.use("/players", playerRoutes);
app.use("/matches", matchRoutes);
app.use("/teams", teamRoutes);
app.use("/stats", statsRoutes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});