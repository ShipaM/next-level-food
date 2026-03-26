export type Meal = {
  id?: number;
  title: string;
  summary: string;
  slug: string;
  image: string;
  creator: string;
  creator_email: string;
  instructions: string;
};

export type MealInput = Omit<Meal, "slug" | "image"> & {
  image: File;
  slug?: string;
};
