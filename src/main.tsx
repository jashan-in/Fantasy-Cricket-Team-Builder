import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { MatchProvider } from "./context/MatchContext";
import { TeamProvider } from "./context/TeamContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TeamProvider>
      <MatchProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MatchProvider>
    </TeamProvider>
  </StrictMode>
);