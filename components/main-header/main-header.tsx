import Link from "next/link";
import logoImg from "@/assets/logo.png";
import { NavLink } from "../nav-link";
import Image from "next/image";
import { MainHeaderBackground } from "./main-header-background";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className="main-header flex items-center justify-between px-4 py-8 md:px-[10%] mb-40">
        <Link
          href="/"
          className="flex items-center justify-center gap-8 text-2xl font-bold uppercase tracking-[0.15rem] font-['Montserrat',_sans-serif] text-[#ddd6cb] no-underline"
        >
          <Image
            src={logoImg}
            priority
            className="h-20 w-20 object-contain [filter:drop-shadow(0_0_0.75rem_rgba(0,0,0,0.5))]"
            alt="A plate with food on it"
          />
          NextLevel Food
        </Link>

        <nav>
          <ul className="flex gap-6 p-0 m-0 list-none text-xl">
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>

            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
