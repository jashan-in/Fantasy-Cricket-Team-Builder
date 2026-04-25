import { useTeam } from "../context/TeamContext";

export default function MyTeamPage() {
  const { team, removePlayer, registerTeam, isRegistered, resetTeam } = useTeam();

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

      {/* 🔥 REGISTER BUTTON */}
      {!isRegistered ? (
        <button onClick={registerTeam}>
          Register Team
        </button>
      ) : (
        <>
          <p>✅ Team Registered</p>
          <button onClick={resetTeam}>
            Void Team
          </button>
        </>
      )}
    </section>
  );
}