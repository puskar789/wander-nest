import React, { useEffect, useState } from "react";
import useGlobal from "../../zustand/useGlobal";

const SliderInput = () => {
  const { filterPrice, setFilterPrice } = useGlobal();

  return (
    <div className="mt-8">
      <span className="text-black font-semibold">{`Max Price: $${filterPrice}`}</span>
      <input
        type="range"
        min={0}
        max="50"
        value={filterPrice}
        className="border-0 h-2 w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        onChange={(e) => setFilterPrice(e.target.value)}
      />
      <div className="mt-2 flex justify-between text-black font-semibold">
        <span>$0</span>
        <span>$25</span>
        <span>$50</span>
      </div>
    </div>
  );
};

export default SliderInput;
