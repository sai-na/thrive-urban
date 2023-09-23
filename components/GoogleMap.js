// src/components/GoogleMap.js

import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const defaultCenter = {
  lat: 9.9816,
  lng: 76.2999,
};

function MyComponent() {
  const [clickedLocation, setClickedLocation] = useState(null);
  const [inputLat, setInputLat] = useState('');
  const [inputLng, setInputLng] = useState('');

  const handleMapClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setClickedLocation({ lat, lng });
  };

  const handleSpotLocation = () => {
    const lat = parseFloat(inputLat);
    const lng = parseFloat(inputLng);

    if (!isNaN(lat) && !isNaN(lng)) {
      setClickedLocation({ lat, lng });
    }
  };

  // Function to generate the location URL
  const getLocationUrl = () => {
    if (clickedLocation) {
      const { lat, lng } = clickedLocation;
      return `https://www.google.com/maps?q=${lat},${lng}`;
    }
    return '';
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
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={10}
        onClick={handleMapClick}
      >
        {clickedLocation && <Marker position={clickedLocation} />}
      </GoogleMap>
      {clickedLocation && (
        <div>
          <p>Latitude: {clickedLocation.lat}</p>
          <p>Longitude: {clickedLocation.lng}</p>
          <p>
            Location URL:{' '}
            <a href={getLocationUrl()} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
            </a>
          </p>
        </div>
      )}
    </LoadScript>
  );
}

export default MyComponent;
