import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/matches">Matches</NavLink> |{" "}
      <NavLink to="/players">Players</NavLink> |{" "}
      <NavLink to="/my-team">My Team</NavLink> |{" "}
      <NavLink to="/teams">Teams</NavLink> |{" "}
      <NavLink to="/stats">Stats</NavLink>
      <div>
        <Show when="signed-out">
          <SignInButton mode="modal">
            <button>Sign In</button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button>Sign Up</button>
          </SignUpButton>
        </Show>

        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </nav>
  );
}