import sql from "better-sqlite3";
import type { Meal } from "@/components/meals/type";

export const db = sql("meals.db"); // export the databases

export const getMeals = async (): Promise<Meal[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all() as Meal[];
};
