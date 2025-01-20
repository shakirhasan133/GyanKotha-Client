import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { useForm } from "react-hook-form";

const MyEnrollClassDetails = () => {
  const { id } = useParams(); // Get course ID from the URL
  const [assignments, setAssignments] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    // Simulate fetching assignments for the course
    fetch(`/assignments/${id}.json`) // Replace with your actual API endpoint
      .then((res) => res.json())
      .then((data) => setAssignments(data));
  }, [id]);

  const handleSubmitAssignment = (assignmentId, submissionText) => {
    console.log(`Submitting Assignment ID: ${assignmentId}`);
    console.log(`Submission Text: ${submissionText}`);
    // Here, you can send the submissionText to your backend
  };

  return (
    <div className="min-h-screen bg-bodyColor-light p-6">
      <h1 className="text-3xl font-bold text-primary-dark mb-8 text-center">
        My Enrolled Class Details
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-primary-dark text-white">
            <tr>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Description</th>
              <th className="py-3 px-4 text-left">Deadline</th>
              <th className="py-3 px-4 text-left">Submission</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr
                key={assignment._id}
                className="border-t hover:bg-bodyColor-soft transition-colors"
              >
                <td className="py-3 px-4">{assignment.title}</td>
                <td className="py-3 px-4 text-sm text-muted">
                  {assignment.description}
                </td>
                <td className="py-3 px-4">{assignment.deadline}</td>
                <td className="py-3 px-4">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const submissionText =
                        e.target.elements[`submission-${assignment._id}`].value;
                      handleSubmitAssignment(assignment._id, submissionText);
                      e.target.reset(); // Clear the form after submission
                    }}
                  >
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        name={`submission-${assignment._id}`}
                        placeholder="Enter your submission"
                        className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                      <button
                        type="submit"
                        className="bg-success text-white px-4 py-2 rounded-md hover:bg-success-dark transition-colors"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </td>

                {/* Modal Here */}

                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box w-11/12 max-w-2xl relative">
                    {/* Add Assignment Section */}
                    <div className="bg-white p-6 ">
                      <h2 className="text-xl font-bold text-gray-700 mb-6">
                        Add New Assignment
                      </h2>
                      <form onSubmit={handleSubmit(handleSubmitAssignment)}>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrollClassDetails;
