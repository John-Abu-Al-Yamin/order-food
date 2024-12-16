import Link from "../link";
import { Routes } from "@/constants/enums";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="py-4 md:py-6">
      <div className="container flex items-center justify-between">
        <Link className="text-primary font-semibold text-2xl" href={Routes.ROOT}> 🍕 Pizza</Link>
        <Navbar />
      </div>
    </header>
  );
};
