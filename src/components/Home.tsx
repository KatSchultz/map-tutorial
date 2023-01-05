import React from "react";
import { useLoadScript } from "@react-google-maps/api";
import { config } from "../config";
import Map from "./Map";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: config.apiKey,
    libraries: ["places"],
  });
  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;
}
