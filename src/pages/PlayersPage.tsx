import { useState } from "react";
import { useTeam } from "../hooks/useTeam";
import { usePlayers } from "../hooks/usePlayers";
import type { Player } from "../types/Player";

/*
  PlayersPage
  - Uses usePlayers() for player list + adding players (presentation logic)
  - usePlayers() calls playerService (business logic)
  - playerService calls playerRepository (data access)
  - Uses useTeam() for shared team state (handled by teammate)
*/

export default function PlayersPage() {
  const { addPlayer: addToTeam } = useTeam();
  const { players, addPlayer, error } = usePlayers();

  const [newPlayer, setNewPlayer] = useState("");

  const handleAddToTeam = (player: Player) => {
    addToTeam(player);
  };

  const handleAddPlayer = (e: React.FormEvent) => {
    e.preventDefault();
    addPlayer(newPlayer);
    setNewPlayer("");
  };

  return (
    <section>
      <h2>Players Page</h2>

      <form onSubmit={handleAddPlayer}>
        <input
          type="text"
          placeholder="Enter new player name"
          value={newPlayer}
          onChange={(e) => setNewPlayer(e.target.value)}
        />
        <button type="submit">Add Player</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name} ({player.role}){" "}
            <button onClick={() => handleAddToTeam(player)}>
              Add to Team
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}