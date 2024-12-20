import React, { useEffect, useRef } from "react";
import ReactMapGL, {
  GeolocateControl,
  Marker,
  NavigationControl,
} from "react-map-gl";
import useGlobal from "../../../zustand/useGlobal";
import "mapbox-gl/dist/mapbox-gl.css";
import Geocoder from "./Geocoder";

const AddLocation = () => {
  const { lng, lat, setLat, setLng } = useGlobal();

  const handleDragEnd = (e) => {
    const { lng, lat } = e.lngLat;
    // console.log(lng, lat);
    setLng(lng);
    setLat(lat);
  };

  const handleGeolocate = (e) => {
    const { longitude, latitude } = e.coords;
    setLng(longitude);
    setLat(latitude);
  };

  const mapRef = useRef();

  useEffect(() => {
    if (!lng && !lat) {
      fetch("https://ipapi.co/json/")
        .then((res) => res.json())
        .then((data) => {
          mapRef.current.flyTo({
            center: [data.longitude, data.latitude],
          });
          setLng(data.longitude);
          setLat(data.latitude);
        });
    }
  }, []);

  return (
    <div className="mt-6 h-full">
      <ReactMapGL
        ref={mapRef}
        mapboxAccessToken={import.meta.env.VITE_MAP_TOKEN}
        initialViewState={{ longitude: lng, latitude: lat, zoom: 11 }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Marker
          latitude={lat}
          longitude={lng}
          draggable
          onDragEnd={(e) => handleDragEnd(e)}
        />
        <NavigationControl position="bottom-right" />
        <GeolocateControl
          position="top-left"
          trackUserLocation
          onGeolocate={(e) => handleGeolocate(e)}
        />
        <Geocoder />
      </ReactMapGL>
    </div>
  );
};

export default AddLocation;
