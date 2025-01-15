import { useState } from "react";
import UseAuth from "../../Hooks/UseAuth";

const ApplyToTeach = () => {
  const { user } = UseAuth();
  console.log(user);

  const [formData, setFormData] = useState({
    name: user?.displayName,
    email: user?.email,
    experience: "",
    title: "",
    category: "",
  });

  const categories = [
    "Web Development",
    "Digital Marketing",
    "Graphic Design",
    "Data Science",
    "Cybersecurity",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Implement submission logic here, such as sending data to the server
    alert("Your application has been submitted for review!");
  };

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
            value={formData.name}
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
            value={formData.email}
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
            value={formData.experience}
            onChange={handleChange}
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
            value={formData.title}
            onChange={handleChange}
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
            value={formData.category}
            onChange={handleChange}
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
