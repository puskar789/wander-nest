import React, { useEffect, useRef, useState } from "react";

const AddDetails = ({ onDetailsChange }) => {
  const [radio, setRadio] = useState(false);
  const [isTitleValid, setIsTitleValid] = useState(-1);
  const [isDesValid, setIsDesValid] = useState(-1);
  const timeoutRef = useRef(null);

  const handleChange = (e) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (e.target.id === "title") {
        if (e.target.value.length >= 5) {
          setIsTitleValid(1);
        } else if (e.target.value.length === 0) {
          setIsTitleValid(-1);
        } else {
          setIsTitleValid(0);
        }
      } else {
        if (e.target.value.length >= 5) {
          setIsDesValid(1);
        } else if (e.target.value.length === 0) {
          setIsDesValid(-1);
        } else {
          setIsDesValid(0);
        }
      }
    }, 1500);
  };

  useEffect(() => {
    const b1 = isTitleValid === 1;
    const b2 = isDesValid === 1;
    onDetailsChange(b1 && b2);
  }, [isTitleValid, isDesValid]);

  return (
    <div className="m-8 flex-col justify-center">
      <div className="w-full text-center">
        <input
          type="radio"
          id="x1"
          name="pay"
          value="Free Stay"
          onClick={() => setRadio(false)}
        />
        <label htmlFor="x1" className="ml-2 mr-3 text-black">
          Free Stay
        </label>
        <input
          type="radio"
          id="x2"
          name="pay"
          value="Nominal Fee"
          onClick={() => setRadio(true)}
        />
        <label htmlFor="x2" className="ml-2 mr-3 text-black ">
          Nominal Fee
        </label>
        {radio && (
          <>
            <span className="text-gray-500 ml-1">$</span>
            <input
              type="number"
              className="w-16 h-7 border-none outline-none "
              defaultValue="15"
              max="50"
            />
          </>
        )}
      </div>

      <div className="mt-1 w-full flex justify-center">
        <label className="form-control">
          <div className="label">
            <span className="label-text">Title *</span>
          </div>
          <textarea
            id="title"
            className={`textarea textarea-bordered bg-white ${
              isTitleValid === 0 ? "textarea-error" : ""
            } ${isTitleValid === 1 ? "textarea-success" : ""}`}
            rows="1"
            cols="70"
            onChange={handleChange}
          ></textarea>
          {isTitleValid === 0 && (
            <div className="label">
              <span className="label-text-alt text-red-600">
                This field must be 5 characters or more
              </span>
            </div>
          )}
        </label>
      </div>

      <div className="mt-4 w-full flex justify-center">
        <label className="form-control">
          <div className="label">
            <span className="label-text">Description *</span>
          </div>
          <textarea
            id="description"
            className={`textarea textarea-bordered bg-white ${
              isDesValid === 0 ? "textarea-error" : ""
            } ${isDesValid === 1 ? "textarea-success" : ""}`}
            rows="4"
            cols="70"
            onChange={handleChange}
          ></textarea>
          {isDesValid === 0 && (
            <div className="label">
              <span className="label-text-alt text-red-600">
                This field must be 5 characters or more
              </span>
            </div>
          )}
        </label>
      </div>
    </div>
  );
};

export default AddDetails;
