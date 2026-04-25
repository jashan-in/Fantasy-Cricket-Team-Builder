export const getStats = async () => {
  const res = await fetch("http://localhost:4000/stats");

  if (!res.ok) {
    throw new Error("Failed to fetch stats");
  }

  return await res.json();
};