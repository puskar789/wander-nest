import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "./swiper.css";

const Room = ({ room }) => {
  const [place, setPlace] = useState(null);

  // to get the address from the lng and lat (reverse geocoding)
  useEffect(() => {
    let url;
    if ("lng" in room) {
      url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${room.lng},${
        room.lat
      }.json?access_token=${import.meta.env.VITE_MAP_TOKEN}`;
    } else {
      url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${
        room.longitude
      },${room.latitude}.json?access_token=${import.meta.env.VITE_MAP_TOKEN}`;
    }
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlace(data.features[0]));
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-full bg-blue-600">
        <h1 className="text-3xl py-4 px-8 text-white font-semibold">
          {room.title}
        </h1>
      </div>
      <div className="m-2 relative">
        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          centeredSlides
          slidesPerView={2}
          grabCursor
          navigation
          autoplay
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
        >
          {room?.images?.map((image) => (
            <SwiperSlide key={image}>
              <div className="swiper-zoom-container">
                <img src={image} alt="room" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="tooltip absolute bottom-0 left-2 z-50"
          data-tip={room.userName}
        >
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={room.userPhoto} alt="user" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-10 my-4">
        <div className="flex justify-between">
          <h3 className="text-lg text-black font-semibold">
            Price Per Night:{" "}
            <span className="text-sm font-normal">
              {room.price === 0 ? "Free Stay" : `$${room.price}`}
            </span>
          </h3>
          <div className="rating">
            <span className="text-lg text-black font-semibold">Ratings:</span>
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <h3 className="text-lg text-black font-semibold">
            Place Name:{" "}
            <span className="text-base font-normal">{place?.text}</span>
          </h3>
          <h3 className="text-lg text-black font-semibold">
            Address:{" "}
            <span className="text-base font-normal">{place?.place_name}</span>
          </h3>
        </div>

        <h3 className="mt-6 text-lg text-black font-semibold">Details:</h3>
        <p className="mt-1 text-base font-normal text-black">
          {room.description}
        </p>
      </div>
    </div>
  );
};

export default Room;
