"use client";

import Image from "next/image";
import { MoonStar, Sun } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useTheme } from "next-themes";

export default function Header() {
  const currentRoute = usePathname();
  const { theme, setTheme } = useTheme();

  const onClickTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="flex flex-row justify-between items-center">
      <div className="flex flex-col gap-4 items-center md:flex-row">
        <Image src="/images/logo.png" width={200} height={200} alt="logo" />
        <ul className="flex flex-row gap-8 items-center mt-4 ml-8 text-blue-500">
          <li className={clsx(currentRoute === "/pokemon" && "font-bold")}>
            <Link href="/pokemon">All</Link>
          </li>
          <li
            className={clsx(
              currentRoute === "/pokemon/favourite" && "font-bold"
            )}
          >
            <Link href="/pokemon/favourite">Favourite</Link>
          </li>
          <li
            className={clsx(currentRoute === "/pokemon/search" && "font-bold")}
          >
            <Link href="/pokemon/search">Search</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row gap-6 items-center cursor-pointer">
        {theme === "dark" ? (
          <MoonStar
            className="text-blue-500"
            size={24}
            onClick={onClickTheme}
          />
        ) : (
          <Sun className="text-blue-500" size={24} onClick={onClickTheme} />
        )}
        <Avatar>
          <AvatarImage src="https://github.com/ihsaninh.png" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
