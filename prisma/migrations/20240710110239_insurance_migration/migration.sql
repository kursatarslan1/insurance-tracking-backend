-- AlterTable
ALTER TABLE "Insure" ALTER COLUMN "end_date" SET DEFAULT CURRENT_TIMESTAMP + INTERVAL '1 year';

-- CreateTable
CREATE TABLE "Offer" (
    "offer_id" SERIAL NOT NULL,
    "customer_full_name" TEXT NOT NULL,
    "insurance_type" TEXT NOT NULL,
    "address" TEXT,
    "document_no" TEXT,
    "serial_no" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "insure_amount" DOUBLE PRECISION NOT NULL,
    "issue_date" TIMESTAMP(3),
    "plate" TEXT,
    "referance_code" TEXT,
    "uavt_code" TEXT,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("offer_id")
);
