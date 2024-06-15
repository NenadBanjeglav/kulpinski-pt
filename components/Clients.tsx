import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-red">satisfied clients</span>
      </h1>
      <div className="max-lg: mt-10 flex flex-col items-center justify-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div></div>
      </div>
    </div>
  );
};

export default Clients;
