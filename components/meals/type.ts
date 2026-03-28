export type Meal = {
  id?: number;
  title: string;
  summary: string;
  slug?: string;
  image: string;
  creator: string;
  creator_email: string;
  instructions: string;
};
export type MealInput = {
  title: string;
  summary: string;
  instructions: string;
  image: File;
  creator: string;
  creator_email: string;
  slug?: string;
};
