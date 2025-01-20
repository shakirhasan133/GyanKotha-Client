import ClassCard from "./ClassCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Heading from "./Shared/Heading";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/UseAxiosPublic";

const PopularCourse = () => {
  const axiospublic = useAxiosPublic();

  const { data: popularClass = [], isLoading } = useQuery({
    queryKey: ["popularClass"],
    queryFn: async () => {
      const { data } = await axiospublic.get("/popularClass");
      return data;
    },
  });

  return (
    <section className="bg-light py-10 mt-5">
      <div className="container mx-auto rounded-lg px-4 sm:px-6 lg:px-8">
        {/* Heading Component */}
        <Heading
          Heading={"Popular"}
          subHeading={"Explore our Popular"}
          HeadingSpan={"Courses"}
        />
        {isLoading && (
          <span className="loading loading-dots loading-lg text-primary-darkest"></span>
        )}

        {/* Carousel Component */}
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className="py-10"
          containerClass="carousel-container"
          draggable
          infinite
          itemClass="flex justify-center px-4"
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          }}
          rewind={false}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {popularClass.length > 0 ? (
            popularClass.map((course, index) => (
              <div key={index} className="flex justify-center items-center">
                {/* Ensures consistent card size */}
                <ClassCard
                  className="max-w-sm w-full h-72"
                  classData={course}
                />
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 col-span-3">
              No courses available at the moment.
            </div>
          )}
        </Carousel>
      </div>
    </section>
  );
};

export default PopularCourse;
