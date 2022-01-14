CREATE TABLE "public"."Role" (
  id SERIAL PRIMARY KEY,
  title TEXT
);

CREATE TABLE "public"."User" (
  id SERIAL PRIMARY KEY,
  name TEXT,
  "roleId" INTEGER,
  CONSTRAINT role FOREIGN KEY ("roleId") REFERENCES "public"."Role" (id)
);
