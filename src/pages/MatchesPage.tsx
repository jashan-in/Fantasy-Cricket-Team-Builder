type Props = {
  matches: string[];
  setMatches: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function MatchesPage({ matches, setMatches }: Props) {
  return <h2>Matches Page</h2>;
}
