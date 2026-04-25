import { NavLink } from "react-router-dom";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/clerk-react";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/matches">Matches</NavLink> |{" "}
      <NavLink to="/players">Players</NavLink> |{" "}
      <NavLink to="/my-team">My Team</NavLink> |{" "}
      <NavLink to="/teams">Teams</NavLink> |{" "}
      <NavLink to="/stats">Stats</NavLink> |{" "}

      {/* Auth Section */}
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
}