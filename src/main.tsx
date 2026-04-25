import { ClerkProvider } from "@clerk/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { MatchProvider } from "./context/MatchContext";
import { TeamProvider } from "./context/TeamContext";
import "./index.css";



const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("Missing VITE_CLERK_PUBLISHABLE_KEY");
}


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TeamProvider>
      <MatchProvider>
        <ClerkProvider publishableKey={clerkPubKey}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ClerkProvider>
      </MatchProvider>
    </TeamProvider>
  </StrictMode>
);