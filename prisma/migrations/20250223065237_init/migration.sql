-- CreateEnum
CREATE TYPE "PLATFORM" AS ENUM ('Windows', 'Linux', 'MacOS');

-- CreateTable
CREATE TABLE "Commands" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "platform" "PLATFORM" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Commands_pkey" PRIMARY KEY ("id")
);
