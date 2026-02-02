import { Outlet } from "react-router-dom";
import Nav from "../nav/Nav";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="app-container">
      <header>
        <h1>Fantasy Cricket Team Builder</h1>
        <Nav />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Created by: Jashanpreet Singh, Ravdeep, Sukhpreet</p>
      </footer>
    </div>
  );
}
