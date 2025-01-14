import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Heading from "./Shared/Heading";

const Sponsors = () => {
  return (
    <div className="bg-bodyColor-dark rounded-lg px-10 py-5">
      <Heading
        Heading={"Best Supporter of "}
        HeadingSpan={"GyanKotha"}
        subHeading={"Our Sponsors"}
      ></Heading>

      <div>
        <Carousel
          additionalTransfrom={0}
          autoPlaySpeed={3000}
          arrows={false}
          centerMode={false}
          autoPlay={true}
          className="py-5 "
          containerClass=""
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass="flex justify-center items-center"
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
              items: 5,
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
          <div className="no-select w-[100px]">
            <img
              src="https://htmldemo.net/edule/eduLe/assets/images/brand/brand-03.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="no-select w-[100px]">
            <img
              src="https://assignmentb9a12.web.app/companies/company4.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="no-select w-[100px]">
            <img
              src="https://htmldemo.net/edule/eduLe/assets/images/brand/brand-01.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="no-select w-[100px]">
            <img
              src="https://htmldemo.net/edule/eduLe/assets/images/brand/brand-02.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="no-select w-[100px]">
            <img
              src="https://htmldemo.net/edule/eduLe/assets/images/brand/brand-05.png"
              alt=""
              className="w-full h-full"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Sponsors;
