/* eslint-disable react/prop-types */
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Button from "../../Shared/Button";
import UseAuth from "../../../Hooks/UseAuth";
// import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import Swal from "sweetalert2";

const ClassProgressAndAssignment = () => {
  const axiosSecure = UseAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const { user } = UseAuth();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  // Fetch class progress data
  const { data: classStatistics, refetch: latestState } = useQuery({
    queryKey: ["classStatistics", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/ClassStatsData?id=${id}`);
      return data;
    },
  });
  // Fetch class progress data
  const { data: classProgress } = useQuery({
    queryKey: ["ClassProgess", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/allClasses?id=${id}`);
      return data[0];
    },
  });
  // Fetch class progress data
  const {
    data: assignments,
    refetch: updateass,
    isLoading,
  } = useQuery({
    queryKey: ["AssignmentData", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/AssignmentDataSpecific?email=${user?.email}&id=${id}`
      );
      return data;
    },
  });

  // Add assignment
  const mutation = useMutation({
    mutationFn: async (assignmentData) => {
      const res = await axiosSecure.post(`/addAssignment`, assignmentData);
      return res.data;
    },
    onSuccess: () => {
      updateass();
      latestState();
      reset();
      document.getElementById("my_modal_4").close();
      Swal.fire({
        title: "Success",
        text: "The Course Added Successfully",
        icon: "success",
      });
    },
    onError: (error) => {
      console.log(error.message);
      Toast.fire({
        icon: "error",
        title: "Something went wrong",
      });
    },
  });

  const onSubmit = (data) => {
    if (data.marks <= 0) {
      Toast.fire({
        icon: "error",
        title: "Marks must be greater than 0",
      });
      return;
    }
    mutation.mutate({
      title: data.title,
      deadline: data.deadline,
      marks: Number(data.marks),
      description: data.description,
      email: user?.email,
      classId: classProgress?._id,
    });
  };

  // console.log(classStatistics.totalSubmitted.submits);
  // // const { CountAssignment } = classStatistics;

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-primary mb-6 text-center">
        Class Progress & Add Assignment
      </h1>

      {/* Class Progress Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Total Enrollment Card */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Total Enrollment
          </h2>
          <p className="text-3xl font-bold text-primary">
            {classStatistics?.EnrolledStudent.enrolledStudents || 0}
          </p>
        </div>

        {/* Total Assignment Card */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Total Assignments
          </h2>
          <p className="text-3xl font-bold text-primary">
            {classStatistics?.CountAssignment || 0}
          </p>
        </div>

        {/* Total Assignment Submissions Card */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Total Assignment Submissions
          </h2>
          <p className="text-3xl font-bold text-primary">
            {classStatistics?.totalSubmitted?.submits || 0}
          </p>
        </div>
      </div>

      {/* action Button */}
      <div className="flex items-center justify-center md:flex-row flex-col gap-3 space-y-3 md:space-y-0 my-3 md:my-5">
        <Button
          label={"Create Assignment"}
          filled
          onClick={() => document.getElementById("my_modal_4").showModal()}
        ></Button>
        <Button label={"Manage Video"} filled></Button>
      </div>

      {/* Assignment list Table */}
      <div className="overflow-x-auto bg-white p-6 shadow-lg rounded-lg mt-5">
        <h2 className="text-xl font-bold text-center mb-6">Assignments</h2>
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 border border-gray-200 text-left">
                Assignment Title
              </th>
              <th className="px-6 py-4 border border-gray-200 text-left">
                Description
              </th>
              <th className="px-6 py-4 border border-gray-200 text-left">
                Marks
              </th>
              <th className="px-6 py-4 border border-gray-200 text-left">
                Submits
              </th>
              <th className="px-6 py-4 border border-gray-200 text-left">
                Last Date
              </th>
              <th className=" hidden px-6 py-4 border border-gray-200 text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {isLoading && (
              <div className="min-h-[30vh]  flex justify-center  items-center">
                <span className="loading loading-bars loading-xs bg-primary"></span>
              </div>
            )}
            {assignments?.length > 0 ? (
              assignments?.map((assignment) => (
                <tr key={assignment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 border border-gray-200">
                    {assignment.title}
                  </td>
                  <td className="px-6 py-4 border border-gray-200">
                    {assignment.description}
                  </td>
                  <td className="px-6 py-4 border border-gray-200">
                    {assignment.marks}
                  </td>
                  <td className="px-6 py-4 border border-gray-200">
                    {assignment.submits}
                  </td>
                  <td className="px-6 py-4 border border-gray-200">
                    {assignment.deadline}
                  </td>
                  <td className=" hidden px-6 py-4  border-gray-200 text-center  items-center justify-center">
                    <button
                      onClick={() => console.log(`Edit ${assignment.id}`)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                      title="Edit"
                    >
                      <CiEdit />
                    </button>
                    <button
                      onClick={() => console.log(`Delete ${assignment.id}`)}
                      className="bg-red-500 text-white px-4 py-2 ml-2 rounded hover:bg-red-600 transition-colors"
                      title="Delete"
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center px-6 py-4 border border-gray-200 text-gray-500"
                >
                  No assignments available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-2xl relative">
          {/* Add Assignment Section */}
          <div className="bg-white p-6 ">
            <h2 className="text-xl font-bold text-gray-700 mb-6">
              Add New Assignment
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-4">
                <div className="">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-600 mb-2"
                  >
                    Assignment Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    {...register("title", { required: true })}
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="Enter assignment title"
                  />
                </div>

                <div className="md:flex items-center justify-between gap-2 w-full">
                  <div>
                    <label
                      htmlFor="deadline"
                      className="block text-sm font-medium text-gray-600 mb-2"
                    >
                      Deadline
                    </label>
                    <input
                      type="date"
                      id="deadline"
                      {...register("deadline", { required: true })}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="marks"
                      className="block text-sm font-medium text-gray-600 mb-2"
                    >
                      Total Marks
                    </label>
                    <input
                      type="number"
                      id="marks"
                      {...register("marks", { required: true })}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Assignment Description
                </label>
                <textarea
                  id="description"
                  {...register("description", { required: true })}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter assignment description"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                Add Assignment
              </button>
            </form>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="  absolute top-4 right-4  ">
                <IoMdCloseCircle className="text-4xl text-error" />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ClassProgressAndAssignment;
