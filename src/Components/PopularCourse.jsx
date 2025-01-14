import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Heading from "./Shared/Heading";
// import { section } from "motion/react-client";

const PopularCourse = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/Course.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section className="bg-light">
      <div className="container mx-auto rounded-lg p-10 my-5">
        <Heading
          Heading={"Popular Courses"}
          subHeading={"Explore our Popular Courses"}
        ></Heading>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className="py-10"
          containerClass="carousel-container"
          dotListClass=""
          draggable
          focusOnSelect={true}
          infinite
          itemClass="px-4"
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 20,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {data.length > 0 ? (
            data.map((course, index) => (
              <ClassCard key={index} classData={course} />
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
