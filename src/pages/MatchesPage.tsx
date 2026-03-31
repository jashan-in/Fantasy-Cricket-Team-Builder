import { useEffect, useState } from "react";
import { useMatch } from "../context/MatchContext";
import { useNavigate } from "react-router-dom";
import { getMatches } from "../repositories/matchRepository";

type Match = {
  id: number;
  teamA: string;
  teamB: string;
  date: string;
};

export default function MatchesPage() {
  const { setSelectedMatch } = useMatch();
  const navigate = useNavigate();

  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const data = await getMatches();
        setMatches(data);
      } catch (error) {
        console.error("Error fetching matches:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  const handleSelect = (match: Match) => {
    setSelectedMatch({
      teamA: match.teamA,
      teamB: match.teamB,
    });

    navigate("/players");
  };

  if (loading) return <p>Loading matches...</p>;

  return (
    <section>
      <h2>Upcoming Matches</h2>

      {matches.map((match) => (
        <div key={match.id}>
          {match.teamA} vs {match.teamB} ({match.date})
          <button onClick={() => handleSelect(match)}>
            Select
          </button>
        </div>
      ))}
    </section>
  );
}