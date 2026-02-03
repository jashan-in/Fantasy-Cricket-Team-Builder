// Props type: Team page receives the selected team and function to update it
type Props = {
  team: string[];
  setTeam: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function TeamPage({ team, setTeam }: Props) {

  // Function to remove a player from the shared team state
  const handleRemove = (player: string) => {
    // .filter() creates a new array without the selected player
    setTeam(team.filter((p) => p !== player));
  };

  return (
    <section>
      <h2>My Fantasy Team</h2>


}
