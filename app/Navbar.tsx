"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";

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
            className={classnames({
              "text-zinc-950": currentPath == link.href,
              "text-zinc-500": currentPath !== link.href,
              "hover:text-zinc-900 transition-colors": true,
            })}
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
