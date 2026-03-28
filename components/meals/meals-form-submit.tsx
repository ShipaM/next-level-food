"use client";

import { useFormStatus } from "react-dom";

export const MealsFormSubmit = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="border-0 py-3 px-8 bg-linear-to-r from-[#f9572a] to-[#ff9b05] text-white rounded-sm cursor-pointer text-xl shadow-[0_2px_5px_rgba(0,0,0,0.3)] hover:bg-linear-to-r hover:from-[#fd4715] hover:to-[#f9b241] disabled:opacity-50 disabled:cursor-not-allowed"
      type="submit"
      disabled={pending}
    >
      {pending ? "Loading..." : "Share Meal"}
    </button>
  );
};
