import React from 'react';
import axios from 'axios';
import ReactMapboxGl, { Layer,
                        Feature,
                        ZoomControl,
                        GeoJSONLayer,
                        Marker } from 'react-mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mapboxgl from 'mapbox-gl';
import InSituDialog from './InSituDialog.js';
import Legend from './Legend.js';
import SidewaukeeLogo from './logo_rectangle.png';
import ContributeIcon from './contribute_icon.svg';

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
const MILWAUKEE_BOUNDS = [[-89, 42.5],[-87, 44]];

const MapBoxMap = ReactMapboxGl({
  //todo: hide this token in a config
  accessToken:
    'pk.eyJ1IjoiZW1pbHlyYXBwb3J0IiwiYSI6ImNrNzgzOXV2ZzBjem8zaHM3YXcydHY4ZWkifQ.8fTcIfORRhn_Auh4mOrlRg'
});

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zoom: 15,
                   center: MILWAUKEE_CENTER,
                   missingCurbRamps: [],
                   searchInput: "",
                   inSituSelection: null,
                   SidewaukeeLogo};
  }

  componentDidMount() {
    var req = predsApi + "?lat1=" + MILWAUKEE_BOUNDS[0][1] + "&long1=" + MILWAUKEE_BOUNDS[0][0]
               + "&lat2=" + MILWAUKEE_BOUNDS[1][1] + "&long2=" + MILWAUKEE_BOUNDS[1][0];

    axios.get('./missing_curb_ramps.geojson')
    .then(res =>{
      this.setState({ missingCurbRamps: res.data.features});
    }
    )
  }

  renderGeolocation() {
    if (this.props.isGeolocationAvailable &&
        this.props.isGeolocationEnabled &&
        this.props.coords) {
      return (<Layer type="circle" paint={{"circle-radius": 6, "circle-color": "#1E90FF", "circle-stroke-width": 1, "circle-stroke-color": "white"}}>
                 <Feature coordinates={[this.props.coords.longitude, this.props.coords.latitude]} />
              </Layer>)
    }
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

  handleInSituSelection = (map, e) => {
    if (this.props.showInSituDialog){
      var lat_long = [e.lngLat.lng, e.lngLat.lat]
      this.setState({inSituSelection: lat_long})
    }
  }

  handleInSituFlowEnd = () => {
    setTimeout(this.props.setShowInSituDialog(false), 5000);
    this.setState({inSituSelection: null});
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
    const image = new Image();
    image.src = ContributeIcon;
    const images = ["myImage", image];
    return (<MapBoxMap
            style="mapbox://styles/emilyrapport/ck83qhm2e2ipj1io7uzhvl8cb"
            containerStyle={{
              height: '84vh',
              width: '98vw'
            }}
            center={this.state.center}
            zoom={[this.state.zoom]}
            maxBounds = {MILWAUKEE_BOUNDS}
            onMoveEnd = {this.handleMove}
            onZoomEnd = {this.handleZoom}
            onClick = {this.handleInSituSelection}
            onStyleLoad = {this.onMapLoad}>
              <ZoomControl position="bottom-right"/>
              <Layer type="circle"
                      id="missing_curb_ramp"
                      paint={{"circle-radius": [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        13, 2,
                        16, 5,
                      ],
                      "circle-color": '#e01f1f'}}>
               {
                 this.state.missingCurbRamps.map((f) => (
                   <Feature coordinates={f.geometry.coordinates} />
                 ))
               }
               </ Layer>
               <Layer type="symbol"
                      layout={{ "icon-image": "myImage", "icon-allow-overlap": true }}
                      images={images}>
                  {this.state.inSituSelection ? <Feature coordinates={this.state.inSituSelection} /> : null}
               </Layer>
               {this.props.showInSituDialog ? <InSituDialog api_url={API_URL} location={this.state.inSituSelection} handleInSituFlowEnd={this.handleInSituFlowEnd}/> : null }
               {this.renderGeolocation()}
               {this.props.showLegend ? <Legend api_url={API_URL} setShowLegend={this.props.setShowLegend}/> : null }
               <Layer>
                 <image id= 'SidewaukeeLogo' />
               </Layer>
            </MapBoxMap>)

  }
}

export default MapContainer;
