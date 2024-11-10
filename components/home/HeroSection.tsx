import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@nextui-org/react";
import React from "react";

import MusicPlayerCard from "@/components/musicPlayerCard/MusicPlayerCard";

const HeroSection = () => {
  return (
    <section className="z-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6">
      <Button
        className="h-9 overflow-hidden border-1 border-default-100 bg-default-50 px-[18px] py-2 text-small font-normal leading-5 text-default-500"
        endContent={
          <Icon
            className="flex-none outline-none [&>path]:stroke-[2]"
            icon="solar:arrow-right-linear"
            width={20}
          />
        }
        radius="full"
        variant="bordered"
      >
        New onboarding experience
      </Button>
      <div className="text-center text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
        <div className="bg-hero-section-title bg-clip-text text-transparent">
          Be More Than Just
          <br />
          Japanese Thai Dictionary.
        </div>
      </div>
      <p className="text-center font-normal leading-7 text-default-500 sm:w-[466px] sm:text-[18px]">
        Easiest and Minimal Japanese Thai Dictionary.
        <br /> Inspired by KAF - 花譜
      </p>
      {/* <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
        <Button
          className="h-10 w-[163px] bg-default-foreground px-[16px] py-[10px] text-small font-medium leading-5 text-background"
          radius="full"
        >
          Get Started
        </Button>
        <Button
          className="h-10 w-[163px] border-1 border-default-100 px-[16px] py-[10px] text-small font-medium leading-5"
          endContent={
            <span className="pointer-events-none flex size-[22px] items-center justify-center rounded-full bg-default-100">
              <Icon
                className="text-default-500 [&>path]:stroke-[1.5]"
                icon="solar:arrow-right-linear"
                width={16}
              />
            </span>
          }
          radius="full"
          variant="bordered"
        >
          See Demo
        </Button>
      </div> */}
      <MusicPlayerCard
        title="ゲシュタルト - GESTALT"
        album="GSA"
        singer="花譜 - KAF"
        duration={199}
      />
    </section>
  );
};

export default HeroSection;
