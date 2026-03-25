"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const NavLink = ({ href, children }: NavLinkProps) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`rounded-lg px-4 py-2 font-bold no-underline transition-all duration-200
                    ${
                      path.startsWith(href)
                        ? "bg-linear-to-r from-[#ff8a05] to-[#f9b331] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
                        : "text-[#ddd6cb]"
                    }
                    hover:bg-linear-to-r hover:from-[#ff8a05] hover:to-[#f9b331]
                    hover:bg-clip-text hover:text-transparent
                    hover:[-webkit-background-clip:text] hover:[-webkit-text-fill-color:transparent]
                    hover:[text-shadow:0_0_18px_rgba(248,190,42,0.8)]
                `}
    >
      {children}
    </Link>
  );
};
