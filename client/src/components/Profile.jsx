import React, { useEffect, useRef, useState } from "react";
import { IoIosSettings } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import { Modal } from "flowbite-react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase/firebase.js";
import useUpdate from "../hooks/useUpdate.js";

const Profile = () => {
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const [newName, setNewName] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const photoRef = useRef();

  const { authUser } = useAuthContext();
  const { loading, update } = useUpdate();

  const onCloseModal = () => {
    toast.error("Press ESC to go back");
    setOpenProfileModal(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImageFile(file);
    }
  };

  useEffect(() => {
    if (imageFile) {
      toast("Please wait while we upload your image!", {
        icon: "👌",
      });
      getURL();
    }
  }, [imageFile]);

  const getURL = async () => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        setImageFile(null);
        setPhotoURL(null);
        toast.error("Could not upload image");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setPhotoURL(downloadURL);
          toast.success("You may click on Update");
        });
      }
    );
  };

  const onSubmitUpdateHandler = async () => {
    if (!newName || !photoURL) {
      toast.error("Please fill all of the fields");
      return;
    }

    await update(newName, photoURL);
    setImageFile(null);
    setPhotoURL(null);
    setNewName("");
  };

  return (
    <div
      className="flex gap-3 cursor-pointer"
      onClick={() => setOpenProfileModal(true)}
    >
      <IoIosSettings className="text-2xl" />
      <h3 className="font-semibold">Profile</h3>
      <Modal show={openProfileModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <h1 className="text-xl font-semibold">Profile</h1>
          <div className="mt-2 h-0.5 bg-slate-300"></div>
          <p className="mt-2 text-sm text-slate-700">
            You can update your Profile by updating these fields:
          </p>
          <div className="mt-6">
            <label className="text-sm mb-2 block text-blue-500 font-semibold">
              Name *
            </label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full border-none focus:ring-0 focus:border-black"
            />
            <div className="bg-gray-200 h-0.5"></div>
          </div>

          <div className="mt-6">
            <input
              accept="image/*"
              type="file"
              ref={photoRef}
              onChange={handleImageChange}
              hidden
            />

            <img
              src={authUser.photoURL}
              className="rounded-full w-32"
              onClick={() => photoRef.current.click()}
            />
          </div>

          <div className="my-4 flex justify-end">
            <button
              className="flex gap-2 bg-blue-500 px-4 py-2 text-white font-semibold text-sm rounded-lg shadow-lg hover:bg-blue-700 active:border-y-2 border-blue-900"
              onClick={onSubmitUpdateHandler}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Update"
              )}
              <IoMdSend className="text-xl" />
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Profile;
