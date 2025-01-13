import Button from "./Shared/Button";
import coverPhoto from "../assets/coverphoto.png";

import { IoBook } from "react-icons/io5";

const Banar = () => {
  return (
    <section className="max-h-[100vh] overflow-hidden">
      <div className="flex justify-between">
        {/* Heading */}
        <div className="w-1/2  py-14 space-y-4">
          <h1 className="text-xl">Start your favourite course</h1>

          <h3 className="text-5xl font-bold w-4/5 py-3">
            Now, learn from anywhere and build your{" "}
            <span className="text-primary">bright career</span>
          </h3>
          <p className="w-4/5">
            It has survived not only five centuries but also the leap into
            electronic typesetting.
          </p>
          <Button label={"Start a Course"} filled></Button>
        </div>

        {/* Image */}
        <div className="relative w-1/2  ">
          <div className="h-[150px] w-[150px] absolute top-[15%] -left-4 rounded-full bg-primary flex flex-col justify-center items-center p-5">
            <IoBook className="text-white mb-1 text-4xl font-bold"></IoBook>
            <h1 className="text-2xl font-bold text-white">100</h1>
            <p className="text-md text-white font-semibold">Courses</p>
          </div>
          <img src={coverPhoto} alt="" className="w-[100vh] " />
        </div>
      </div>
    </section>
  );
};

export default Banar;
