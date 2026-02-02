type Props = {
  team: string[];
  setTeam: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function TeamPage({ team, setTeam }: Props) {
  return <h2>Team Page</h2>;
}
