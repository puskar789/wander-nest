import React, { useEffect, useState } from "react";
import AddLocation from "./addLocation/AddLocation";
import AddDetails from "./addDetails/AddDetails";
import AddImages from "./addImages/AddImages";
import useGlobal from "../../zustand/useGlobal";
import { IoMdSend } from "react-icons/io";
import useAddRoom from "../../hooks/useAddRoom";

const AddRoom = ({ handleTabChange }) => {
  const { lng, lat, price, title, description, images } = useGlobal();
  const { loading, addRoom } = useAddRoom();

  const [primaryStep, setPrimaryStep] = useState(0);

  const [steps, setSteps] = useState([
    { label: "Location", isComplete: false },
    { label: "Details", isComplete: false },
    { label: "Images", isComplete: false },
  ]);

  const [submit, setSubmit] = useState(false);

  const handleStepClick = (index) => {
    setPrimaryStep(index);
  };

  const changeComplete = (index, complete) => {
    steps[index].isComplete = complete;
    const newSteps = [...steps];
    setSteps(newSteps);
  };

  const detailsChangeHandler = (bool) => {
    changeComplete(1, bool);
  };

  // handling the room submission
  const handleSubmit = async () => {
    // console.log("Submit");
    await addRoom(lng, lat, price, title, description, images, handleTabChange);
  };

  useEffect(() => {
    if (images.length > 0) {
      if (!steps[2].isComplete) {
        changeComplete(2, true);
      }
    } else {
      if (steps[2].isComplete) {
        changeComplete(2, false);
      }
    }
  }, [images]);

  useEffect(() => {
    if (lng || lat) {
      if (!steps[0].isComplete) {
        changeComplete(0, true);
      }
    } else {
      if (steps[0].isComplete) {
        changeComplete(0, false);
      }
    }
  }, [lng, lat]);

  useEffect(() => {
    if (
      steps[0].isComplete &&
      steps[1].isComplete &&
      steps[2].isComplete &&
      primaryStep == 2
    ) {
      if (!submit) {
        setSubmit(true);
      }
    } else {
      if (submit) {
        setSubmit(false);
      }
    }
  }, [steps, primaryStep]);

  return (
    <div className="m-8 w-full">
      <ul className="steps w-full">
        {steps.map((step, index) => (
          <li
            key={index}
            data-content={step.isComplete ? "✓" : `${index + 1}`}
            className={`step ${primaryStep === index ? "step-primary" : ""}`}
            onClick={() => handleStepClick(index)}
          >
            {step.label}
          </li>
        ))}
      </ul>

      <div className={primaryStep === 0 ? "h-[380px]" : ""}>
        {
          {
            0: <AddLocation />,
            1: <AddDetails onDetailsChange={detailsChangeHandler} />,
            2: <AddImages />,
          }[primaryStep]
        }
      </div>
      <div
        className={
          primaryStep != 2
            ? "mt-4 px-72 flex justify-between"
            : "my-12 mx-72 flex justify-between"
        }
      >
        <button
          className="font-semibold text-blue-500 hover:text-blue-200 disabled:text-slate-400"
          disabled={primaryStep === 0}
          onClick={() => setPrimaryStep(primaryStep - 1)}
        >
          Back
        </button>
        <button
          className="font-semibold text-blue-500 hover:text-blue-200 "
          onClick={() => setPrimaryStep((primaryStep + 1) % 3)}
        >
          Next
        </button>
      </div>
      {submit && (
        <div className="mt-6 flex justify-center">
          <button
            className="flex gap-2 px-4 py-2 bg-blue-500 text-white font-semibold shadow-lg rounded-lg hover:bg-blue-700 active:border-2 "
            onClick={handleSubmit}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Submit"
            )}
            <IoMdSend className="text-2xl" />
          </button>
        </div>
      )}
    </div>
  );
};

export default AddRoom;
