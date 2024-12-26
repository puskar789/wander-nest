import React from "react";
import { Popover } from "flowbite-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./cluster.css";
import useGlobal from "../../zustand/useGlobal";

const PopUp = ({ children, room }) => {
  const { setSelectedRoom } = useGlobal();

  const content = (
    <div className="w-60 relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay
        pagination={{ clickable: true }}
        style={{
          "--swiper-pagination-color": "rgba(255, 255, 255, 0.8)",
          "--swiper-pagination-bullet-inactive-color": "#fff",
          "--swiper-pagination-bullet-inactive-opacity": "0.5",
        }}
      >
        {room.images.map((image) => (
          <SwiperSlide key={image}>
            <img
              src={image}
              alt="room"
              className="cursor-pointer"
              onClick={() => setSelectedRoom(room)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="z-10 absolute top-0 w-full bg-gradient-to-b from-black/75 to-transparent px-4 py-2">
        <span className="text-white text-sm font-medium">
          {room.price === 0 ? "Free Stay" : `$${room.price}`}
        </span>
      </div>
      <div className="z-10 absolute bottom-0 w-full flex justify-between items-center bg-black/50 px-4 py-2">
        <div className="">
          <p className="text-white font-semibold">{room.title}</p>
          <p className="text-white">
            {room.description.slice(0, Math.min(30, room.description.length)) +
              "..."}
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <Popover trigger="hover" placement="top" content={content}>
        {children}
      </Popover>
    </>
  );
};

export default PopUp;
