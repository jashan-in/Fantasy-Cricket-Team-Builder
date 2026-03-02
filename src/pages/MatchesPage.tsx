export default function MatchesPage() {
  const matches = [
    "India vs Australia",
    "England vs Pakistan",
    "South Africa vs New Zealand",
  ];

  return (
    <section>
      <h2>Upcoming Matches</h2>
      <ul>
        {matches.map((match) => (
          <li key={match}>{match}</li>
        ))}
      </ul>
    </section>
  );
}