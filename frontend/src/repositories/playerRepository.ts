export const getPlayers = async () => {
  const res = await fetch("http://localhost:3000/players");

  if (!res.ok) {
    throw new Error("Failed to fetch players");
  }

  return await res.json();
};

export const createPlayer = async (player: { name: string; team: string }) => {
  const res = await fetch("http://localhost:3000/players", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(player),
  });

  if (!res.ok) {
    throw new Error("Failed to create player");
  }

  return await res.json();
};