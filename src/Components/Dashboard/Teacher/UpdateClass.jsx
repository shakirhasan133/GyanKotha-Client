import { useForm } from "react-hook-form";
import { useState } from "react";
import { ImageUpload } from "../../../Api/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const UpdateClass = () => {
  const { register, handleSubmit, reset } = useForm();
  const [imageUrl, SetImageUrl] = useState("");
  const axiosSecure = UseAxiosSecure();
  const { id } = useParams();

  const { data: ClassData = [], refetch } = useQuery({
    queryKey: ["ClassDataUpage", id],
    queryFn: async () => {
      const { data } = await axiosSecure(`/allClasses?id=${id}`);
      SetImageUrl(data[0].image) || "";
      reset({
        title: data[0]?.title || "",
        price: data[0]?.price || "",
        description: data[0]?.description || "",
      });
      return data;
    },
  });

  //   const { title, price, description, image } = ClassData[0] || [];

  const UpdateClassData = useMutation({
    mutationFn: async (upClassData) => {
      const { data } = await axiosSecure.patch(`/updateClass/${id}`, {
        upClassData,
      });
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      Swal.fire({
        title: "Success",
        text: "The Course Added Successfully",
        icon: "success",
      });
      refetch();
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
  };

  const handleUpdateClass = (data) => {
    const { title, price, description } = data;

    const UClassData = {
      title,
      price,
      description,
      image: imageUrl,
    };
    UpdateClassData.mutate(UClassData);
  };

  return (
    <div className="bg-bodyColor-light min-h-screen flex justify-center items-center md:py-10">
      <div className="bg-bodyColor-dark shadow-md rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-primary-dark mb-6 text-center">
          Add a New Class
        </h1>
        <form onSubmit={handleSubmit(handleUpdateClass)} className="space-y-6">
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
              {...register("image")}
              className="w-full border border-light-dark rounded-md py-2 px-3 focus:outline-none focus:border-primary-dark"
              //   required
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

export default UpdateClass;
