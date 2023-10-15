-- CreateTable
CREATE TABLE "Incident" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "youtubeId" TEXT NOT NULL,
    "startTime" INTEGER NOT NULL,
    "endTime" INTEGER NOT NULL,
    "offendingPlayer" TEXT NOT NULL,
    "offendingPlayerTeam" TEXT NOT NULL,
    "goalie" TEXT NOT NULL,
    "goalieTeam" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "period" INTEGER NOT NULL,
    "timeElapsed" TEXT NOT NULL,
    "callOnIce" TEXT NOT NULL,
    "endResult" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Vote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "incidentId" INTEGER NOT NULL,
    "wasGoalieInterference" BOOLEAN NOT NULL,
    "fanOfEitherTeam" BOOLEAN NOT NULL,
    "fanOfWhichTeam" TEXT,
    CONSTRAINT "Vote_incidentId_fkey" FOREIGN KEY ("incidentId") REFERENCES "Incident" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Incident_youtubeId_idx" ON "Incident"("youtubeId");
