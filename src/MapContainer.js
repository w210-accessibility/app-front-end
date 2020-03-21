import React from 'react';
import axios from 'axios';
import ReactMapboxGl, { Layer,
                        Feature,
                        ZoomControl,
                        GeoJSONLayer } from 'react-mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mapboxgl from 'mapbox-gl'

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
const MILWAUKEE_BOUNDS = [[-89, 42],[-87, 44]];

const MapBoxMap = ReactMapboxGl({
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
                             "sidewalk_issues": [],
                             "passable_sidewalks": []},
                   noncity: [],
                   searchInput: ""};
  }

  componentDidMount() {
    var req = predsApi + "?lat1=" + MILWAUKEE_BOUNDS[0][1] + "&long1=" + MILWAUKEE_BOUNDS[0][0]
               + "&lat2=" + MILWAUKEE_BOUNDS[1][1] + "&long2=" + MILWAUKEE_BOUNDS[1][0];

    // axios.get(req)
    //   .then(res => {
    //     this.setState({ geoJson: {"missing_sidewalk": res.data.missing_sidewalk,
    //                               "sidewalk_issues": res.data.sidewalk_issues,
    //                               "passable_sidewalks": res.data.passable_sidewalks }});
    //   })
    //
    // axios.get('non-city.geojson')
    // .then(res => {
    //   this.setState({ noncity: res.data.features})
    // })
  }

  handleMove = (m) => {
    // don't really need this but keeping it around as a reminder of what's in m
    // var input = m._controls[2].inputString;
    // if (input !== this.state.searchInput)
    // {
    //   this.setState({searchInput: input});
    // }
    // var a = 1;
  }

  handleZoom = (m) => {
    this.setState({ zoom: m.getZoom()})
  }

  onMapLoad = (map) => {
    var geoCoder = new MapboxGeocoder({
                                        accessToken: 'pk.eyJ1IjoiZW1pbHlyYXBwb3J0IiwiYSI6ImNrNzgzOXV2ZzBjem8zaHM3YXcydHY4ZWkifQ.8fTcIfORRhn_Auh4mOrlRg',
                                        bbox: [-88.07094, 42.920,-87.863, 43.1947],
                                        marker: {
                                          color: 'purple'
                                          },
                                        mapboxgl: mapboxgl,
    })
    map.addControl(geoCoder);
  };

  render() {

    return (<MapBoxMap
            style="mapbox://styles/emilyrapport/ck81vc3f30yqp1irurqhxmaba"
            containerStyle={{
              height: '98vh',
              width: '98vw'
            }}
            center={MILWAUKEE_CENTER}
            zoom={[this.state.zoom]}
            maxBounds = {MILWAUKEE_BOUNDS}
            onMoveEnd = {this.handleMove}
            onZoomEnd = {this.handleZoom}
            onStyleLoad = {this.onMapLoad}>
              <ZoomControl position="bottom-right"/>
            </MapBoxMap>)

              // <Layer type="line"
              //         id="passable_sidewalks"
              //         paint={{"line-width": 3, "line-color": '#B7B1AE'}}
              //         before="poi_label">
              //  {
              //    //TODO: add key=id once the features have unique ids
              //    this.state.geoJson.passable_sidewalks.map((f) => (
              //      <Feature coordinates={f.geometry.coordinates} />
              //    ))
              //  }
              //  </Layer>
              // <Layer type="line"
              //         id="missing_sidewalk"
              //         paint={{"line-width": 3, "line-color": '#FF0000'}}
              //         before="poi_label">
              //  {
              //    //TODO: add key=id once the features have unique ids
              //    this.state.geoJson.missing_sidewalk.map((f) => (
              //      <Feature coordinates={f.geometry.coordinates} />
              //    ))
              //  }
              //  </Layer>
              //  <Layer type="line"
              //         id="sidewalk_issues"
              //         paint={{"line-width": 3, "line-color": '#FFFF00'}}
              //         before="poi_label">
              //  {
              //    //TODO: add key=id once the features have unique ids
              //    this.state.geoJson.sidewalk_issues.map((f) => (
              //      <Feature coordinates={f.geometry.coordinates} />
              //    ))
              //  }
              //  </Layer>
              //  <Layer type="fill"
              //         id="noncity"
              //         paint={{"fill-color": "#808080", "fill-opacity": .5}}
              //         before="poi_label">
              //    {
              //      this.state.noncity.map((f) => (
              //        <Feature coordinates={f.geometry.coordinates} />
              //      ))
              //    }
              //  </Layer>
  }
}

export default MapContainer;
