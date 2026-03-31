import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Get stats grouped by category
 */
export const getStats = async () => {
  let stats = await prisma.stats.findMany({
    include: {
      player: true
    }
  });

  //  If no stats exist  generate automatically
  if (stats.length === 0) {
    const players = await prisma.player.findMany();

    for (const p of players) {
      await prisma.stats.create({
        data: {
          playerId: p.id,
          runs: Math.floor(Math.random() * 500),
          wickets: Math.floor(Math.random() * 25)
        }
      });
    }

    stats = await prisma.stats.findMany({
      include: { player: true }
    });
  }

  // GROUP BY CATEGORY
  const grouped = {
    batsmen: [] as any[],
    bowlers: [] as any[],
    allRounders: [] as any[]
  };

  for (const s of stats) {
    const role = s.player.role;

    const playerData = {
      id: s.player.id,
      name: s.player.name,
      team: s.player.team,
      role: s.player.role,
      runs: s.runs,
      wickets: s.wickets
    };

    if (role === "Bowler") {
      grouped.bowlers.push(playerData);
    } else if (role === "All-rounder") {
      grouped.allRounders.push(playerData);
    } else {
      // Batsman + Wicketkeeper
      grouped.batsmen.push(playerData);
    }
  }

  return grouped;
};
