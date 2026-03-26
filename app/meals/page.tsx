import MealsGrid from "@/components/meals";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";
import MealsloadingPage from "./loading-out";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

const MealsPage = () => {
  return (
    <>
      <header className="gap-12 my-12 mb-20 mx-auto w-[90%] max-w-300 text-[#ddd6cb] text-2xl">
        <h1 className="font-['Montserrat',sans-serif] text-6xl font-bold mb-10">
          Delicious meals, created{" "}
          <span className="bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            by you
          </span>
        </h1>
        <p className="m-0">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p>
          <Link
            className="inline-block mt-4 py-2 px-4 rounded-lg bg-linear-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline"
            href="/meals/share"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<MealsloadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
