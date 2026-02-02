import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/players">Players</NavLink> |{" "}
      <NavLink to="/team">My Team</NavLink> |{" "}
      <NavLink to="/matches">Matches</NavLink> |{" "}
      <NavLink to="/stats">Stats</NavLink>
    </nav>
  );
}
