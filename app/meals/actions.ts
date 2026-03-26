"use server";

import { saveMeal } from "@/lib/meals";
import type { MealInput } from "@/components/meals/type";

export async function shareMeal(formData: FormData) {
  const meal: MealInput = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    image: formData.get("image") as File,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
    instructions: formData.get("instructions") as string,
  };

  await saveMeal(meal);
}
