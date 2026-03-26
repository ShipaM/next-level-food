import { NavLink } from "@/components/nav-link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-[#ddd6cb]">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Meal not found</p>
      <NavLink href="/meals">Back to Meals</NavLink>
    </div>
  );
};

export default NotFound;
