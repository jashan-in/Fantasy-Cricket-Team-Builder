import { useState } from "react";
import { matchRepository } from "../repositories/matchRepository";
import type { Match } from "../types/Match";

/*
  MatchesPage
  Uses matchRepository for data access.
*/

export default function MatchesPage() {
  const [matches] = useState<Match[]>(
    matchRepository.getAll()
  );

  return (
    <section>
      <h2>Upcoming Matches</h2>

      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            {match.homeTeam} vs {match.awayTeam} - {match.date} ({match.venue})
          </li>
        ))}
      </ul>
    </section>
  );
}