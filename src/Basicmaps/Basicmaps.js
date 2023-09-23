import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet
import 'leaflet/dist/leaflet.css';

class BasicMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 9.9816,
      lng: 76.2999,
      zoom: 16,
      inputLat: 9.9816,
      inputLng: 76.2999,
      clickedLat: null,
      clickedLng: null,
    };
  }

  // Function to handle changes in the latitude input
  handleLatChange = (e) => {
    this.setState({ inputLat: parseFloat(e.target.value) });
  };

  // Function to handle changes in the longitude input
  handleLngChange = (e) => {
    this.setState({ inputLng: parseFloat(e.target.value) });
  };

  // Function to update the map with new coordinates
  updateMap = () => {
    const { inputLat, inputLng } = this.state;
    this.setState({ lat: inputLat, lng: inputLng });
  };

  // Function to handle map click events
  handleMapClick = (e) => {
    this.setState({
      clickedLat: e.latlng.lat,
      clickedLng: e.latlng.lng,
    });
  };

  render() {
    const { lat, lng, zoom, inputLat, inputLng, clickedLat, clickedLng } = this.state;
    const position = [lat, lng];

    // Define a custom marker icon
    const customMarkerIcon = L.icon({
      iconUrl: 'https://cdn.vectorstock.com/i/1000x1000/83/24/realistic-3d-pointer-of-map-red-marker-icon-vector-24058324.webp',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    return (
      <React.Fragment>
        <h1>Hello, Component Maps</h1>

        <div>
          <label htmlFor="latitude">Latitude:</label>
          <input
            type="number"
            id="latitude"
            value={inputLat}
            onChange={this.handleLatChange}
          />
        </div>
        <div>
          <label htmlFor="longitude">Longitude:</label>
          <input
            type="number"
            id="longitude"
            value={inputLng}
            onChange={this.handleLngChange}
          />
        </div>

        <button onClick={this.updateMap}>Update Map</button>

        {/* Decrease the size of the map */}
        <MapContainer
          center={position}
          zoom={zoom}
          style={{ height: '300px', width: '400px' }} // Set the desired height and width
          onClick={this.handleMapClick}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Marker with custom icon */}
          <Marker position={position} icon={customMarkerIcon}>
            <Popup>Your location</Popup>
          </Marker>

          {/* Display clicked coordinates */}
          {clickedLat !== null && clickedLng !== null && (
            <Marker position={[clickedLat, clickedLng]}>
              <Popup>
                Clicked coordinates: <br />
                Latitude: {clickedLat.toFixed(6)} <br />
                Longitude: {clickedLng.toFixed(6)}
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </React.Fragment>
    );
  }
}

export default BasicMaps;
