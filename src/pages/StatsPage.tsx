type Props = {
  team: string[];
};

export default function StatsPage({ team }: Props) {
  return (
    <section>
      <h2>Team Stats</h2>
      <p>You have selected {team.length} players.</p>
    </section>
  );
}
