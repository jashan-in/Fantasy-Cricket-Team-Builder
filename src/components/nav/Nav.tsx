import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/matches">Matches</NavLink> |{" "}
      <NavLink to="/players">Players</NavLink> |{" "}
      <NavLink to="/my-team">My Team</NavLink> |{" "}
      <NavLink to="/teams">Teams</NavLink> |{" "}
      <NavLink to="/stats">Stats</NavLink>
    </nav>
  );
}