-- CreateTable
CREATE TABLE "cards" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "rarlty" TEXT NOT NULL,
    "attackPoints" INTEGER NOT NULL,
    "defensePoints" INTEGER NOT NULL,
    "imageUrl" TEXT,
    "colletionId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "cards_colletionId_fkey" FOREIGN KEY ("colletionId") REFERENCES "collections" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "cards_name_key" ON "cards"("name");

-- CreateIndex
CREATE UNIQUE INDEX "cards_colletionId_key" ON "cards"("colletionId");
