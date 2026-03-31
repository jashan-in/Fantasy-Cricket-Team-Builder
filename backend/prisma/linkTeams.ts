import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const teams = ["MI", "CSK", "RCB", "GT", "KKR", "RR", "SRH", "PBKS"];

  // Create teams
  for (const teamName of teams) {
    await prisma.team.upsert({
      where: { name: teamName },
      update: {},
      create: { name: teamName }
    });
  }

  const allTeams = await prisma.team.findMany();

  // Link players to teams
  for (const team of allTeams) {
    await prisma.player.updateMany({
      where: { team: team.name },
      data: { teamRefId: team.id }
    });
  }

  console.log("✅ Players linked to teams");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });