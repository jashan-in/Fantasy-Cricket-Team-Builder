import PlayerList from "./components/player-list/PlayerList";
import TeamBuilder from "./components/team-builder/TeamBuilder";
import MatchList from "./components/match-list/MatchList";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Fantasy Cricket Team Builder</h1>
      </header>

      <main>
        <PlayerList />
        <TeamBuilder />
        <MatchList />
      </main>

      <footer>
        <p>Created by: Jashanpreet Singh, Member 2, Member 3</p>
      </footer>
    </>
  );
}

export default App;
