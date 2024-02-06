-- CreateTable
CREATE TABLE "product" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "title" STRING NOT NULL,
    "description" STRING NOT NULL,
    "image_link" STRING NOT NULL,
    "img_alt_text" STRING NOT NULL,
    "isVisible" BOOL NOT NULL,
    "isAvailable" BOOL NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);
