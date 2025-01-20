import { useMutation, useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useParams } from "react-router-dom";
import LoadingPage from "../../../Pages/LoadingPage";
import { IoPlayCircleOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";
import UseAuth from "../../../Hooks/UseAuth";
import { IoMdCloseCircle } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";

const AssignmentsTable = () => {
  const { id } = useParams();
  const axiosSecure = UseAxiosSecure();
  const { user, loading } = UseAuth();
  const { register, handleSubmit, reset } = useForm();
  const [classId, setClassID] = useState("");
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);

  // Fetch Data
  const { data: assignments = [], isLoading } = useQuery({
    queryKey: ["ClassAssignmentDetails", id, user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/my-enrolled-class-assignment?email=${user?.email}&id=${id}`
      );
      return data;
    },
    enabled: !!user?.email && !!id,
  });

  console.log(assignments);
  console.log(alreadySubmitted);

  const addAssignmentSubmitedData = useMutation({
    mutationFn: async (SubmittedData) => {
      const { data } = await axiosSecure.post(
        "/add-assignment-submission",
        SubmittedData
      );
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      Swal.fire({
        title: "Success",
        text: "Submitted Successfully",
        icon: "success",
      });
      document.getElementById("my_modal_4").close();
    },
    onError: (error) => {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Something went wrong !",
        icon: "error",
      });
    },
  });

  // handleAssignment Submit
  const handleSubmitAssignment = (data) => {
    const assignmentInfo = {
      AssignmentClassId: classId,
      SubmitedDescription: data.description,
      studentEmail: user?.email || "",
    };
    // console.log(assignmentInfo);

    addAssignmentSubmitedData.mutate(assignmentInfo);
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <button className="bg-primary text-white px-4 py-2 flex items-center justify-center gap-1 rounded-md shadow-md hover:bg-primary-dark transition">
          <MdOutlineFeedback /> <span>FeedBack Us</span>
        </button>
        <button className="bg-primary text-white px-4 py-2 rounded-md shadow-md flex items-center gap-2 hover:bg-primary-dark transition">
          Continue watching{" "}
          <span className="material-icons">
            <IoPlayCircleOutline />
          </span>
        </button>
      </div>

      <h1 className="text-2xl font-bold text-center mb-4">Assignments</h1>

      <table className="table-auto w-full text-left border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">#</th>
            <th className="border border-gray-300 px-4 py-2">
              Assignment Title
            </th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Total Marks</th>
            <th className="border border-gray-300 px-4 py-2">Last Date</th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Action
            </th>
          </tr>
        </thead>
        {isLoading ? (
          <LoadingPage />
        ) : (
          <tbody>
            {assignments[0]?.MyEnrolledClassAssignment.map(
              (assignment, index) => (
                <tr key={assignment._id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {assignment.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {assignment.description}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {assignment.marks}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {assignment.deadline}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {(() => {
                      const isAlreadySubmitted = assignment.submitedId.includes(
                        user?.email
                      );

                      return (
                        <button
                          onClick={() => {
                            setClassID(assignment._id);
                            document.getElementById("my_modal_4").showModal();
                          }}
                          disabled={isAlreadySubmitted}
                          className={`px-4 py-2 rounded-md transition ${
                            isAlreadySubmitted
                              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                              : "bg-primary text-white hover:bg-primary-dark"
                          }`}
                        >
                          {isAlreadySubmitted ? "Submitted" : "Submit"}
                        </button>
                      );
                    })()}
                  </td>
                </tr>
              )
            )}
          </tbody>
        )}
      </table>

      {/* Modal */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-2xl relative">
          {/* Add Assignment Section */}
          <div className="bg-white p-6">
            <h2 className="text-xl font-bold text-gray-700 mb-6 text-center">
              Submit Assignment
            </h2>
            <form onSubmit={handleSubmit(handleSubmitAssignment)}>
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
                Submit
              </button>
            </form>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* Close the modal */}
              <button className="absolute top-4 right-4">
                <IoMdCloseCircle className="text-4xl text-primary-darkest" />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignmentsTable;
