type Props = {
  team: string[];
  setTeam: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function PlayersPage({ team, setTeam }: Props) {
  return <h2>Players Page</h2>;
}
