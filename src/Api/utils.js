import axios from "axios";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

export const ImageUpload = async (ImageInfo) => {
  const formData = new FormData();
  formData.append("image", ImageInfo);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
    formData
  );
  return data.data.display_url;
};

const axiosPublic = UseAxiosPublic();

export const SaveUser = async (userData) => {
  try {
    await axiosPublic.post(`/users/${userData?.email}`, {
      name: userData?.displayName,
      image: userData?.photoURL,
      email: userData?.email,
    });
  } catch (error) {
    console.log(error.message);
  }
};
