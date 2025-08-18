"use client";
import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

interface MarkerType {
  lat: number;
  lng: number;
}

// Fixing marker icon issue
const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface LocationMarkerProps {
  onClick: (coords: MarkerType) => void;
}

function LocationMarker({ onClick }: LocationMarkerProps) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      onClick({ lat, lng });
    },
  });

  return null;
}

interface MapProps {
  setFormValues?: (lat: number, lng: number) => void;
  lant?: number;
  long?: number;
  readOnly?: boolean;
}

function Map({ setFormValues, lant, long, readOnly = false }: MapProps) {
  const [marker, setMarker] = useState<MarkerType | null>(() => {
    // Initialize marker with provided coordinates if available
    if (lant !== undefined && long !== undefined) {
      return { lat: lant, lng: long };
    }
    return null;
  });

  const handleMapClick = ({ lat, lng }: MarkerType) => {
    // Only allow editing if not in read-only mode
    if (!readOnly) {
      setMarker({ lat, lng });
      if (setFormValues) {
        setFormValues(lat, lng); // Trigger form update
      }
    }
  };

  return (
    <div style={{ display: "flex", borderRadius: "20px" }}>
      <MapContainer
        style={{ height: "32vh", width: "100%", borderRadius: "20px" }}
        center={[35.566864, 45.416107]}
        zoom={8}
        attributionControl={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.thunderforest.com">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=3daee448821e49e4960658cac8513399"
        />

        {/* Only add click handler if not in read-only mode */}
        {!readOnly && <LocationMarker onClick={handleMapClick} />}

        {marker && (
          <Marker position={[marker.lat, marker.lng]} icon={customIcon}>
            <Popup>
              Latitude: {marker.lat.toFixed(5)}, Longitude:{" "}
              {marker.lng.toFixed(5)}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default Map;
