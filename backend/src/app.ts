const express = require("express");
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import dotenv from "dotenv";
dotenv.config();
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger";

import playerRoutes from "./routes/playerRoutes";
import matchRoutes from "./routes/matchRoutes";
import teamRoutes from "./routes/teamRoutes";
import statsRoutes from "./routes/statsRoutes";
import userTeamRoutes from "./routes/userTeamRoutes";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

app.use(express.json());

app.use(clerkMiddleware());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/players", playerRoutes);
app.use("/matches", matchRoutes);
app.use("/teams", teamRoutes);
app.use("/stats", statsRoutes);
app.use("/api/user-team", userTeamRoutes);

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});
