export const getMatches = async () => {
  const res = await fetch("http://localhost:4000/matches");

  if (!res.ok) {
    throw new Error("Failed to fetch matches");
  }

  return await res.json();
};

export const createMatch = async (match: {
  teamA: string;
  teamB: string;
  date: string;
}) => {
  const res = await fetch("http://localhost:4000/matches", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(match),
  });

  if (!res.ok) {
    throw new Error("Failed to create match");
  }

  return await res.json();
};