import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";

const MealDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const meal = await getMeal(slug);

  if (!meal) {
    notFound();
  }

  return (
    <>
      <header className="gap-12 m-auto w-[90%] max-w-7xl py-8 px-4 flex">
        <div className="relative w-120 h-80">
          <Image
            fill
            sizes="(max-width: 768px) 90vw, 30rem"
            src={meal.image}
            alt={meal.title}
            className="object-cover rounded-lg shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] animate-[fade-slide-in-from-right_1s_ease-out_forwards]"
          />
        </div>
        <div className="pt-2 pb-0 px-4 text-[#ddd6cb] max-w-160 animate-[fade-slide-in-from-right_1s_ease-out_forwards]">
          <h1 className="m-0 text-[3.5rem] uppercase font-[Montserrat,sans-serif] [text-shadow:0_0_0.5rem_rgba(0,0,0,0.5)]">
            {meal.title}
          </h1>
          <p className="text-2xl text-[#cfa69b] italic">
            by{" "}
            <a
              className="bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent hover:[text-shadow:0_0_18px_rgba(248,190,42,0.8)] active:[text-shadow:0_0_18px_rgba(248,190,42,0.8)]"
              href={`mailto:${meal.creator_email}`}
            >
              {meal.creator}
            </a>
          </p>
          <p className="text-2xl">{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className="text-xl leading-normal bg-[#6e6464] text-[#13120f] rounded-lg shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] p-8 max-w-240 m-8 mx-auto animate-[fade-slide-in-from-bottom_1s_ease-out_forwards]"
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        />
      </main>
    </>
  );
};

export default MealDetailsPage;
