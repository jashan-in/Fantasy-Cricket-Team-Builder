import './App.css'

import PlayerList from "./components/player-list/PlayerList";
import TeamBuilder from "./components/team-builder/TeamBuilder";
import MatchList from "./components/match-list/MatchList";

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
        <p>Created by: Jashan, Sukhpreet, Ravdeep</p>
      </footer>
    </>
  );
}

export default App;
