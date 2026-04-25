import { useEffect, useState } from "react";
import { useTeam } from "../context/TeamContext";
import { useMatch } from "../context/MatchContext";
import { getPlayers } from "../repositories/playerRepository";
import type { Player } from "../types/Player";

export default function PlayersPage() {
  const { addPlayer, team, isRegistered } = useTeam();
  const { selectedMatch } = useMatch();

  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const data = await getPlayers();

        if (!selectedMatch) {
          setPlayers([]);
          return;
        }

        const filtered = data.filter(
          (p: any) =>
            p.team === selectedMatch.teamA ||
            p.team === selectedMatch.teamB
        );

        const formatted = filtered.map((p: any) => ({
          id: p.id,
          name: p.name,
          role: p.role,
          team: p.team
        }));

        setPlayers(formatted);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, [selectedMatch]);

  if (!selectedMatch) {
    return <p>Please select a match first</p>;
  }

  if (loading) return <p>Loading players...</p>;

  return (
  <section>
    <h2>
      Players ({selectedMatch.teamA} vs {selectedMatch.teamB})
    </h2>

    {isRegistered && (
      <p>⚠️ Team already registered. Void it to make changes.</p>
    )}

    <p>Selected: {team.length}/11</p>

    <ul>
      {players.map((player) => {
        const alreadySelected = team.some((p) => p.id === player.id);
        const isDisabled =
          isRegistered || team.length >= 11 || alreadySelected;

        return (
          <li key={player.id}>
            {player.name} ({player.role}){" "}
            <button
              disabled={isDisabled}
              onClick={() => addPlayer(player)}
            >
              {alreadySelected
                ? "Added"
                : isRegistered
                ? "Locked"
                : team.length >= 11
                ? "Max Reached"
                : "Add"}
            </button>
          </li>
        );
      })}
    </ul>
  </section>
);
}