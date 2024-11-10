import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../../firebase/firebase.js";
import useGlobal from "../../../zustand/useGlobal.js";
import ImageList from "./ImageList.jsx";

const AddImages = () => {
  const { setImages } = useGlobal();
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  // const [photoURLs, setPhotoURLs] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
    // console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  useEffect(() => {
    if (files.length > 0) {
      toast("Please wait while we upload your images!", { icon: "👌" });
      uploadAllImages();
    }
  }, [files]);

  const uploadAllImages = async () => {
    const storage = getStorage(app);

    files.forEach((file, index) => {
      const fileName = `room/${new Date().getTime()}_${file.name}`;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress((prevProgress) => ({
            ...prevProgress,
            [file.name]: progress,
          }));
        },
        (error) => {
          toast.error(`Could not upload image ${file.name}`);
          //   setFiles([]);
          //   setPhotoURLs([]);
          // setFiles((prevFiles) => prevFiles.filter((f) => f.name !== file.name));
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImages((prevURLs) => [...prevURLs, downloadURL]);
            toast.success(`Image ${file.name} uploaded successfully!`);
            files.shift();
          });
        }
      );
    });
  };
  return (
    <>
      <div
        className="m-10 p-8 bg-slate-100 shadow rounded-lg"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="font-bold text-green-600">Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
        <em>Only *.jpeg and *.png images will be accepted</em>

        {files.length > 0 && (
          <div className="mt-4">
            {files.map((file, index) => {
              const progress = uploadProgress[file.name] || 0; // Use file.name for progress
              return (
                <div key={index} className="mb-2">
                  <p>{file.name}</p>
                  <progress value={progress} max="100" className="w-full" />
                  <span>{Math.round(progress)}%</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <ImageList />
    </>
  );
};

export default AddImages;
