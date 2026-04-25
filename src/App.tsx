import { Show } from "@clerk/react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MatchesPage from "./pages/MatchesPage";
import MyTeamPage from "./pages/MyTeamPage";
import PlayersPage from "./pages/PlayersPage";
import StatsPage from "./pages/StatsPage";
import TeamDetailsPage from "./pages/TeamDetailsPage";
import TeamPage from "./pages/TeamPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MatchesPage />} />

        <Route path="matches" element={<MatchesPage />} />
        <Route path="players" element={<PlayersPage />} />
        <Route
          path="my-team"
          element={
            <>
              <Show when="signed-in">
                <MyTeamPage />
              </Show>
              <Show when="signed-out">
                <p>Please sign in to view your team.</p>
              </Show>
            </>
          }
        />
        <Route path="stats" element={<StatsPage />} />

        <Route path="teams" element={<TeamPage />} />
        <Route path="teams/:teamName" element={<TeamDetailsPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;