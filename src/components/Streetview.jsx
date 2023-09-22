// GoogleMapWithStreetView.js

import React, { useState } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import Streetview from 'react-google-streetview';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const defaultCenter = {
  lat: 10.1632,
  lng: 76.6413,
};

function GoogleMapWithStreetView() {
  const [clickedLocation, setClickedLocation] = useState(null);

  const handleMapClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setClickedLocation({ lat, lng });
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCAZjmuwEHvJhOeNlDZQTeow3pdYC46S08">
      <div>
        <h1>Google Map with Street View</h1>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={defaultCenter}
            zoom={10}
            onClick={handleMapClick}
          >
            {clickedLocation && <Marker position={clickedLocation} />}
          </GoogleMap>
          <div style={{ width: '50%', height: '400px', padding: '10px' }}>
            {clickedLocation && (
              <Streetview
                apiKey="AIzaSyCAZjmuwEHvJhOeNlDZQTeow3pdYC46S08"
                streetViewPanoramaOptions={{
                  position: clickedLocation,
                  pov: { heading: 100, pitch: 0 },
                  zoom: 1,
                }}
              />
            )}
          </div>
        </div>
        {clickedLocation && (
          <div>
            <p>Latitude: {clickedLocation.lat}</p>
            <p>Longitude: {clickedLocation.lng}</p>
          </div>
        )}
      </div>
    </LoadScript>
  );
}

export default GoogleMapWithStreetView;
