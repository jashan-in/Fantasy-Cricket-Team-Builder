import { statsRepository } from "../repositories/statsRepository";
import { useTeam } from "../hooks/useTeam";

/*
  StatsPage
  Uses StatsRepository + team hook.
*/

export default function StatsPage() {
  const { team } = useTeam();
  const stats = statsRepository.getAll()[0]; // sample

  return (
    <section>
      <h2>Team Stats</h2>

      <p>Current Team Size: {team.length}</p>
      <p>Total Matches Available: {stats.totalMatches}</p>
      <p>Last Updated: {stats.lastUpdated}</p>
    </section>
  );
}