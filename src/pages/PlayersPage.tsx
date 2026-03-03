import { useState } from "react";
import { useTeam } from "../hooks/useTeam";
import { playerRepository } from "../repositories/playerRepository";
import type { Player } from "../types/Player";

/*
  PlayersPage
   Uses repository for data access
   Uses hook for shared team state
   Keeps presentation logic inside component
*/

export default function PlayersPage() {
  const { addPlayer } = useTeam();

  // Load players from repository instead of hardcoded array
  const [players, setPlayers] = useState<Player[]>(
    playerRepository.getAll()
  );

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

      // Add to repository
      playerRepository.add(newEntry);

      // Refresh local state from repository
      setPlayers([...playerRepository.getAll()]);

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