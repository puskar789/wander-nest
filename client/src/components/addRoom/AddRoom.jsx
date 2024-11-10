import React, { useEffect, useState } from "react";
import AddLocation from "./addLocation/AddLocation";
import AddDetails from "./addDetails/AddDetails";
import AddImages from "./addImages/AddImages";
import useGlobal from "../../zustand/useGlobal";

const AddRoom = () => {
  const { images } = useGlobal();

  const [primaryStep, setPrimaryStep] = useState(0);

  const [steps, setSteps] = useState([
    { label: "Location", isComplete: false },
    { label: "Details", isComplete: false },
    { label: "Images", isComplete: false },
  ]);

  const handleStepClick = (index) => {
    setPrimaryStep(index);
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
  });

  const changeComplete = (index, complete) => {
    steps[index].isComplete = complete;
    const newSteps = [...steps];
    setSteps(newSteps);
  };

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

      <div>
        {
          {
            0: <AddLocation />,
            1: <AddDetails />,
            2: <AddImages />,
          }[primaryStep]
        }
      </div>
      <div className="my-12 mx-72 flex justify-between">
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
    </div>
  );
};

export default AddRoom;
