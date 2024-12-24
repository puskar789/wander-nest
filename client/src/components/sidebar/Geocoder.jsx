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
  const {
    rooms,
    setFilterLng,
    setFilterLat,
    setFilterPrice,
    setFilteredRooms,
  } = useGlobal();

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
      setFilteredRooms(rooms);
    });
  }, []);
  return null;
};

export default Geocoder;

/*
The code inside the useEffect hook is there because the geocoder setup and event bindings need to occur as a side effect of rendering the Geocoder component. Here's why useEffect is used and why it is essential in this scenario:

Why Use useEffect?
Trigger Side Effects After Initial Render:

The setup for the geocoder control, including mounting it to the DOM and attaching event listeners, is not part of rendering the React component itself. These are side effects that should happen after the component is rendered.
Placing this logic inside useEffect ensures that it runs only after the component has mounted (or updated, if dependencies change).
Access to DOM Elements:

containerRef.current and mapRef.current are references to DOM elements or the Mapbox map object. These are only available after the component renders.
Using useEffect ensures that the DOM elements are ready before attempting to manipulate them.
Avoiding Repeated Initialization:

Without useEffect, the geocoder setup code would run every time the component re-renders, which could lead to duplicated DOM nodes, memory leaks, or other unintended behavior.
By using useEffect with an empty dependency array ([]), the code runs only once when the component mounts.
Why Is This Setup a Side Effect?
The actions performed inside useEffect—such as manipulating the DOM and binding event listeners—are not directly related to the rendering logic of the component. React's declarative model encourages separating these actions into side effects for better maintainability and clarity.

Code Breakdown Inside useEffect
Cleaning Up Existing Geocoder Instance:
javascript
Copy code
if (containerRef?.current?.children[0]) {
  containerRef.current.removeChild(containerRef.current.children[0]);
}
Ensures that if a geocoder instance is already attached to containerRef, it is removed before adding a new one. This cleanup is necessary to avoid duplication or stale instances.
Adding the Geocoder to the Map:
javascript
Copy code
containerRef.current.appendChild(ctrl.onAdd(mapRef.current.getMap()));
ctrl.onAdd(mapRef.current.getMap()) mounts the geocoder control to the map and returns its DOM node.
This node is appended to the container specified by containerRef.
Binding Event Listeners:
javascript
Copy code
ctrl.on("result", (e) => {
  const coords = e.result.geometry.coordinates;
  setFilterLng(coords[0]);
  setFilterLat(coords[1]);
});

ctrl.on("clear", () => {
  setFilterLng(0);
  setFilterLat(0);
  setFilterPrice(50);
  setFilteredRooms(rooms);
});
result Event: Triggered when a user selects a search result. It updates the longitude and latitude in the global state.
clear Event: Triggered when the search bar is cleared. It resets all filters to their default values and shows all rooms.
These listeners depend on ctrl (the geocoder instance), so they must be set up after ctrl is created.

Why Use an Empty Dependency Array ([])?
javascript
Copy code
useEffect(() => {
  // Setup logic
}, []);
The empty dependency array ensures that the useEffect logic runs only once—when the component mounts.
This is sufficient because the geocoder instance (ctrl) does not depend on any props or state.
Summary
Placing the geocoder setup and event bindings in useEffect ensures:

Proper Lifecycle Management: The code runs only when necessary (on component mount).
Access to DOM and Map: Ensures the DOM and map references are ready before interacting with them.
Avoiding Redundancy: Prevents multiple instances of the geocoder or event listeners being created.
Clean and Declarative Logic: Separates side effects from the component's rendering logic for clarity and maintainability.
Let me know if you’d like further explanation or examples!


Key Components in the Line
containerRef.current:

This refers to the DOM node where the geocoder control (search bar) will be rendered.
containerRef is a React ref that points to a specific DOM element, and current accesses the actual DOM node.
ctrl.onAdd(mapRef.current.getMap()):

ctrl is the geocoder instance created using the MapBoxGeocoder library.
The onAdd method is a Mapbox API function that:
Attaches the geocoder control to the specified Mapbox map instance (mapRef.current.getMap()).
Returns the DOM element (HTMLElement) representing the control (the search bar).
mapRef.current.getMap() retrieves the Mapbox map object from mapRef, which is also a ref pointing to the map component.
appendChild():

Appends the DOM element (the geocoder control) to the specified container (containerRef.current).
In this case, it attaches the geocoder's DOM node to the container.


when we open the sidebar and close it then open the sidebar again will the useEffect run again? NO
*/
