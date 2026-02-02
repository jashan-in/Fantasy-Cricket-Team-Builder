import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/layout/Layout";
import PlayersPage from "./pages/PlayersPage";
import TeamPage from "./pages/TeamPage";
import MatchesPage from "./pages/MatchesPage";
import StatsPage from "./pages/StatsPage";

function App() {
  const [team, setTeam] = useState<string[]>([]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="players" element={<PlayersPage team={team} setTeam={setTeam} />} />
        <Route path="team" element={<TeamPage team={team} setTeam={setTeam} />} />
        <Route path="matches" element={<MatchesPage />} />
        <Route path="stats" element={<StatsPage team={team} />} />
      </Route>
    </Routes>
  );
}

export default App;
