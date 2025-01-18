import { useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import LoadingPage from "./../LoadingPage";
import { useMutation } from "@tanstack/react-query";
import UseAxiosSecure from "./../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const ApplyToTeach = () => {
  const { user, loading } = UseAuth();
  const [Experience, setExperience] = useState("");
  const [Category, setCategory] = useState("");
  const [title, setTitle] = useState("");

  const axiosSecure = UseAxiosSecure();

  const addTeacher = useMutation({
    mutationFn: async (teacherData) => {
      try {
        const { data } = await axiosSecure.post("/addTeacher", teacherData);
        return data;
      } catch (error) {
        console.log(error);

        throw { message: "An unknown error occurred" };
      }
    },
    onSuccess: (data) => {
      console.log("Response from server:", data);

      if (data?.status === 320) {
        Swal.fire({
          title: "Error",
          text: data?.message || "Teacher already exists or request pending",
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Success",
          text: "Request successfully sent!",
          icon: "success",
        });
      }
    },
    onError: (error) => {
      console.error("Error occurred:", error);

      const errorMessage =
        error?.message || "Something went wrong. Please try again.";
      Swal.fire({
        title: "Error",
        text: errorMessage,
        icon: "error",
      });
    },
  });

  const categories = [
    "Web Development",
    "Digital Marketing",
    "Graphic Design",
    "Data Science",
    "Cybersecurity",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const teacherData = {
      name: user?.displayName,
      qualification: title,
      image: user?.photoURL,
      experience: Experience,
      category: Category,
      email: user?.email,
    };

    addTeacher.mutate(teacherData);
  };

  if (!user) {
    return <LoadingPage></LoadingPage>;
  }

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <div className="min-h-screen bg-light flex items-center justify-center md:py-10">
      <form
        className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full"
        onSubmit={handleSubmit}
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-primary mb-6">
          Apply to Teach on GyanKotha
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={user?.displayName}
            readOnly
            className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={user?.email}
            readOnly
            className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>

        {/* Experience */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Experience
          </label>
          <select
            name="experience"
            // value={formData.experience}
            onChange={(e) => setExperience(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md bg-gray-50"
          >
            <option value="">Select Experience Level</option>
            <option value="beginner">Beginner</option>
            <option value="mid-level">Mid-Level</option>
            <option value="experienced">Experienced</option>
          </select>
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            // value={formData.title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter your title (e.g., Full-Stack Developer)"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Category
          </label>
          <select
            name="category"
            // value={formData.category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md bg-gray-50"
          >
            <option value="">Select a Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-md font-medium transition-all"
        >
          Submit for Review
        </button>
      </form>
    </div>
  );
};

export default ApplyToTeach;
