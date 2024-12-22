import React, { useEffect, useRef, useState } from "react";
import useGlobal from "../../../zustand/useGlobal";

const AddDetails = ({ onDetailsChange }) => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    price,
    setPrice,
    radio,
    setRadio,
  } = useGlobal();

  const [isTitleValid, setIsTitleValid] = useState(-1);
  const [isDesValid, setIsDesValid] = useState(-1);
  const timeoutRef1 = useRef(null);
  const timeoutRef2 = useRef(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (timeoutRef1.current) {
      clearTimeout(timeoutRef1.current);
    }

    timeoutRef1.current = setTimeout(() => {
      if (e.target.value.length >= 5) {
        setIsTitleValid(1);
      } else if (e.target.value.length === 0) {
        setIsTitleValid(-1);
      } else {
        setIsTitleValid(0);
      }
    }, 1500);
  };

  const handleDesChange = (e) => {
    setDescription(e.target.value);
    if (timeoutRef2.current) {
      clearTimeout(timeoutRef2.current);
    }

    timeoutRef2.current = setTimeout(() => {
      if (e.target.value.length >= 10) {
        setIsDesValid(1);
      } else if (e.target.value.length === 0) {
        setIsDesValid(-1);
      } else {
        setIsDesValid(0);
      }
    }, 1500);
  };

  useEffect(() => {
    const b1 = isTitleValid === 1 || title.length >= 5;
    const b2 = isDesValid === 1 || description.length >= 10;
    onDetailsChange(b1 && b2);
  }, [isTitleValid, isDesValid, title, description]);

  return (
    <div className="m-8 flex-col justify-center">
      <div className="w-full text-center">
        <input
          type="radio"
          id="x1"
          name="pay"
          value="Free Stay"
          checked={!radio}
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
          checked={radio}
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
              placeholder="1"
              min="1"
              max="50"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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
              isTitleValid === 0 || title.length < 5 ? "textarea-error" : ""
            } ${
              isTitleValid === 1 || title.length >= 5 ? "textarea-success" : ""
            }`}
            rows="1"
            cols="70"
            value={title}
            onChange={handleTitleChange}
          />
          {(isTitleValid === 0 || title.length < 5) && (
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
              isDesValid === 0 || description.length < 10
                ? "textarea-error"
                : ""
            } ${
              isDesValid === 1 || description.length >= 10
                ? "textarea-success"
                : ""
            }`}
            rows="4"
            cols="70"
            value={description}
            onChange={handleDesChange}
          />
          {(isDesValid === 0 || description.length < 10) && (
            <div className="label">
              <span className="label-text-alt text-red-600">
                This field must be 10 characters or more
              </span>
            </div>
          )}
        </label>
      </div>
    </div>
  );
};

export default AddDetails;
