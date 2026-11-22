-- CreateTable
CREATE TABLE "horses" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "breed" VARCHAR(255),
    "coat_color" VARCHAR(255) NOT NULL,
    "birth_date" DATE,
    "description" TEXT,

    CONSTRAINT "horses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "horse_photos" (
    "id" SERIAL NOT NULL,
    "horse_id" INTEGER NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "is_main" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "horse_photos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "horse_photos" ADD CONSTRAINT "horse_photos_horse_id_fkey" FOREIGN KEY ("horse_id") REFERENCES "horses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
