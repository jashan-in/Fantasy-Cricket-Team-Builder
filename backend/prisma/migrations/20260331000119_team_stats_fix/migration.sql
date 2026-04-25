-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "teamRefId" INTEGER;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_teamRefId_fkey" FOREIGN KEY ("teamRefId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
