import React from 'react';
import axios from 'axios';
import ReactMapboxGl, { Layer,
                        Feature,
                        ZoomControl,
                        GeoJSONLayer } from 'react-mapbox-gl';

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
                   zoom: 15,
                   geoJson: {"missing_sidewalk": [],
                             "sidewalk_issues": []}};
  }

  componentDidMount() {
    var req = predsApi + "?lat1=" + MILWAUKEE_BOUNDS[0][1] + "&long1=" + MILWAUKEE_BOUNDS[0][0]
               + "&lat2=" + MILWAUKEE_BOUNDS[1][1] + "&long2=" + MILWAUKEE_BOUNDS[1][0];

    axios.get(req)
      .then(res => {
        this.setState({ geoJson: {"missing_sidewalk": res.data.missing_sidewalk,
                                  "sidewalk_issues": res.data.sidewalk_issues} });
      })
  }

  handleMove = (m) => {
    //this.getData(m)
  }

  handleZoom = (m) => {
    this.setState({ zoom: m.getZoom()})
  }

  //TODO this is at lesat temporarily deprecated
  getData = (m) => {
    var newBounds = m.getBounds().toArray();
    var req = predsApi + "?lat1=" + newBounds[0][1] + "&long1=" + newBounds[0][0]
               + "&lat2=" + newBounds[1][1] + "&long2=" + newBounds[1][0];

    axios.get(req)
      .then(res => {
        var features = res.data.features;
        features.map((f) => console.log(f));
        this.setState({ geoJson: {"features": features} });
      })
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
            maxBounds = {MILWAUKEE_BOUNDS}
            onMoveEnd = {this.handleMove}
            onZoomEnd = {this.handleZoom}>
              <ZoomControl/>
               <Layer type="line" id="missing_sidewalk" paint={{"line-width": 3, "line-color": '#FF0000'}}>
               {
                 //TODO: add key=id once the features have unique ids
                 this.state.geoJson.missing_sidewalk.map((f) => (
                   <Feature coordinates={f.geometry.coordinates} />
                 ))
               }
               </Layer>
               <Layer type="line" id="sidewalk_issues" paint={{"line-width": 3, "line-color": '#FFFF00'}}>
               {
                 //TODO: add key=id once the features have unique ids
                 this.state.geoJson.sidewalk_issues.map((f) => (
                   <Feature coordinates={f.geometry.coordinates} />
                 ))
               }
               </Layer>
           </Map>
  }
}

export default MapContainer;
