"use client";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
  } from 'https://cdn.esm.sh/react-leaflet';

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

export default function MapComponent() {
  const center = [5.6037, -0.187]; // Example: Accra, Ghana

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer center={center} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>
            African Relining Services <br /> Accra, Ghana.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
