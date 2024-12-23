import React, { useEffect, useState } from "react";
import useGlobal from "../../zustand/useGlobal";
import useGetRooms from "../../hooks/useGetRooms";
import ReactMapGL, { Marker } from "react-map-gl";
import Supercluster from "supercluster";
import { useAuthContext } from "../../context/AuthContext";

const supercluster = new Supercluster({
  radius: 75,
  maxZoom: 20,
});

const Cluster = () => {
  const { rooms } = useGlobal();
  const { mapRef } = useAuthContext();
  const { getRooms } = useGetRooms();

  const [points, setPoints] = useState([]);
  const [clusters, setClusters] = useState([]);
  const [bounds, setBounds] = useState([-100, -85, 100, 85]);
  const [zoom, setZoom] = useState(0);

  useEffect(() => {
    const fetchRooms = async () => {
      await getRooms();
    };

    fetchRooms();
  }, []);

  useEffect(() => {
    // console.log(rooms);
    const points = rooms.map((room) => ({
      type: "Feature",
      properties: {
        cluster: false, // means it is not a cluster i.e. it is a single room
        roomId: room._id,
        price: room.price,
        title: room.title,
        description: room.description,
        longitude: room.lng,
        latitude: room.lat,
        images: room.images,
        userPhoto: room.userPhoto,
        userName: room.userName,
      },
      geometry: {
        type: "Point",
        coordinates: [parseFloat(room.lng), parseFloat(room.lat)],
      },
    }));
    setPoints(points);
  }, [rooms]);

  useEffect(() => {
    supercluster.load(points);
    setClusters(supercluster.getClusters(bounds, zoom));
  }, [points, zoom, bounds]);

  useEffect(() => {
    if (mapRef?.current) {
      setBounds(mapRef.current.getMap().getBounds().toArray().flat());
    }
  }, [mapRef?.current]);

  return (
    <div className="w-full">
      <ReactMapGL
        initialViewState={{ longitude: 51.5072, latitude: 0.1275, zoom: 0.9 }}
        mapboxAccessToken={import.meta.env.VITE_MAP_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        ref={mapRef}
        onZoomEnd={(e) => setZoom(Math.round(e.viewState.zoom))}
      >
        {clusters.map((cluster) => {
          const { cluster: isCluster, point_count } = cluster.properties;
          const [longitude, latitude] = cluster.geometry.coordinates;

          if (isCluster) {
            return (
              <Marker
                key={`cluster-${cluster.id}`}
                longitude={longitude}
                latitude={latitude}
              >
                <div
                  className="text-white bg-blue-600 rounded-full flex justify-center items-center p-7"
                  style={{
                    width: `${10 + (point_count / points.length) * 20}px`,
                    height: `${10 + (point_count / points.length) * 20}px`,
                  }}
                  onClick={() => {
                    const zoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );
                    mapRef.current.flyTo({
                      center: [longitude, latitude],
                      zoom,
                      speed: 1,
                    });
                  }}
                >
                  {point_count}
                </div>
              </Marker>
            );
          }

          return (
            <Marker
              key={`room-${cluster.properties.roomId}`}
              longitude={longitude}
              latitude={latitude}
            >
              <div className="tooltip" data-tip={cluster.properties.userName}>
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={cluster.properties.userPhoto} />
                  </div>
                </div>
              </div>
            </Marker>
          );
        })}
      </ReactMapGL>
    </div>
  );
};

export default Cluster;
