import { Outlet } from "react-router-dom";
import Nav from "../nav/Nav";

export default function Layout() {
  return (
    <>
      <header>
        <h1>Fantasy Cricket Team Builder</h1>
      </header>

      <Nav />

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Created by: Jashanpreet Singh, Ravdeep, Sukhpreet</p>
      </footer>
    </>
  );
}
