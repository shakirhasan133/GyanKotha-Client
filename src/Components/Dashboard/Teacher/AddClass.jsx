import { useState } from "react";
import UseAuth from "../../../Hooks/UseAuth";

const AddClass = () => {
  const { user } = UseAuth(); // Assuming 'user' contains teacher info
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Class Data:", {
      ...formData,
      name: user.name,
      email: user.email,
    });
    alert("Class added successfully!");
  };

  return (
    <div className="bg-bodyColor-light min-h-screen flex justify-center items-center md:py-10">
      <div className="bg-bodyColor-dark shadow-md rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-primary-dark mb-6 text-center">
          Add a New Class
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-accent-darkest font-medium mb-2"
            >
              Class Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter class title"
              className="w-full border border-light-dark rounded-md py-2 px-3 focus:outline-none focus:border-primary-dark"
              required
            />
          </div>

          {/* Name (Non-editable) */}
          <div>
            <label
              htmlFor="name"
              className="block text-accent-darkest font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={user.displayName}
              readOnly
              className="w-full cursor-not-allowed border border-light-dark rounded-md py-2 px-3 "
            />
          </div>

          {/* Email (Non-editable) */}
          <div>
            <label
              htmlFor="email"
              className="block text-accent-darkest font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={user.email}
              readOnly
              className="w-full cursor-not-allowed border border-light-dark rounded-md py-2 px-3 text-muted-dark"
            />
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-accent-darkest font-medium mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter class price"
              className="w-full border border-light-dark rounded-md py-2 px-3 focus:outline-none focus:border-primary-dark"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-accent-darkest font-medium mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter class description"
              rows="4"
              className="w-full border border-light-dark rounded-md py-2 px-3 focus:outline-none focus:border-primary-dark"
              required
            ></textarea>
          </div>

          {/* Image */}
          <div>
            <label
              htmlFor="image"
              className="block text-muted-dark font-medium mb-2"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              className="w-full border border-light-dark rounded-md py-2 px-3 focus:outline-none focus:border-primary-dark"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary-dark to-primary text-white font-medium py-2 rounded-md shadow-btn hover:from-primary hover:to-primary-dark transition-all"
            >
              Add Class
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
