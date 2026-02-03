type Props = {
  team: string[];
};

export default function StatsPage({ team }: Props) {
  return (
    <section>
      <h2>Team Stats</h2>

      {/* Show how many players are selected */}
      <p>You have selected {team.length} players in your team.</p>
    </section>
  );
}
