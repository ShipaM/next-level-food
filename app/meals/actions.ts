"use server";

import { MealInput } from "@/components/meals/type";
import { saveMeal } from "@/lib/meals";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const isInvalidText = (text: string) => text.length === 0;

type State = {
  error?: string;
};

export async function shareMeal(
  _prevState: State,
  formData: FormData,
): Promise<State> {
  const title = String(formData.get("title")).trim();
  const summary = String(formData.get("summary")).trim();
  const instructions = String(formData.get("instructions")).trim();
  const creator = String(formData.get("name")).trim();
  const creator_email = String(formData.get("email")).trim();
  const image = formData.get("image");

  if (
    isInvalidText(title) ||
    isInvalidText(summary) ||
    isInvalidText(instructions) ||
    isInvalidText(creator) ||
    isInvalidText(creator_email) ||
    !creator_email.includes("@") ||
    !(image instanceof File) ||
    image.size === 0
  ) {
    return { error: "Invalid inputs" };
  }

  const meal: MealInput = {
    title,
    summary,
    instructions,
    image,
    creator,
    creator_email,
  };

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
