import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTeams } from "../repositories/teamRepository";

type Team = {
  id: number;
  name: string;
};

export default function TeamsPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeams = async () => {
      const data = await getTeams();
      setTeams(data);
    };

    fetchTeams();
  }, []);

  return (
    <section>
      <h2>Available Teams</h2>

      {teams.map((team) => (
        <div key={team.id}>
          <button onClick={() => navigate(`/teams/${team.name}`)}>
            {team.name}
          </button>
        </div>
      ))}
    </section>
  );
}