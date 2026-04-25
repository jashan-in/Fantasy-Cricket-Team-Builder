import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import "./index.css";
import App from "./App";
import { MatchProvider } from "./context/MatchContext";
import { TeamProvider } from "./context/TeamContext";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <TeamProvider>
        <MatchProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MatchProvider>
      </TeamProvider>
    </ClerkProvider>
  </StrictMode>
);