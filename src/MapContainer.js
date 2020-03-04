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
                   geoJson: {"bbox": [-87.97759552015516, 43.03983160295481, -87.97532666935352, 43.03984560257128], "type": "FeatureCollection", "features": [{"id": "0", "bbox": [-87.97759552015516, 43.03983160295481, -87.97532666935352, 43.03984560257128], "type": "Feature", "geometry": {"type": "LineString", "coordinates": [[-87.97532666935352, 43.03983160295481], [-87.9757795950501, 43.039833603021016], [-87.97714151976831, 43.03984260245887], [-87.97714151976831, 43.03984260245887], [-87.97759552015516, 43.03984560257128]]}, "properties": {}}]}};
  }

  handleMove = (m) => {
    //this.getData(m)
  }

  handleZoom = (m) => {
    this.setState({ zoom: m.getZoom()})
  }

  getData = (m) => {
    var newBounds = m.getBounds().toArray();
    console.log(newBounds);
    var req = predsApi + "?lat1=" + newBounds[0][1] + "&long1=" + newBounds[0][0]
               + "&lat2=" + newBounds[1][1] + "&long2=" + newBounds[1][0];

    axios.get(req)
      .then(res => {
        var results = res.data;
        console.log(results)
        this.setState({ geoJson: results });
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
              <Layer type="line" id="sidewalk" paint={{"line-width": 3, "line-color": '#bc13fe'}}>
                <Feature coordinates={this.state.geoJson.features[0].geometry.coordinates} />
              </Layer>
           </Map>
  }
}

export default MapContainer;
