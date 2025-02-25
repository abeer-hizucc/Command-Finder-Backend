/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Commands` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Commands_name_key" ON "Commands"("name");
