import MapBoxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { useControl } from "react-map-gl";
import useGlobal from "../../../zustand/useGlobal";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

const Geocoder = () => {
  const { setLng, setLat } = useGlobal();

  const ctrl = new MapBoxGeocoder({
    accessToken: import.meta.env.VITE_MAP_TOKEN,
    marker: false,
    collapsed: true,
  });

  // useControl hook ensures that the geocoder is mounted as a control on the react-map-gl map.
  // The ctrl (geocoder instance) is passed as a callback, and react-map-gl handles its lifecycle.
  useControl(() => ctrl);

  // on("result"): This event listener triggers whenever a user selects a location from the search box
  ctrl.on("result", (e) => {
    const coords = e.result.geometry.coordinates;
    setLng(coords[0]);
    setLat(coords[1]);
  });

  return null;
};

export default Geocoder;
