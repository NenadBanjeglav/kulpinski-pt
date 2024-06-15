import React from "react";
import Button from "./ui/Button";
import { MdOutlineEmail } from "react-icons/md";
import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pb-10 pt-20" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-red">your strength</span> to the
          next level?
        </h1>
        <p className="my-5 text-center text-white-200 md:mt-10">
          Reach out to me today and let&apos;s discuss how I can help you reach
          your goals!
        </p>
        <a href="mailto:nenadmobmail@gmail.com">
          <Button
            title="Get In Touch"
            icon={<MdOutlineEmail size={20} />}
            position="right"
          />
        </a>
      </div>
      <div className="mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal ">
          Copyright © 2024 Milos Kulpinski
        </p>
        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((profile) => (
            <a
              href={profile.link}
              target="_blank"
              className="flex size-10 cursor-pointer items-center justify-center saturate-150 backdrop-blur-lg"
              key={profile.id}
            >
              <Image
                src={profile.img}
                alt={profile.img}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
