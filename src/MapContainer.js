import React from 'react';
import axios from 'axios';
import ReactMapboxGl, { Layer, Feature, ZoomControl } from 'react-mapbox-gl';

//CHANGE locally if you want to hit production server Instead
// TODO: change this to read froma config file
var API_URL = "";
if (process.env.NODE_ENV=="production")
{
  API_URL = "http://flask-env.hnihdvppuy.us-west-2.elasticbeanstalk.com";
} else {
  API_URL = "http://localhost:5000";
}

const predsApi = API_URL + "/api/predictions";

const MILWAUKEE_CENTER = [-87.9065, 43.0389];
const MILWAUKEE_BOUNDS = [[-88.07094, 42.9208],[-87.863, 43.1947]];

const Map = ReactMapboxGl({
  //todo: hide this token in a config
  accessToken:
    'pk.eyJ1IjoiZW1pbHlyYXBwb3J0IiwiYSI6ImNrNzgzOXV2ZzBjem8zaHM3YXcydHY4ZWkifQ.8fTcIfORRhn_Auh4mOrlRg'
});

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { circleLoc: MILWAUKEE_CENTER,
                   zoom: 15};
  }

  handleMove = () => {
    var currCircleLocX = this.state.circleLoc[0] - .001;
    this.setState({ circleLoc: [currCircleLocX, 43.0389]});
  }

  handleZoom = (m) => {
    this.setState({ zoom: m.getZoom()})
  }

  render() {
    return <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
              height: '98vh',
              width: '98vw'
            }}
            center={MILWAUKEE_CENTER}
            zoom={[this.state.zoom]}
            maxBounds={MILWAUKEE_BOUNDS}
            onMoveEnd = {this.handleMove}
            onZoomEnd = {this.handleZoom}
            >
              <ZoomControl/>
              <Layer type="circle" id="marker" paint={{"circle-radius": 30}}>
                <Feature coordinates={this.state.circleLoc} />
              </Layer>
           </Map>
  }
}

export default MapContainer;
