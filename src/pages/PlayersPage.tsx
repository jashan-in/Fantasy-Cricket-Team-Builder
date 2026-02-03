type Props = {
  team: string[];
  setTeam: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function PlayersPage({ team, setTeam }: Props) {
  const players = ["Virat Kohli", "Jasprit Bumrah", "Steve Smith", "Ben Stokes"];

  const handleAdd = (player: string) => {
    if (!team.includes(player)) {
      setTeam([...team, player]);
    }
  };

  return (
    <section>
      <h2>Players Page</h2>
      <ul>
        {players.map((player) => (
          <li key={player}>
            {player}{" "}
            <button onClick={() => handleAdd(player)}>Add to Team</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
