DROP TABLE IF EXISTS comments CASCADE;
CREATE TABLE "comments" (
  "id" SERIAL PRIMARY KEY,
  "creator_id" int,
  "post_id" int FOREIGN KEY REFERENCES "posts" ("id"),
  "created_at" timestamp,
  "likes" int,
  "dislikes" int,
  "image" varchar,
  "video" varchar,
  "text" varchar
);