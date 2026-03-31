export const getTeams = async () => {
  const res = await fetch("http://localhost:3000/teams");

  if (!res.ok) {
    throw new Error("Failed to fetch teams");
  }

  return await res.json();
};