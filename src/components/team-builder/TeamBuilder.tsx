export default function TeamBuilder() {
  const selectedPlayers = [
    { id: 1, name: "Virat Kohli" },
    { id: 2, name: "Jasprit Bumrah" },
  ];

  return (
    <section className="team-builder">
      <h2>My Fantasy Team</h2>
      <ul>
        {selectedPlayers.map(player => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </section>
  );
}
