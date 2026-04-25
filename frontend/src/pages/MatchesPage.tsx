import { useEffect, useState } from "react";
import { getMatches } from "../repositories/matchRepository";
import { useMatch } from "../context/MatchContext";
import { useNavigate } from "react-router-dom";

export default function MatchesPage() {
  const [matches, setMatches] = useState([]);
  const { setSelectedMatch, selectedMatch } = useMatch();
  const navigate = useNavigate();

  useEffect(() => {
    getMatches().then(setMatches);
  }, []);

  return (
    <section>
      <h2>Matches</h2>

      <ul>
        {matches.map((match: any) => {
          const isSelected =
            selectedMatch?.teamA === match.teamA &&
            selectedMatch?.teamB === match.teamB;

          return (
            <li key={match.id}>
              {match.teamA} vs {match.teamB}

              <button
                onClick={() => {
                  setSelectedMatch(match);
                  navigate("/players");
                }}
                style={{
                  marginLeft: "10px",
                  backgroundColor: isSelected ? "green" : "",
                  color: isSelected ? "white" : "",
                }}
              >
                {isSelected ? "Selected" : "Select"}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}