-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT,
    "company_name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Password" (
    "password_id" SERIAL NOT NULL,
    "password_hash" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Password_pkey" PRIMARY KEY ("password_id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "customer_id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT,
    "phone_number" TEXT,
    "identity_number" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3),

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "Insure" (
    "insure_id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "insurance_type" TEXT NOT NULL,
    "address" TEXT,
    "document_no" TEXT,
    "serial_no" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP + INTERVAL '1 year',
    "creator_staff" TEXT,
    "insure_amount" DOUBLE PRECISION NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Insure_pkey" PRIMARY KEY ("insure_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_identity_number_key" ON "Customer"("identity_number");

-- AddForeignKey
ALTER TABLE "Password" ADD CONSTRAINT "Password_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Insure" ADD CONSTRAINT "Insure_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;
