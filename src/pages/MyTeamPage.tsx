import { useAuth } from "@clerk/react";
import { useEffect, useState } from "react";
import { useTeam } from "../context/TeamContext";

type MeResponse = {
  userId: string;
};

export default function MyTeamPage() {
  const { team, removePlayer, registerTeam, isRegistered, resetTeam } = useTeam();
  const { getToken } = useAuth();

  const [userId, setUserId] = useState("");
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const token = await getToken();

        const res = await fetch("http://localhost:4000/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch current user");
        }

        const data: MeResponse = await res.json();
        setUserId(data.userId);
      } catch (error) {
        console.error("Failed to load logged-in user:", error);
      } finally {
        setLoadingUser(false);
      }
    };

    fetchCurrentUser();
  }, [getToken]);

  if (loadingUser) {
    return <p>Loading your account...</p>;
  }

  if (team.length === 0) {
    return (
      <section>
        <h2>My Fantasy Team</h2>
        <p>Logged in user: {userId || "Unavailable"}</p>
        <p>Please select players first</p>
      </section>
    );
  }

  return (
    <section>
      <h2>My Fantasy Team ({team.length}/11)</h2>

      <p>
        <strong>Logged in user:</strong> {userId || "Unavailable"}
      </p>

      <ul>
        {team.map((player) => (
          <li key={player.id}>
            {player.name} ({player.team}){" "}
            {!isRegistered && (
              <button onClick={() => removePlayer(player.id)}>
                Remove
              </button>
            )}
          </li>
        ))}
      </ul>

      {!isRegistered ? (
        <button onClick={registerTeam}>Register Team</button>
      ) : (
        <>
          <p>Team Registered</p>
          <button onClick={resetTeam}>Void Team</button>
        </>
      )}
    </section>
  );
}