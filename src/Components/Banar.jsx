import Button from "./Shared/Button";
import coverPhoto from "../assets/coverphoto.png";
import { IoBook } from "react-icons/io5";

const Banar = () => {
  return (
    <section className="max-h-[100vh] overflow-hidden px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Heading */}
        <div className="w-full md:w-1/2 py-10 space-y-4 text-center md:text-left">
          <h1 className="text-lg md:text-xl">Start your favourite course</h1>

          <h3 className="text-3xl md:text-5xl font-bold md:w-4/5 py-3">
            Now, learn from anywhere and build your{" "}
            <span className="text-primary">bright career</span>
          </h3>
          <p className="md:w-4/5">
            It has survived not only five centuries but also the leap into
            electronic typesetting.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button label={"Start a Course"} filled></Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
          <div className="h-[100px] w-[100px] md:h-[150px] md:w-[150px] absolute top-[5%] md:top-[15%] -left-4 md:-left-8 rounded-full bg-primary flex flex-col justify-center items-center p-3 md:p-5">
            <IoBook className="text-white mb-1 text-2xl md:text-4xl font-bold"></IoBook>
            <h1 className="text-xl md:text-2xl font-bold text-white">100</h1>
            <p className="text-sm md:text-md text-white font-semibold">
              Courses
            </p>
          </div>
          <img
            src={coverPhoto}
            alt="Cover"
            className="w-full max-w-[500px] md:max-w-[100vh]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banar;
