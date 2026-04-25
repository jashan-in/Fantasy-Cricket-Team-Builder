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

        let finalPlayers = data;

        if (selectedMatch) {
          finalPlayers = data.filter(
            (p: any) =>
              p.team === selectedMatch.teamA ||
              p.team === selectedMatch.teamB
          );
        }

        const formatted = finalPlayers.map((p: any) => ({
          id: p.id,
          name: p.name,
          role: p.role,
          team: p.team,
        }));

        setPlayers(formatted);
      } catch (error) {
        console.error("PLAYER FETCH ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, [selectedMatch]);

  if (loading) return <p>Loading players...</p>;

  return (
    <section>
      <h2>
        {selectedMatch
          ? `Players (${selectedMatch.teamA} vs ${selectedMatch.teamB})`
          : "All Players"}
      </h2>

      {!selectedMatch && (
        <p>Showing all players (no match selected)</p>
      )}

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