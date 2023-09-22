import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import StreetView from "react-google-streetview";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 10.1632,
  lng: 76.6413,
};

function MapPin() {
  const [clickedLocation, setClickedLocation] = useState(null);
  const [inputLat, setInputLat] = useState("");
  const [inputLng, setInputLng] = useState("");
  const [showStreetView, setShowStreetView] = useState(false); // Add this state

  const handleMapClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setClickedLocation({ lat, lng });
    setShowStreetView(true); // Show Street View when a location is clicked
  };

  const handleSpotLocation = () => {
    const lat = parseFloat(inputLat);
    const lng = parseFloat(inputLng);

    if (!isNaN(lat) && !isNaN(lng)) {
      setClickedLocation({ lat, lng });
      setShowStreetView(true); // Show Street View when latitude and longitude are manually entered
    }
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAe4Kn7qUywgItX15fUruQWcoroJN2R0-Y">
      <div>
        <div>
          <label>Enter Latitude: </label>
          <input
            type="text"
            value={inputLat}
            onChange={(e) => setInputLat(e.target.value)}
          />
        </div>
        <div>
          <label>Enter Longitude: </label>
          <input
            type="text"
            value={inputLng}
            onChange={(e) => setInputLng(e.target.value)}
          />
        </div>
        <button onClick={handleSpotLocation}>Spot Location</button>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultCenter}
          zoom={10}
          onClick={handleMapClick}
        >
          {clickedLocation && <Marker position={clickedLocation} />}
        </GoogleMap>
        {showStreetView && clickedLocation && (
          <div style={{ width: "50%", height: "400px", padding: "10px" }}>
            <StreetView
              apiKey=""
              streetViewPanoramaOptions={{
                position: clickedLocation,
                pov: { heading: 100, pitch: 0 },
                zoom: 1,
              }}
            />
          </div>
        )}
      </div>
      {clickedLocation && (
        <div>
          <p>Latitude: {clickedLocation.lat}</p>
          <p>Longitude: {clickedLocation.lng}</p>
        </div>
      )}
    </LoadScript>
  );
}

export default MapPin;
