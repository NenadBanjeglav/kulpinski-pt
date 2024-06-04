import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((el) => (
          <BentoGridItem
            key={el.id}
            id={el.id}
            title={el.title}
            description={el.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
