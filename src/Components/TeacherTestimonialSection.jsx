import { useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./TestimonialCard";
import Heading from "./Shared/Heading";
import CustomButtonGroupAsArrows from "./CustomButtonGroupAsArrows";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/UseAxiosPublic";

const TeacherTestimonialSection = () => {
  const axiospublic = useAxiosPublic();

  const { data: testimonial = [] } = useQuery({
    queryKey: ["testimonial"],
    queryFn: async () => {
      const { data } = await axiospublic("/Reviews");
      return data;
    },
  });

  return (
    <section className="bg-light py-10 mt-5">
      <div className="container mx-auto rounded-lg px-4 sm:px-6 lg:px-8">
        <Heading
          Heading={"What our"}
          HeadingSpan={"Teacher say"}
          subHeading={"Explore thinking of the teacher about us"}
        ></Heading>

        <div>
          <Carousel
            additionalTransfrom={0}
            containerClass="container-padding-bottom"
            customButtonGroup={<CustomButtonGroupAsArrows />}
            autoPlaySpeed={3000}
            centerMode={false}
            arrows={false}
            className="py-5 "
            // containerClass=""
            dotListClass=""
            draggable={true}
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            autoPlay
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={true}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 2,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {testimonial?.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
              ></TestimonialCard>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TeacherTestimonialSection;
