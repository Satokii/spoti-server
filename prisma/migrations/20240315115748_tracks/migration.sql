-- CreateTable
CREATE TABLE "Tracks" (
    "id" SERIAL NOT NULL,
    "track_id" INTEGER NOT NULL,
    "tally" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tracks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tracks_track_id_key" ON "Tracks"("track_id");
