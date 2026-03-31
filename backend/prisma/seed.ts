import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clean everything 
  await prisma.stats.deleteMany();
  await prisma.team.deleteMany();
  await prisma.match.deleteMany();
  await prisma.player.deleteMany();

  // 12 Players for each team
  await prisma.player.createMany({
    data: [
      // MI
      { name: "Rohit Sharma", team: "MI", role: "Batsman" },
      { name: "Ishan Kishan", team: "MI", role: "Wicketkeeper" },
      { name: "Suryakumar Yadav", team: "MI", role: "Batsman" },
      { name: "Tilak Varma", team: "MI", role: "Batsman" },
      { name: "Hardik Pandya", team: "MI", role: "All-rounder" },
      { name: "Tim David", team: "MI", role: "All-rounder" },
      { name: "Jasprit Bumrah", team: "MI", role: "Bowler" },
      { name: "Piyush Chawla", team: "MI", role: "Bowler" },
      { name: "Gerald Coetzee", team: "MI", role: "Bowler" },
      { name: "Akash Madhwal", team: "MI", role: "Bowler" },
      { name: "Romario Shepherd", team: "MI", role: "All-rounder" },
      { name: "Nehal Wadhera", team: "MI", role: "Batsman" },

      // CSK
      { name: "MS Dhoni", team: "CSK", role: "Wicketkeeper" },
      { name: "Ruturaj Gaikwad", team: "CSK", role: "Batsman" },
      { name: "Devon Conway", team: "CSK", role: "Batsman" },
      { name: "Ajinkya Rahane", team: "CSK", role: "Batsman" },
      { name: "Shivam Dube", team: "CSK", role: "All-rounder" },
      { name: "Ravindra Jadeja", team: "CSK", role: "All-rounder" },
      { name: "Moeen Ali", team: "CSK", role: "All-rounder" },
      { name: "Deepak Chahar", team: "CSK", role: "Bowler" },
      { name: "Maheesh Theekshana", team: "CSK", role: "Bowler" },
      { name: "Matheesha Pathirana", team: "CSK", role: "Bowler" },
      { name: "Tushar Deshpande", team: "CSK", role: "Bowler" },
      { name: "Daryl Mitchell", team: "CSK", role: "All-rounder" },

      // RCB
      { name: "Virat Kohli", team: "RCB", role: "Batsman" },
      { name: "Faf du Plessis", team: "RCB", role: "Batsman" },
      { name: "Glenn Maxwell", team: "RCB", role: "All-rounder" },
      { name: "Cameron Green", team: "RCB", role: "All-rounder" },
      { name: "Dinesh Karthik", team: "RCB", role: "Wicketkeeper" },
      { name: "Rajat Patidar", team: "RCB", role: "Batsman" },
      { name: "Mahipal Lomror", team: "RCB", role: "All-rounder" },
      { name: "Karn Sharma", team: "RCB", role: "Bowler" },
      { name: "Mohammed Siraj", team: "RCB", role: "Bowler" },
      { name: "Alzarri Joseph", team: "RCB", role: "Bowler" },
      { name: "Yash Dayal", team: "RCB", role: "Bowler" },
      { name: "Anuj Rawat", team: "RCB", role: "Wicketkeeper" },

      // GT
      { name: "Shubman Gill", team: "GT", role: "Batsman" },
      { name: "Wriddhiman Saha", team: "GT", role: "Wicketkeeper" },
      { name: "Sai Sudharsan", team: "GT", role: "Batsman" },
      { name: "David Miller", team: "GT", role: "Batsman" },
      { name: "Rahul Tewatia", team: "GT", role: "All-rounder" },
      { name: "Rashid Khan", team: "GT", role: "All-rounder" },
      { name: "Mohit Sharma", team: "GT", role: "Bowler" },
      { name: "Noor Ahmad", team: "GT", role: "Bowler" },
      { name: "Spencer Johnson", team: "GT", role: "Bowler" },
      { name: "Joshua Little", team: "GT", role: "Bowler" },
      { name: "Abhinav Manohar", team: "GT", role: "Batsman" },
      { name: "Azmatullah Omarzai", team: "GT", role: "All-rounder" },

      // KKR
      { name: "Shreyas Iyer", team: "KKR", role: "Batsman" },
      { name: "Andre Russell", team: "KKR", role: "All-rounder" },
      { name: "Sunil Narine", team: "KKR", role: "All-rounder" },
      { name: "Rinku Singh", team: "KKR", role: "Batsman" },
      { name: "Nitish Rana", team: "KKR", role: "Batsman" },
      { name: "Varun Chakravarthy", team: "KKR", role: "Bowler" },
      { name: "Lockie Ferguson", team: "KKR", role: "Bowler" },
      { name: "Harshit Rana", team: "KKR", role: "Bowler" },
      { name: "Venkatesh Iyer", team: "KKR", role: "All-rounder" },
      { name: "Rahmanullah Gurbaz", team: "KKR", role: "Wicketkeeper" },
      { name: "Anukul Roy", team: "KKR", role: "All-rounder" },
      { name: "Suyash Sharma", team: "KKR", role: "Bowler" },

      // RR
      { name: "Sanju Samson", team: "RR", role: "Wicketkeeper" },
      { name: "Jos Buttler", team: "RR", role: "Batsman" },
      { name: "Yashasvi Jaiswal", team: "RR", role: "Batsman" },
      { name: "Riyan Parag", team: "RR", role: "All-rounder" },
      { name: "Shimron Hetmyer", team: "RR", role: "Batsman" },
      { name: "Ravichandran Ashwin", team: "RR", role: "All-rounder" },
      { name: "Trent Boult", team: "RR", role: "Bowler" },
      { name: "Yuzvendra Chahal", team: "RR", role: "Bowler" },
      { name: "Sandeep Sharma", team: "RR", role: "Bowler" },
      { name: "Avesh Khan", team: "RR", role: "Bowler" },
      { name: "Dhruv Jurel", team: "RR", role: "Wicketkeeper" },
      { name: "Navdeep Saini", team: "RR", role: "Bowler" },

      // SRH
      { name: "Pat Cummins", team: "SRH", role: "All-rounder" },
      { name: "Abhishek Sharma", team: "SRH", role: "All-rounder" },
      { name: "Aiden Markram", team: "SRH", role: "Batsman" },
      { name: "Rahul Tripathi", team: "SRH", role: "Batsman" },
      { name: "Heinrich Klaasen", team: "SRH", role: "Wicketkeeper" },
      { name: "Travis Head", team: "SRH", role: "Batsman" },
      { name: "Bhuvneshwar Kumar", team: "SRH", role: "Bowler" },
      { name: "T Natarajan", team: "SRH", role: "Bowler" },
      { name: "Umran Malik", team: "SRH", role: "Bowler" },
      { name: "Washington Sundar", team: "SRH", role: "All-rounder" },
      { name: "Marco Jansen", team: "SRH", role: "All-rounder" },
      { name: "Mayank Agarwal", team: "SRH", role: "Batsman" },

      // PBKS
      { name: "Shikhar Dhawan", team: "PBKS", role: "Batsman" },
      { name: "Jonny Bairstow", team: "PBKS", role: "Wicketkeeper" },
      { name: "Liam Livingstone", team: "PBKS", role: "All-rounder" },
      { name: "Sam Curran", team: "PBKS", role: "All-rounder" },
      { name: "Jitesh Sharma", team: "PBKS", role: "Wicketkeeper" },
      { name: "Arshdeep Singh", team: "PBKS", role: "Bowler" },
      { name: "Kagiso Rabada", team: "PBKS", role: "Bowler" },
      { name: "Rahul Chahar", team: "PBKS", role: "Bowler" },
      { name: "Harpreet Brar", team: "PBKS", role: "All-rounder" },
      { name: "Nathan Ellis", team: "PBKS", role: "Bowler" },
      { name: "Prabhsimran Singh", team: "PBKS", role: "Batsman" },
      { name: "Rilee Rossouw", team: "PBKS", role: "Batsman" }
    ]
  });

  // MATCHES data
  await prisma.match.createMany({
    data: [
      { teamA: "MI", teamB: "CSK", date: "2026-04-01" },
      { teamA: "RCB", teamB: "GT", date: "2026-04-02" },
      { teamA: "KKR", teamB: "RR", date: "2026-04-03" },
      { teamA: "SRH", teamB: "PBKS", date: "2026-04-04" },
      { teamA: "MI", teamB: "RCB", date: "2026-04-05" },
      { teamA: "CSK", teamB: "GT", date: "2026-04-06" },
      { teamA: "KKR", teamB: "SRH", date: "2026-04-07" },
      { teamA: "RR", teamB: "PBKS", date: "2026-04-08" },
      { teamA: "MI", teamB: "KKR", date: "2026-04-09" },
      { teamA: "CSK", teamB: "RR", date: "2026-04-10" }
    ]
  });

  console.log("Full IPL dataset loaded (96 players + 10 matches)");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });