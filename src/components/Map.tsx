import React, { useMemo } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from "@react-google-maps/api";
import "../styles/global.css";

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

export default function Map() {
  //specifying center with useMemo will prevent re-loading of map on center
  const center = useMemo(() => ({ lat: 43, lng: -80 }), []);

  return (
    <div className="container">
      <div className="controls">
        <h1>Commute?</h1>
      </div>
      <div className="map">
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
        ></GoogleMap>
      </div>
    </div>
  );
}
