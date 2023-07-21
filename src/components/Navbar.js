"use client";
import { links } from "@/libs/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className="flex flex-col items-center xl:justify-center gap-y-4 fixed 
    h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen
    "
    >
      <div
        className="flex w-full xl:flex-col items-center justify-between
      xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[100px]
      xl:h-max py-8 bg-red-500/20 backdrop-blur-sm text-3xl xl:text-2xl
      xl:rounded-full
      "
      >
        {links.map((link, index) => (
          <Link
            className={`${
              link.path === pathname && "text-accent"
            } relative flex items-center hover:text-accent`}
            key={index}
            href={link.path}
          >
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
