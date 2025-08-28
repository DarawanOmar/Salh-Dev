"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
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

interface MapViewUpdaterProps {
  lat?: number;
  lng?: number;
  readOnly?: boolean;
}

function MapViewUpdater({ lat, lng, readOnly }: MapViewUpdaterProps) {
  const map = useMap();

  useEffect(() => {
    if (readOnly && lat !== undefined && lng !== undefined) {
      map.setView([lat, lng], 15);
    }
  }, [map, lat, lng, readOnly]);

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
    if (lant !== undefined && long !== undefined) {
      return { lat: lant, lng: long };
    }
    return null;
  });

  useEffect(() => {
    if (lant !== undefined && long !== undefined) {
      setMarker({ lat: lant, lng: long });
    }
  }, [lant, long]);

  const handleMapClick = ({ lat, lng }: MarkerType) => {
    if (!readOnly) {
      setMarker({ lat, lng });
      if (setFormValues) {
        setFormValues(lat, lng);
      }
    }
  };

  const getInitialCenter = (): [number, number] => {
    if (readOnly && lant !== undefined && long !== undefined) {
      return [lant, long];
    }
    return [36.1912, 44.0093];
  };

  const getInitialZoom = (): number => {
    if (readOnly && lant !== undefined && long !== undefined) {
      return 15; // Closer zoom for readOnly mode
    }
    return 8; // Default zoom
  };

  return (
    <div style={{ display: "flex", borderRadius: "20px" }}>
      <MapContainer
        style={{ height: "70vh", width: "100%", borderRadius: "20px" }}
        center={getInitialCenter()}
        zoom={getInitialZoom()}
        attributionControl={false}
        zoomControl={false}
        key={readOnly ? `readonly-${lant}-${long}` : "interactive"} // Force re-render when switching modes
      >
        <TileLayer
          attribution='&copy; <a href="https://www.thunderforest.com">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=3daee448821e49e4960658cac8513399"
        />

        {/* Component to handle view updates */}
        <MapViewUpdater lat={lant} lng={long} readOnly={readOnly} />

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
