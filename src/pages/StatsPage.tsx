import { useEffect, useState } from "react";
import { getStats } from "../repositories/statsRepository";

type PlayerStat = {
  id: number;
  name: string;
  team: string;
  role: string;
  runs: number;
  wickets: number;
};

type StatsData = {
  batsmen: PlayerStat[];
  bowlers: PlayerStat[];
  allRounders: PlayerStat[];
};

/*
  StatsPage
  Uses StatsRepository + team hook.
*/

export default function StatsPage() {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getStats();
        setStats(data);
      } catch (error) {
        console.error("Error loading stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <p>Loading stats...</p>;

  if (!stats) return <p>No stats available</p>;

  return (
    <section>
      <h2>Player Stats</h2>

      {/* BATSMEN */}
      <h3>Batsmen</h3>
      <ul>
        {stats.batsmen.map((p) => (
          <li key={p.id}>
            {p.name} ({p.team}) - Runs: {p.runs}
          </li>
        ))}
      </ul>

      {/* BOWLERS */}
      <h3>Bowlers</h3>
      <ul>
        {stats.bowlers.map((p) => (
          <li key={p.id}>
            {p.name} ({p.team}) - Wickets: {p.wickets}
          </li>
        ))}
      </ul>

      {/* ALL-ROUNDERS */}
      <h3>All-Rounders</h3>
      <ul>
        {stats.allRounders.map((p) => (
          <li key={p.id}>
            {p.name} ({p.team}) - Runs: {p.runs}, Wickets: {p.wickets}
          </li>
        ))}
      </ul>
    </section>
  );
}