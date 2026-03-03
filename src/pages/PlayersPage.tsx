import { useState } from "react";
import { useTeam } from "../hooks/useTeam";
import type { Player } from "../types/Player";

export default function PlayersPage() {
  const { addPlayer } = useTeam();

  // Default players now use Player objects
  const [players, setPlayers] = useState<Player[]>([
    { id: "1", name: "Virat Kohli", role: "Batsman" },
    { id: "2", name: "Jasprit Bumrah", role: "Bowler" },
    { id: "3", name: "Steve Smith", role: "Batsman" },
    { id: "4", name: "Ben Stokes", role: "All-rounder" }
  ]);

  const [newPlayer, setNewPlayer] = useState("");

  const handleAddToTeam = (player: Player) => {
    addPlayer(player);
  };

  const handleAddPlayer = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPlayer.trim() !== "") {
      const newEntry: Player = {
        id: Date.now().toString(),
        name: newPlayer,
        role: "Unknown"
      };

      setPlayers([...players, newEntry]);
      setNewPlayer("");
    }
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