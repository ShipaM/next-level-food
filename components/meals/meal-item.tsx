import Link from "next/link";
import Image from "next/image";
import { Meal } from "./type";

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: Meal) {
  return (
    <article className="flex flex-col justify-between h-full rounded shadow-[0_0_12px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 ease-in-out text-[#ddd6cb] bg-linear-to-r from-[#2c1e19] to-[#25200f]">
      <header>
        <div className="relative h-60">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="pt-2 px-4 pb-0">
          <h2 className="m-0 text-2xl font-['Montserrat',sans-serif]">
            {title}
          </h2>
          <p className="m-0 text-xs text-[#cfa69b] italic">by {creator}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <p className="pt-4 px-4 pb-0">{summary}</p>
        <div className="p-4 text-right">
          <Link
            className="inline-block mt-4 py-2 px-4 rounded-lg bg-linear-to-r text-white font-bold no-underline hover:bg-linear-to-r from-[#fd4715] to-[#f9b241] active:bg-linear-to-r active:from-[#fd4715] active:to-[#f9b241] hover:shadow-[0_0_12px_rgba(242,100,18,0.8)] active:shadow-[0_0_12px_rgba(242,100,18,0.8)]"
            href={`/meals/${slug}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
