import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import PlayersPage from "./pages/PlayersPage";
import MyTeamPage from "./pages/MyTeamPage";
import MatchesPage from "./pages/MatchesPage";
import StatsPage from "./pages/StatsPage";
import TeamsPage from "./pages/TeamsPage";
import TeamDetailsPage from "./pages/TeamDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Default → Matches */}
        <Route index element={<MatchesPage />} />

        {/* Core pages */}
        <Route path="matches" element={<MatchesPage />} />
        <Route path="players" element={<PlayersPage />} />
        <Route path="my-team" element={<MyTeamPage />} />
        <Route path="stats" element={<StatsPage />} />

        {/* Teams flow */}
        <Route path="teams" element={<TeamsPage />} />
        <Route path="teams/:teamName" element={<TeamDetailsPage />} />

        {/* Fallback (prevents blank screen on wrong route) */}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;