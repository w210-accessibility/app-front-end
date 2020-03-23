import { Component } from 'react';
import PropTypes from 'prop-types';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

class Geocoder extends Component {

  componentDidMount() {
    const { map } = this.context;

    map.addControl(
      new MapboxGeocoder({
        accessToken: 'your token'
      })
    );
  }

  render() {
    return null;
  }

  static contextTypes = {
    map: PropTypes.object.isRequired
  };
}

export default Geocoder;
