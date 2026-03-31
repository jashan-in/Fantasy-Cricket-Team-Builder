import express from "express";
import cors from "cors";
import playerRoutes from "./routes/playerRoutes";
import matchRoutes from "./routes/matchRoutes";
import teamRoutes from "./routes/teamRoutes";
import statsRoutes from "./routes/statsRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/players", playerRoutes);
app.use("/matches", matchRoutes);
app.use("/teams", teamRoutes);
app.use("/stats", statsRoutes);

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});