import { useForm } from "react-hook-form";
import UseAuth from "../../../Hooks/UseAuth";
import { useState } from "react";
import { ImageUpload } from "../../../Api/utils";
import { useMutation } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = UseAuth();
  const { register, handleSubmit, reset } = useForm();
  const [imageUrl, SetImageUrl] = useState("");
  const axiosSecure = UseAxiosSecure();
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const AddClassData = useMutation({
    mutationFn: async (ClassData) => {
      const { data } = await axiosSecure.post("/addCourse", ClassData);
      return data;
    },
    onSuccess: () => {
      // console.log(data);
      Swal.fire({
        title: "Success",
        text: "The Course Added Successfully",
        icon: "success",
      });
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

  const handleImage = async (data) => {
    const imgURL = await ImageUpload(data);
    SetImageUrl(imgURL);
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Image Upload Successful",
    });
    setButtonDisabled(false);
  };

  const handleAddClass = (data) => {
    const { title, price, description } = data;

    const ClassData = {
      email: user?.email,
      name: user?.displayName,
      teacherImage: user?.photoURL,
      title,
      price,
      description,
      image: imageUrl,
    };
    AddClassData.mutate(ClassData);
    reset();
  };

  return (
    <div className="bg-bodyColor-light min-h-screen flex justify-center items-center md:py-10">
      <div className="bg-bodyColor-dark shadow-md rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-primary-dark mb-6 text-center">
          Add a New Class
        </h1>
        <form onSubmit={handleSubmit(handleAddClass)} className="space-y-6">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-accent-darkest font-medium mb-2"
            >
              Class Title
            </label>
            <input
              {...register("title")}
              type="text"
              id="title"
              name="title"
              placeholder="Enter class title"
              className="w-full border border-light-dark rounded-md py-2 px-3 focus:outline-none focus:border-primary-dark"
              required
            />
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
              onChange={(e) => handleImage(e.target.files[0])}
              type="file"
              id="image"
              name="image"
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
              {...register("price")}
              type="number"
              id="price"
              name="price"
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
              {...register("description")}
              id="description"
              name="description"
              placeholder="Enter class description"
              rows="4"
              className="w-full border border-light-dark rounded-md py-2 px-3 focus:outline-none focus:border-primary-dark"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              disabled={buttonDisabled}
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
