import React, { useEffect, useRef } from "react";
import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    let map;
    async function initMap() {
      //@ts-ignore
      const { Map } = await window.google.maps.importLibrary("maps");

      map = new Map(mapRef.current, {
        center: center,
        zoom: zoom,
      });

      new window.google.maps.Marker({ position: center, map: map });
    }

    initMap();
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
