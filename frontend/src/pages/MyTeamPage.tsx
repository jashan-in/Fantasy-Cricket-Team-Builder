import { useTeam } from "../context/TeamContext";
import { useAuth } from "@clerk/clerk-react";

export default function MyTeamPage() {
  const { team, removePlayer, registerTeam, isRegistered, resetTeam } = useTeam();
  const { getToken } = useAuth();

  async function handleRegister() {
    const token = await getToken();

    await fetch("http://localhost:3000/api/teams", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ players: team }),
    });

    registerTeam();
  }

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
        <button onClick={handleRegister}>
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
    </section>
  );
}