import sql from "better-sqlite3";
import type { Meal, MealInput } from "@/components/meals/type";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
import path from "node:path";
export const db = sql("meals.db"); // export the databases

export const getMeals = async (): Promise<Meal[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Loading meals failed!");
  return db.prepare("SELECT * FROM meals").all() as Meal[];
};

export const getMeal = (slug: string): Meal => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as Meal;
};

export const saveMeal = async (meal: MealInput) => {
  const slug = slugify(meal.title, { lower: true });
  const instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop(); // get the file extension
  const filename = `${slug}.${extension}`; // create a filename with the slug and extension

  const imagePath = `/images/${filename}`;

  // Save the image file
  const stream = fs.createWriteStream(path.join("public/images", filename));
  const bufferedImage = Buffer.from(await meal.image.arrayBuffer());

  await new Promise<void>((resolve, reject) => {
    stream.write(bufferedImage, (error) => {
      if (error) {
        reject(new Error("Failed to save image: " + error.message));
      } else {
        stream.end();
        resolve();
      }
    });
  });

  db.prepare(
    `
      INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
      VALUES
      (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )
  `,
  ).run({
    title: meal.title,
    summary: meal.summary,
    instructions,
    creator: meal.creator,
    creator_email: meal.creator_email,
    image: imagePath,
    slug,
  });
};
