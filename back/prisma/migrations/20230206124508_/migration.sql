/*
  Warnings:

  - You are about to drop the `Workout_log` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `user_id` on table `Exercise_log` required. This step will fail if there are existing NULL values in that column.
  - Made the column `workout_log_id` on table `Exercise_log` required. This step will fail if there are existing NULL values in that column.
  - Made the column `exercise_log_id` on table `Exercise_time` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Exercise_log" DROP CONSTRAINT "Exercise_log_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Exercise_log" DROP CONSTRAINT "Exercise_log_workout_log_id_fkey";

-- DropForeignKey
ALTER TABLE "Exercise_time" DROP CONSTRAINT "Exercise_time_exercise_log_id_fkey";

-- DropForeignKey
ALTER TABLE "Workout_log" DROP CONSTRAINT "Workout_log_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Workout_log" DROP CONSTRAINT "Workout_log_workout_id_fkey";

-- AlterTable
ALTER TABLE "Exercise_log" ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "workout_log_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "Exercise_time" ALTER COLUMN "exercise_log_id" SET NOT NULL;

-- DropTable
DROP TABLE "Workout_log";

-- CreateTable
CREATE TABLE "workout_log" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "workout_id" INTEGER NOT NULL,

    CONSTRAINT "workout_log_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Exercise_log" ADD CONSTRAINT "Exercise_log_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise_log" ADD CONSTRAINT "Exercise_log_workout_log_id_fkey" FOREIGN KEY ("workout_log_id") REFERENCES "workout_log"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise_time" ADD CONSTRAINT "Exercise_time_exercise_log_id_fkey" FOREIGN KEY ("exercise_log_id") REFERENCES "Exercise_log"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workout_log" ADD CONSTRAINT "workout_log_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workout_log" ADD CONSTRAINT "workout_log_workout_id_fkey" FOREIGN KEY ("workout_id") REFERENCES "Workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
