/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { IoLanguageOutline } from "react-icons/io5";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { PiCertificateLight } from "react-icons/pi";
import ReactStars from "react-rating-stars-component";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import LoadingPage from "../LoadingPage";

const CourseDetails = () => {
  const axiosSecure = UseAxiosSecure();
  const { id } = useParams();
  const { data: course = [], isLoading } = useQuery({
    queryKey: ["TeacherClass", id],
    queryFn: async () => {
      const { data } = await axiosSecure(`/allClasses?id=${id}`);
      return data[0];
    },
  });
  console.log(course);

  const navigate = useNavigate();

  const {
    title,
    image,
    name,
    price,
    duration,
    lectures,
    language,
    certificate,
    description,
    enrolledStudents,
    teacherImage,
    rating,
  } = course;

  const [isEnrolled, setIsEnrolled] = useState(false);

  const handleEnroll = () => {
    navigate(`/payments/${id}`);
  };

  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <section className="container mx-auto py-10">
      <div className="flex flex-col lg:flex-row   overflow-hidden md:gap-5">
        {/* Course Image Section */}
        <div className="lg:w-2/3  rounded-lg px-10 py-5 md:py-0">
          <img
            src={image}
            alt={title}
            className="w-full h-64 lg:h-[400px] object-cover rounded-lg"
          />
          <h1 className="text-3xl font-semibold my-3">{title}</h1>
          <div className="flex items-start gap-3  md:items-center md:justify-between flex-col md:flex-row">
            <div className="flex md:items-center gap-3 justify-between  flex-col md:flex-row md:justify-evenly md:gap-5">
              <div className="flex items-center  gap-3">
                <img
                  src={teacherImage}
                  alt={name}
                  className="w-14 h-14 rounded-full border"
                />
                <h1>{name}</h1>
              </div>
              <span className="text-3xl text-primary-light hidden md:block">
                ||
              </span>
              <p className="text-primary">
                {enrolledStudents} Enrolled Students
              </p>
            </div>
            <div>
              <h3 className="flex items-center justify-center gap-1 sm:self-end">
                {rating}
                <span className="">
                  <ReactStars size={30} value={rating} edit={false} />
                </span>
              </h3>
            </div>
          </div>
        </div>

        {/* Course Details Section */}
        <div className="lg:w-1/3 bg-light px-8 py-6 flex flex-col  shadow-lg rounded-lg">
          <div>
            {/* Price */}
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              ${price}
            </h2>

            {/* Other Details */}
            <ul className=" mb-4 space-y-4">
              <hr className="my-2 bg-primary-light h-[2px]" />
              <li className="flex items-center justify-between ">
                <strong className="flex items-center justify-center gap-2">
                  <FaUserTie className="text-primary" />
                  <span>Instructor</span>
                </strong>
                <p>{name}</p>
              </li>
              <hr className="my-2 bg-primary-light h-[2px]" />
              <li className="flex items-center justify-between">
                <strong className="flex items-center justify-center gap-2">
                  <GoClock className="text-primary" />
                  <span>Duration</span>
                </strong>
                <p>{duration}</p>
              </li>
              <hr className="my-2 bg-primary-light h-[2px]" />

              <li className="flex items-center justify-between">
                <strong className="flex items-center justify-center gap-2">
                  <MdOutlineSlowMotionVideo className="text-primary" />
                  <span>Lectures</span>
                </strong>
                <p>{lectures}</p>
              </li>
              <hr className="my-2 bg-primary-light h-[2px]" />

              <li className="flex items-center justify-between">
                <strong className="flex items-center justify-center gap-2">
                  <IoLanguageOutline className="text-primary" />
                  <span>Language</span>
                </strong>
                <p>{language}</p>
              </li>
              <hr className="my-2 bg-primary-light h-[2px]" />

              <li className="flex items-center justify-between">
                <strong className="flex items-center justify-center gap-2">
                  <PiCertificateLight className="text-primary" />
                  <span>Certificate</span>
                </strong>
                <p>{certificate ? "Yes" : "No"}</p>
              </li>
              <hr className="my-2 bg-primary-light h-[2px]" />
            </ul>
          </div>

          {/* Enroll Button */}
          <button
            onClick={handleEnroll}
            className={`btn w-2/3 mx-auto  ${
              isEnrolled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary hover:bg-primary-dark text-white"
            } text-xl  font-bold rounded-lg  transition-all`}
            disabled={isEnrolled}
          >
            {isEnrolled ? "Enrolled" : "Pay Now"}
          </button>
        </div>
      </div>

      {/* Course Description Section */}
      <div className="bg-white rounded-lg shadow-md mt-6 p-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Course Overview
          </h3>
          <p className="text-gray-600">{description}</p>
          <p className="text-gray-600 mt-2">
            <strong>Enrolled Students:</strong> {enrolledStudents}
          </p>
          <p className="text-yellow-500 mt-2">
            <strong>Rating:</strong> {rating} ⭐
          </p>
        </div>
        {/* <div >
          <h3 className="text-2xl font-bold text-gray-800 mt-4">
            Course Description
          </h3>
          <p></p>
        </div> */}
      </div>
    </section>
  );
};

export default CourseDetails;
