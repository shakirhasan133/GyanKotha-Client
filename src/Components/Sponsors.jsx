import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Sponsors = () => {
  return (
    <div className="bg-light rounded-lg p-14 my-5">
      <h1 className="font-bold text-secondary text-4xl">
        Best Supporter of GyanKotha
      </h1>

      <div>
        <Carousel
          additionalTransfrom={0}
          autoPlaySpeed={3000}
          centerMode={false}
          className="py-5 "
          containerClass=""
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          autoPlay
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
              items: 8,
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
          <img
            src="https://htmldemo.net/edule/eduLe/assets/images/brand/brand-03.png"
            alt=""
          />
          <img
            src="https://htmldemo.net/edule/eduLe/assets/images/brand/brand-03.png"
            alt=""
          />
          <img
            src="https://htmldemo.net/edule/eduLe/assets/images/brand/brand-03.png"
            alt=""
          />
          <img
            src="https://htmldemo.net/edule/eduLe/assets/images/brand/brand-03.png"
            alt=""
          />
          <img
            src="https://htmldemo.net/edule/eduLe/assets/images/brand/brand-03.png"
            alt=""
          />
          <img
            src="https://htmldemo.net/edule/eduLe/assets/images/brand/brand-03.png"
            alt=""
          />
          <img
            src="https://htmldemo.net/edule/eduLe/assets/images/brand/brand-03.png"
            alt=""
          />
          <img
            src="https://htmldemo.net/edule/eduLe/assets/images/brand/brand-03.png"
            alt=""
          />
          <img
            src="https://htmldemo.net/edule/eduLe/assets/images/brand/brand-03.png"
            alt=""
          />
          <img
            src="https://htmldemo.net/edule/eduLe/assets/images/brand/brand-03.png"
            alt=""
          />
          <img
            src="https://htmldemo.net/edule/eduLe/assets/images/brand/brand-03.png"
            alt=""
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Sponsors;
