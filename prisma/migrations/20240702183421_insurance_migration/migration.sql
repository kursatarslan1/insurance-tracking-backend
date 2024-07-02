-- AlterTable
ALTER TABLE "Insure" ADD COLUMN     "issue_date" TIMESTAMP(3),
ADD COLUMN     "plate" TEXT,
ADD COLUMN     "referance_code" TEXT,
ADD COLUMN     "uavt_code" TEXT,
ALTER COLUMN "end_date" SET DEFAULT CURRENT_TIMESTAMP + INTERVAL '1 year';
