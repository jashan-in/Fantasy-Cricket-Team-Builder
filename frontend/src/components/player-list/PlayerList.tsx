export default function PlayerList() {
  const players = [
    { id: 1, name: "Virat Kohli", role: "Batsman", country: "India" },
    { id: 2, name: "Jasprit Bumrah", role: "Bowler", country: "India" },
    { id: 3, name: "Steve Smith", role: "Batsman", country: "Australia" }
  ];

  return (
    <section className="player-list">
      <h2>Available Players</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            <strong>{player.name}</strong> – {player.role} ({player.country})
          </li>
        ))}
      </ul>
    </section>
  );
}
