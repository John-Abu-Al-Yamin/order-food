import Link from "@/components/link";
import { buttonVariants } from "@/components/ui/button";
import { Routes } from "@/constants/enums";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="section-gap">
      <div className="container grid grid-cols-1 md:grid-cols-2">
        {/* Left Content */}
        <div className="md:py-12">
          <h1 className="text-4xl font-semibold">Slice into Happiness</h1>
          <p className="text-accent my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            veniam non, itaque, cumque harum dignissimos perferendis et officia.
          </p>
          <div className="flex gap-5">
            <Link
              className={`${buttonVariants({ size: "lg" })} space-x-2 !px-4 !rounded-full uppercase`}
              href={Routes.MENU}
              aria-label="Order Now"
            >
              Order Now

              <ArrowRight className={`!w-5 !h-5`}/>
            </Link>
            <Link
              className={`flex items-center gap-2 space-x-2 !px-4 !rounded-full uppercase`}
              href={Routes.MENU}
              aria-label="Order Now"
            >
              Learn More

              <ArrowRight className={`!w-5 !h-5`}/>
            </Link>
          </div>
        </div>
        {/* Right Content */}
        <div className="relative hidden md:block">
          <Image
            src="/assets/images/pizza.png"
            alt="Pizza Hero"
            fill
            loading="eager"
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
