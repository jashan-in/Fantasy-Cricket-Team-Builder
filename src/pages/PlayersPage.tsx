import { useState } from "react";

type Props = {
  team: string[];
  setTeam: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function PlayersPage({ team, setTeam }: Props) {
  // Existing default players
  const [players, setPlayers] = useState([
    "Virat Kohli",
    "Jasprit Bumrah",
    "Steve Smith",
    "Ben Stokes",
  ]);

  // Form state
  const [newPlayer, setNewPlayer] = useState("");

  return (
    <section>
      <h2>Players Page</h2>

      {/* FORM COMPONENT (Sprint Requirement) */}
      <form onSubmit={handleAddPlayer}>
        <input
          type="text"
          placeholder="Enter new player name"
          value={newPlayer}
          onChange={(e) => setNewPlayer(e.target.value)}
        />
        <button type="submit">Add Player</button>
      </form>

      {/* PLAYER LIST */}
      <ul>
        {players.map((player) => (
          <li key={player}>
            {player}{" "}
            <button onClick={() => handleAddToTeam(player)}>
              Add to Team
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
