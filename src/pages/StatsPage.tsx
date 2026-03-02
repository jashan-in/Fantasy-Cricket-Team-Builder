import { useTeam } from "../hooks/useTeam";

/**
 * StatsPage
 *
 * Uses useTeam hook so it can read shared team state without prop drilling.
 */
export default function StatsPage() {
  const { team, creditsUsed } = useTeam();

  return (
    <section>
      <h2>Team Stats</h2>
      <p>You have selected {team.length} players in your team.</p>
      <p>Total credits used: {creditsUsed}</p>
    </section>
  );
}