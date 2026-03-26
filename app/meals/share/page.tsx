import ImagePicker from "@/components/meals/image-picker";
import { shareMeal } from "../actions";

const ShareMealPage = () => {
  return (
    <>
      <header className="gap-12 my-12 mb-20 mx-auto w-[90%] max-w-300 text-[#ddd6cb] text-2xl">
        <h1 className="font-['Montserrat',sans-serif] text-6xl font-bold mb-10">
          Share your{" "}
          <span className="bg-linear-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="w-[90%] max-w-300 my-12 mx-auto text-white">
        <form className="max-w-200" action={shareMeal}>
          <div className="flex gap-4">
            <p className="w-full mb-8">
              <label
                className="block mb-2 text-base font-[Montserrat,sans-serif] uppercase text-[#b3aea5] font-bold"
                htmlFor="name"
              >
                Your name
              </label>
              <input
                className="block w-full py-2 px-4 rounded border border-[#454952] bg-[#1c2027] text-xl font-[Montserrat,sans-serif] text-[#ddd6cb]  focus:outline-[#f99f2a] focus:bg-[#1f252d]"
                type="text"
                id="name"
                name="name"
                required
              />
            </p>
            <p className="w-full mb-8">
              <label
                className="block mb-2 text-base font-[Montserrat,sans-serif] uppercase text-[#b3aea5] font-bold"
                htmlFor="email"
              >
                Your email
              </label>
              <input
                className="block w-full py-2 px-4 rounded border border-[#454952] bg-[#1c2027] text-xl font-[Montserrat,sans-serif] text-[#ddd6cb]  focus:outline-[#f99f2a] focus:bg-[#1f252d]"
                type="email"
                id="email"
                name="email"
                required
              />
            </p>
          </div>
          <p className="w-full mb-8">
            <label
              className="block mb-2 text-base font-[Montserrat,sans-serif] uppercase text-[#b3aea5] font-bold"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="block w-full py-2 px-4 rounded border border-[#454952] bg-[#1c2027] text-xl font-[Montserrat,sans-serif] text-[#ddd6cb]  focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              type="text"
              id="title"
              name="title"
              required
            />
          </p>
          <p className="w-full mb-8">
            <label
              className="block mb-2 text-base font-[Montserrat,sans-serif] uppercase text-[#b3aea5] font-bold  focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              htmlFor="summary"
            >
              Short Summary
            </label>
            <input
              className="block w-full py-2 px-4 rounded border border-[#454952] bg-[#1c2027] text-xl font-[Montserrat,sans-serif] text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              type="text"
              id="summary"
              name="summary"
              required
            />
          </p>
          <p className="w-full mb-8">
            <label
              className="block mb-2 text-base font-[Montserrat,sans-serif] uppercase text-[#b3aea5] font-bold  focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              htmlFor="instructions"
            >
              Instructions
            </label>
            <textarea
              className="block w-full py-2 px-4 rounded border border-[#454952] bg-[#1c2027] text-xl font-[Montserrat,sans-serif] text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker label="Image" name="image" />
          <p className="text-right">
            <button
              className="border-0 py-3 px-8 bg-linear-to-r from-[#f9572a] to-[#ff9b05] text-white rounded-sm cursor-pointer text-xl shadow-[0_2px_5px_rgba(0,0,0,0.3)] hover:bg-linear-to-r hover:from-[#fd4715] hover:to-[#f9b241] disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
            >
              Share Meal
            </button>
          </p>
        </form>
      </main>
    </>
  );
};

export default ShareMealPage;
