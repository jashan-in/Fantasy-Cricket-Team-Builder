import { useEffect, useState } from "react";
import { useTeam } from "../context/TeamContext";
import { useAuth } from "@clerk/clerk-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function MyTeamPage() {
  const { team, removePlayer, registerTeam, isRegistered, resetTeam } = useTeam();
  const { getToken } = useAuth();

  const [savedTeams, setSavedTeams] = useState<any[]>([]);

  useEffect(() => {
    const fetchSavedTeams = async () => {
      try {
        const token = await getToken();

        const res = await fetch(`${API_URL}/api/user-team`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (res.ok) {
          const data = await res.json();
          setSavedTeams(data);
        }
      } catch (error) {
        console.log("Failed to fetch saved teams");
      }
    };

    fetchSavedTeams();
  }, []);

  if (team.length === 0) {
    return <p>Please select players first</p>;
  }

  return (
    <section>
      <h2>My Fantasy Team ({team.length}/11)</h2>

      <ul>
        {team.map((player) => (
          <li key={player.id}>
            {player.name} ({player.team})

            {!isRegistered && (
              <button onClick={() => removePlayer(player.id)}>
                Remove
              </button>
            )}
          </li>
        ))}
      </ul>

      {!isRegistered ? (
        <button onClick={registerTeam}>
          Register Team
        </button>
      ) : (
        <>
          <p>Team Registered</p>
          <button onClick={resetTeam}>
            Void Team
          </button>
        </>
      )}

      {/* NEW SAFE FEATURE */}
      <hr />

      <h3>My Saved Teams</h3>

      {savedTeams.length === 0 ? (
        <p>No saved teams yet</p>
      ) : (
        <ul>
          {savedTeams.map((t, index) => (
            <li key={t.id || index}>
              Team #{index + 1} ({t.players?.length || 0} players)
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
