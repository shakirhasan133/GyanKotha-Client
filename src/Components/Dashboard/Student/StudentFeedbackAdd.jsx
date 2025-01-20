import { useMutation } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const StudentFeedbackAdd = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const AddReview = useMutation({
    mutationFn: async (reviewData) => {
      const { data } = await axiosSecure.post("/addStudentReview", reviewData);
      return data;
    },
    onSuccess: () => {
      //   console.log(data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Review added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    onError: (error) => {
      console.log(error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Something went wrong",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const message = form.message.value;
    const designation = form.designation.value;
    const name = user?.displayName;
    const image = user?.photoURL;

    const reviewData = { image, name, message, designation };

    AddReview.mutate(reviewData);
    form.reset();
  };

  return (
    <div className="min-h-screen bg-bodyColor-light p-6">
      <h1 className="text-3xl font-bold text-primary-dark mb-8 text-center">
        Add a Review
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg"
      >
        {/* Message */}
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-primary-dark mb-2"
          >
            Your Review
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your review here..."
            rows={5}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Designation */}
        <div className="mb-6">
          <label
            htmlFor="designation"
            className="block text-sm font-medium text-primary-dark mb-2"
          >
            Designation
          </label>
          <input
            type="text"
            id="designation"
            name="designation"
            placeholder="Enter your designation (e.g., Instructor, Programming Hero)"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary-dark text-white px-4 py-2 rounded-md hover:bg-success-dark transition-colors"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default StudentFeedbackAdd;
