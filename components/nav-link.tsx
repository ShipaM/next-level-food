import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="rounded-lg px-4 py-2 font-bold text-[#ddd6cb] no-underline transition-all duration-200 hover:text-transparent hover:[-webkit-text-fill-color:transparent] hover:[-webkit-background-clip:text] hover:bg-gradient-to-r hover:from-[#ff8a05] hover:to-[#f9b331] hover:[text-shadow:0_0_18px_rgba(248,190,42,0.8)] bg-gradient-to-r from-[#ff8a05] to-[#f9b331] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
    >
      {children}
    </Link>
  );
};
