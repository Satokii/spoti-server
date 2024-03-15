/*
  Warnings:

  - Added the required column `track_name` to the `Tracks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tracks" ADD COLUMN     "track_name" TEXT NOT NULL;
