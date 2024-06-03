"use client";

import Image from "next/image";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Button from "./ui/Button";
import { IoMdFitness } from "react-icons/io";

const Hero = () => {
  return (
    <div className="py-20">
      <div className="flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <Image
            src="/logo.jpg"
            alt="Kulpinski PT Logo"
            width={200}
            height={200}
            className="rounded-full shadow-2xl shadow-red"
          />
          <h2 className="mt-10 max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Kulpinski Personal Training
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="The most powerful weapon on earth is the human soul on fire."
          />

          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Hi, I&apos;m Milos, a Personal Strenght Coach based in Kuwait!
          </p>
          <a href="#about">
            <Button
              title="Show My Work"
              icon={<IoMdFitness size={20} />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
