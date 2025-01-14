import { IoSchoolOutline } from "react-icons/io5";
import Button from "./Shared/Button";
import { motion } from "framer-motion";
import teacher from "../assets/teacher.png";

const JoinAsTeacher = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
          <h2 className="text-3xl md:text-5xl font-bold">
            Share Your Knowledge. <br />
            <span className="text-primary">Inspire Future Leaders.</span>
          </h2>
          <p className="text-gray-600">
            Join our platform as a teacher and make a difference. Create
            courses, connect with learners, and inspire them to achieve their
            dreams.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button label="Become a Teacher" filled></Button>
          </div>
        </div>

        {/* Image and Icon */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          {/* Floating Badge */}
          <motion.div
            initial={{ x: 0, opacity: 20 }}
            animate={{
              x: ["0%", "50%", "0%"],
              opacity: ["20%", "100%", "20%"],
            }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            className="absolute top-[-10%] md:top-[5%] h-[100px] w-[100px] md:h-[250px] md:w-[250px] bg-primary rounded-full flex flex-col justify-center items-center p-5 shadow-lg"
          >
            <IoSchoolOutline className="text-white text-4xl md:text-6xl" />
            <p className="text-white text-sm md:text-md font-semibold">
              Teach Today
            </p>
          </motion.div>
          {/* Illustration Image */}
          <img
            src={teacher}
            alt="Inspiring Teachers "
            className="w-full max-w-[400px] md:max-w-[500px] z-20"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinAsTeacher;
