"use client";
import Link from "../link";
import { Pages, Routes } from "@/constants/enums";
import { Button, buttonVariants } from "../ui/button";
import { useState } from "react";
import { Menu, XIcon } from "lucide-react";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const links = [
    {
      id: crypto.randomUUID(),
      title: "Menu",
      href: Routes.MENU,
    },
    {
      id: crypto.randomUUID(),
      title: "About",
      href: Routes.ABOUT,
    },
    {
      id: crypto.randomUUID(),
      title: "Contact",
      href: Routes.CONTACT,
    },
    {
      id: crypto.randomUUID(),
      title: "Login",
      href: `${Routes.AUTH}/${Pages.LOGIN}`,
    },
  ];

  return (
    <nav className="flex-1 flex justify-end items-center">
      {/* Mobile Menu Button */}
      <Button
        variant="secondary"
        size="sm"
        className="lg:hidden focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        onClick={() => setOpenMenu(true)}
      >
        <Menu className="!w-6 !h-6" />
      </Button>

      {/* Menu Items */}
      <ul
        className={`fixed lg:static ${
          openMenu ? "left-0 z-50" : "-left-full"
        } top-0 px-10 py-20 lg:p-0 bg-background lg:bg-transparent transition-all duration-300 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center gap-10 backdrop-blur-sm lg:backdrop-blur-none`}
      >
        {/* Close Button for Mobile */}
        <Button
          variant="secondary"
          size="sm"
          className="absolute top-10 right-10 lg:hidden focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          onClick={() => setOpenMenu(false)}
        >
          <XIcon className="!w-6 !h-6" />
        </Button>

        {/* Links */}
        {links.map((link) => (
          <li key={link.id} className="w-full lg:w-auto text-center">
            <Link
              className={`${
                link.href === `${Routes.AUTH}/${Pages.LOGIN}`
                  ? `${buttonVariants({
                      size: "lg",
                    })} !px-8 !rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 `
                  : "text-accent hover:text-primary duration-200 transition-colors"
              } font-semibold text-lg`}
              href={`/${link.href}`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
