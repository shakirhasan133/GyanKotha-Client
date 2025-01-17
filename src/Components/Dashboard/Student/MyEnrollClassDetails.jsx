import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MyEnrollClassDetails = () => {
  const { id } = useParams(); // Get course ID from the URL
  const [assignments, setAssignments] = useState([]);

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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrollClassDetails;
