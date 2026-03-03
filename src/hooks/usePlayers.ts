import { useEffect, useState } from "react";
import type { Player } from "../types/Player";
import { playerService } from "../services/playerService";

/*
usePlayers = presentation hook
- Manages UI state (players + error)
- Uses playerService for business logic
*/

export function usePlayers() {
const [players, setPlayers] = useState<Player[]>([]);
const [error, setError] = useState<string | null>(null);

const refresh = () => {
    setPlayers(playerService.getAllPlayers());
};

useEffect(() => {
    refresh();
}, []);

const addPlayer = (name: string) => {
    setError(null);

    try {
    const newEntry: Player = {
        id: Date.now().toString(),
        name: name.trim(),
        role: "Unknown"
    };

    playerService.addPlayer(newEntry);
    refresh();
    } catch (err) {
    setError(err instanceof Error ? err.message : "Could not add player.");
    }
};

return { players, error, addPlayer, refresh };
}