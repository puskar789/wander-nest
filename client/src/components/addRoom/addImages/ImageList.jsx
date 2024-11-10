import React from "react";
import useGlobal from "../../../zustand/useGlobal";
import { MdCancel } from "react-icons/md";
import { deleteObject, getStorage, ref } from "firebase/storage";
import { app } from "../../../firebase/firebase.js";
import toast from "react-hot-toast";

const ImageList = () => {
  const { images, setImages } = useGlobal();

  const handleDelete = async (image) => {
    const storage = getStorage(app);
    const imageRef = ref(storage, image);

    try {
      await deleteObject(imageRef);
      const newImages = images.filter((img) => img !== image);
      // console.log(newImages);
      setImages(newImages);
      // toast.success("Image deleted successfully!");
    } catch (error) {
      // toast.error("Error deleting image. Please try again.");
      console.error("Error deleting image from Firebase:", error);
    }
  };

  return (
    <div className="m-10 grid grid-cols-4 gap-10">
      {images.map((image, index) => {
        return (
          <div key={index} className="relative">
            <img key={index} src={image} className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-transparent"></div>
            <button
              className="absolute top-0 right-0"
              onClick={() => handleDelete(image)}
            >
              <MdCancel className="text-4xl" />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ImageList;
