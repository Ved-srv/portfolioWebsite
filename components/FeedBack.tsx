import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const FeedBack = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Feedback From
        <span className="text-purple"> Seniors and colleagues</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg mt-10">
          {companies.map(({ id, img, title }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2 ">
              {id === 1 && (
                <img
                  src={img}
                  alt="Staqu Technologies"
                  className="md:w-15 w-10"
                />
              )}
              {id === 1 && (
                <div className="whitespace-nowrap mt-2">{title}</div>
              )}

              {id === 2 && (
                <img
                  src={img}
                  // alt="Council of Scientific and Industrial Research"
                  className="md:w-15 w-10"
                />
              )}
              {id === 2 && <div className="mt-0.8">{title}</div>}

              {id === 3 && (
                <img src={img} alt="Microsoft" className="md:w-15 w-10" />
              )}
              {id === 3 && (
                <div className="whitespace-nowrap mt-2">{title}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
