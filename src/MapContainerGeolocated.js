import React from 'react';
import MapContainer from './MapContainer.js';
import {geolocated} from 'react-geolocated';

const MapContainerGeolocated = geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(MapContainer);

export default MapContainerGeolocated;
