import React, { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import MapBoxGeocoder from "@mapbox/mapbox-gl-geocoder";
import useGlobal from "../../zustand/useGlobal";

const ctrl = new MapBoxGeocoder({
  accessToken: import.meta.env.VITE_MAP_TOKEN,
  marker: false,
  placeholder: " ",
});

const Geocoder = () => {
  const { mapRef, containerRef } = useAuthContext();
  const { setFilterLng, setFilterLat, setFilterPrice } = useGlobal();

  useEffect(() => {
    if (containerRef?.current?.children[0]) {
      containerRef.current.removeChild(containerRef.current.children[0]);
    }

    containerRef.current.appendChild(ctrl.onAdd(mapRef.current.getMap()));
    ctrl.on("result", (e) => {
      const coords = e.result.geometry.coordinates;
      setFilterLng(coords[0]);
      setFilterLat(coords[1]);
    });

    ctrl.on("clear", () => {
      setFilterLng(0);
      setFilterLat(0);
      setFilterPrice(50);
    });
  }, []);
  return null;
};

export default Geocoder;
