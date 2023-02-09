/*
  Warnings:

  - You are about to drop the column `exercise_log_id` on the `Exercise` table. All the data in the column will be lost.
  - You are about to drop the `Exercise_log` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Exercise_time` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `workout_log` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_exercise_log_id_fkey";

-- DropForeignKey
ALTER TABLE "Exercise_log" DROP CONSTRAINT "Exercise_log_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Exercise_log" DROP CONSTRAINT "Exercise_log_workout_log_id_fkey";

-- DropForeignKey
ALTER TABLE "Exercise_time" DROP CONSTRAINT "Exercise_time_exercise_log_id_fkey";

-- DropForeignKey
ALTER TABLE "workout_log" DROP CONSTRAINT "workout_log_user_id_fkey";

-- DropForeignKey
ALTER TABLE "workout_log" DROP CONSTRAINT "workout_log_workout_id_fkey";

-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "exercise_log_id";

-- DropTable
DROP TABLE "Exercise_log";

-- DropTable
DROP TABLE "Exercise_time";

-- DropTable
DROP TABLE "workout_log";
