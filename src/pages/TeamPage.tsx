type Props = {
  team: string[];
  setTeam: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function TeamPage({ team, setTeam }: Props) {
  const handleRemove = (player: string) => {
    setTeam(team.filter((p) => p !== player));
  };

  return (
    <section>
      <h2>My Fantasy Team</h2>

      {team.length === 0 ? (
        <p>No players selected yet.</p>
      ) : (
        <ul>
          {team.map((player) => (
            <li key={player}>
              {player}{" "}
              <button onClick={() => handleRemove(player)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
