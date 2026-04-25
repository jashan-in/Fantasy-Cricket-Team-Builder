import { Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Layout from "./components/layout/Layout";
import PlayersPage from "./pages/PlayersPage";
import MyTeamPage from "./pages/MyTeamPage";
import MatchesPage from "./pages/MatchesPage";
import StatsPage from "./pages/StatsPage";
import TeamsPage from "./pages/TeamPage";
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

        {/* Protected Route */}
        <Route
          path="my-team"
          element={
            <>
              <SignedIn>
                <MyTeamPage />
              </SignedIn>

              <SignedOut>
                <div style={{ padding: "20px" }}>
                  <h2>Please log in to view your team</h2>
                </div>
              </SignedOut>
            </>
          }
        />

        <Route path="stats" element={<StatsPage />} />

        {/* Teams flow */}
        <Route path="teams" element={<TeamsPage />} />
        <Route path="teams/:teamName" element={<TeamDetailsPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;