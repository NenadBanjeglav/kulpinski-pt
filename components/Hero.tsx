"use client";

import Image from "next/image";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Button from "./ui/Button";
import ButtonSecondary from "./ui/ButtonSecondary";

const Hero = () => {
  return (
    <div className="pb-20 pt-16">
      <div className="flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <Image
            src="/logo.jpg"
            alt="Kulpinski PT Logo"
            width={200}
            height={200}
            className="rounded-full"
          />
          <h2 className="mt-10 max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Kulpinski Personal Training
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="The most powerful weapon on earth is the human soul on fire."
          />

          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            I&apos;m Milos, a Personal Strenght Coach based in Kuwait!
          </p>
          <div className="mt-5 flex flex-col gap-10 md:flex-row">
            <a href="#contact">
              <Button title="Get In Touch" />
            </a>
            <a href="#about">
              <ButtonSecondary title="Find Out More" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
