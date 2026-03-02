import { useTeam } from "../hooks/useTeam";

export default function TeamPage() {
  const { team, removeFromTeam, creditsUsed } = useTeam();

  return (
    <section>
      <h2>My Fantasy Team</h2>

      <p>Credits used: {creditsUsed}</p>

      {team.length === 0 ? (
        <p>No players selected yet.</p>
      ) : (
        <ul>
          {team.map((player) => (
            <li key={player.id}>
              {player.name}{" "}
              <button onClick={() => removeFromTeam(player.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}