-- CreateTable
CREATE TABLE "Sales" (
    "id" SERIAL NOT NULL,
    "coin" TEXT NOT NULL,
    "data_purchase" TEXT NOT NULL,
    "value_purchase" DOUBLE PRECISION NOT NULL,
    "unity_purchase" DOUBLE PRECISION NOT NULL,
    "total_money_purchase" DOUBLE PRECISION NOT NULL,
    "value_sale" DOUBLE PRECISION,
    "data_sale" DOUBLE PRECISION,
    "unity_sale" INTEGER,
    "total_money_sale" DOUBLE PRECISION,
    "profit" DOUBLE PRECISION,

    CONSTRAINT "Sales_pkey" PRIMARY KEY ("id")
);
