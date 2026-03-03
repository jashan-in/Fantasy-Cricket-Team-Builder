import { useTeam } from "../hooks/useTeam";

export default function StatsPage() {
  const { team } = useTeam();

  return (
    <section>
      <h2>Team Stats</h2>
      <p>You have selected {team.length} players in your team.</p>
    </section>
  );
}