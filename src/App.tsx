import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import PlayersPage from "./pages/PlayersPage";
import TeamPage from "./pages/TeamPage";
import MatchesPage from "./pages/MatchesPage";
import StatsPage from "./pages/StatsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="players" element={<PlayersPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="matches" element={<MatchesPage />} />
        <Route path="stats" element={<StatsPage />} />
      </Route>
    </Routes>
  );
}

export default App;