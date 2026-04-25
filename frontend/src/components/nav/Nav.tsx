import { NavLink } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/players">Players</NavLink> |{" "}
      <NavLink to="/my-team">My Team</NavLink> |{" "}
      <NavLink to="/matches">Matches</NavLink> |{" "}
      <NavLink to="/stats">Stats</NavLink> |{" "}

      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
}