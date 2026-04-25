import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";

import PlayersPage from "./pages/PlayersPage";
import MyTeamPage from "./pages/MyTeamPage";
import MatchesPage from "./pages/MatchesPage";
import StatsPage from "./pages/StatsPage";
import TeamsPage from "./pages/TeamsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        {/* Default page */}
        <Route index element={<MatchesPage />} />

        <Route path="players" element={<PlayersPage />} />
        <Route path="my-team" element={<MyTeamPage />} />
        <Route path="matches" element={<MatchesPage />} />
        <Route path="stats" element={<StatsPage />} />
        <Route path="teams" element={<TeamsPage />} />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" />} />

      </Route>
    </Routes>
  );
}

export default App;