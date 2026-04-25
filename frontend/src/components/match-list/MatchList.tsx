export default function MatchList() {
  const matches = [
    { id: 1, teams: "India vs Australia", date: "March 10" },
    { id: 2, teams: "England vs Pakistan", date: "March 12" },
  ];
 
  return (
    <section className="match-list">
      <h2>Upcoming Matches</h2>
      <ul>
        {matches.map(match => (
          <li key={match.id}>
            {match.teams} – {match.date}
          </li>
        ))}
      </ul>
    </section>
  );
}