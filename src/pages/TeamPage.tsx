import { useTeam } from "../hooks/useTeam";

export default function TeamPage() {
  const { team, removePlayer } = useTeam();

  return (
    <section>
      <h2>My Fantasy Team</h2>

      {team.length === 0 ? (
        <p>No players selected yet.</p>
      ) : (
        <ul>
          {team.map((player) => (
            <li key={player.id}>
              {player.name}{" "}
              <button onClick={() => removePlayer(player.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}