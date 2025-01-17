"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-12 px-8 mb-4 items-center h-12 border-b">
      <Link href="/">
        <AiFillBug />
      </Link>

      <ul className="flex gap-8">
        {links.map((link) => (
          <Link
            className={`${
              currentPath === link.href
                ? "text-zinc-950 font-semibold"
                : "text-zinc-500"
            }" text-zinc-500 hover:text-zinc-900 transition-colors"`}
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
