import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeams } from "../repositories/teamRepository";

type Player = {
  id: number;
  name: string;
  role: string;
};

type Team = {
  name: string;
  players: Player[];
};

export default function TeamDetailsPage() {
  const { teamName } = useParams();
  const [team, setTeam] = useState<Team | null>(null);

  useEffect(() => {
    const fetchTeam = async () => {
      const data = await getTeams();

      const found = data.find((t: Team) => t.name === teamName);
      setTeam(found || null);
    };

    fetchTeam();
  }, [teamName]);

  if (!team) return <p>Team not found</p>;

  return (
    <section>
      <h2>{team.name}</h2>

      <ul>
        {team.players.map((p) => (
          <li key={p.id}>
            {p.name} - {p.role}
          </li>
        ))}
      </ul>
    </section>
  );
}