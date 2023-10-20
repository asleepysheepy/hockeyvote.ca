-- CreateTable
CREATE TABLE "Incident" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "youtubeId" TEXT NOT NULL,
    "startTime" INTEGER NOT NULL,
    "endTime" INTEGER NOT NULL,
    "offendingPlayer" TEXT NOT NULL,
    "offendingPlayerTeam" TEXT NOT NULL,
    "goalie" TEXT NOT NULL,
    "goalieTeam" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "period" INTEGER NOT NULL,
    "timeElapsed" TEXT NOT NULL,
    "callOnIce" TEXT NOT NULL,
    "endResult" TEXT NOT NULL,

    CONSTRAINT "Incident_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vote" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "incidentId" INTEGER NOT NULL,
    "wasGoalieInterference" BOOLEAN NOT NULL,
    "fanOfEitherTeam" BOOLEAN NOT NULL,
    "fanOfWhichTeam" TEXT,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Incident_youtubeId_idx" ON "Incident"("youtubeId");

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_incidentId_fkey" FOREIGN KEY ("incidentId") REFERENCES "Incident"("id") ON DELETE CASCADE ON UPDATE CASCADE;
