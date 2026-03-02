import { useState } from "react";
import { useTeam } from "../hooks/useTeam";

export default function PlayersPage() {
  const { players, team, addToTeam, addPlayerToPool, creditsUsed } = useTeam();
  const [newPlayerName, setNewPlayerName] = useState("");

  const handleAddPlayer = async (e: React.FormEvent) => {
    e.preventDefault();
    await addPlayerToPool(newPlayerName);
    setNewPlayerName("");
  };

  return (
    <section>
      <h2>Players Page</h2>

      <p>Credits used: {creditsUsed}</p>
      <p>Players in team: {team.length}</p>

      <form onSubmit={handleAddPlayer}>
        <input
          type="text"
          placeholder="Enter new player name"
          value={newPlayerName}
          onChange={(e) => setNewPlayerName(e.target.value)}
        />
        <button type="submit">Add Player</button>
      </form>

      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name} ({player.role}) - {player.team}{" "}
            <button type="button" onClick={() => addToTeam(player)}>
              Add to Team
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
