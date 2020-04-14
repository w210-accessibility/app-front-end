import React from 'react';
import axios from 'axios';
import ReactMapboxGl, { Layer,
                        Feature,
                        ZoomControl,
                        GeoJSONLayer,
                        Marker,
                        Popup } from 'react-mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mapboxgl from 'mapbox-gl';
import InSituDialog from './InSituDialog.js';
import Legend from './Legend.js';
import { Button } from '@material-ui/core';
import AboutIcon from '@material-ui/icons/InfoOutlined';
import ContributeIcon from './contribute_icon.svg';
import InSituIcon from './in_situ_icon.svg';
import MissingCurbRampIcon from './missing_curb_ramp.svg';

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
const inSituResultsApi = API_URL + "/api/getInSitu";

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
                   presentCurbRamps: [],
                   searchInput: "",
                   inSituFeedback: [],
                   popup: null};
  }

  componentDidMount() {
    axios.get('./present_curb_ramps.geojson')
    .then(res =>{
      this.setState({ presentCurbRamps: res.data.features});
    }
    )

    axios.get('./missing_curb_ramps.geojson')
    .then(res =>{
      this.setState({ missingCurbRamps: res.data.features});
    }
    )

    var req = inSituResultsApi;
    axios.get(req)
         .then(res => {
           this.setState({ inSituFeedback: res.data.in_situ_results});
         })

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

  translateInSituLabel = (l) => {
    if (l=='surfaceIrregularity'){
      return "Surface Irregularity"
    } else if (l=='construction'){
      return "Construction"
    } else if (l=="snowIce"){
      return "Snow or Ice"
    }
      else if (l=="missingCurbRamp"){
        return "Missing Curb Ramp"
      } else if (l=="puddles"){
        return "Puddles"
      } else if (l=="normal"){
        return "Normal"
      }
  }

  translateDate = (d) => {
    var date = new Date(d);
    console.log(date);
    return date.toDateString();
  }
  renderPopup(){
    if (this.state.popup != null){
      const label = this.translateInSituLabel(this.state.popup.label);
      const date = this.translateDate(this.state.popup.date);
      return (<Popup
                coordinates={this.state.popup.location}>
                <p>{label}</p>
                <p>{date}</p>
              </Popup>)
    } else {
      return null
    }
  }

  handleZoom = (m) => {
    this.setState({ zoom: m.getZoom()})
  }

  handleInSituSelection = (map, e) => {
    if (this.props.showInSituDialog){
      var lat_long = [e.lngLat.lng, e.lngLat.lat]
      this.props.setInSituSelection(lat_long);
    }
  }

  handleInSituHover = (f) => {
    this.setState({popup: f});
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

  handleOnRender = (map) => {
    if (this.props.showInSituDialog){
      map.getCanvas().style.cursor = 'cell';
    } else {
      map.getCanvas().style.cursor = 'grab';
    }
  }


  renderInSitu(){
    if (this.state.zoom > 13){
      const inSituDisplayImage = new Image();
      inSituDisplayImage.src = InSituIcon;
      const inSituImages = ["inSituDisImage", inSituDisplayImage];
      return (<Layer type="symbol"
             layout={{ "icon-image": "inSituDisImage", "icon-allow-overlap": true }}
             images={inSituImages}>
         {this.state.inSituFeedback.map((f) => (
           <Feature data-tip={f.label} coordinates={f.location} onMouseEnter={() => this.handleInSituHover(f)} onMouseLeave={() => this.setState({popup: null})} />
         ))}
      </Layer>);
    } else {
      return null;
    }
  }

  render() {
    const contributeImage = new Image();
    contributeImage.src = ContributeIcon;
    const missingCurbRampImage = new Image();
    missingCurbRampImage.src = MissingCurbRampIcon;

    const images = ["contributeImage", contributeImage];
    const mcrImage = ["MCRImage", missingCurbRampImage]

    return (<MapBoxMap
            style="mapbox://styles/emilyrapport/ck8xdovap2plc1io6vwed7on5"
            containerStyle={{
              height: '74vh',
              width: '96vw',
              cursor: 'cell',
            }}
            center={this.state.center}
            zoom={[this.state.zoom]}
            maxBounds = {MILWAUKEE_BOUNDS}
            onMoveEnd = {this.handleMove}
            onZoomEnd = {this.handleZoom}
            onClick = {this.handleInSituSelection}
            onRender = {this.handleOnRender}
            onStyleLoad = {this.onMapLoad}>
              <ZoomControl position="bottom-right"/>
              <Layer type="circle"
                      id="present_curb_ramp"
                      paint={{"circle-radius": [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        13, 2,
                        16, 5,
                      ],
                      "circle-color": '#00a86b'}}>
               {
                 this.state.presentCurbRamps.map((f) => (
                   <Feature coordinates={f.geometry.coordinates}/>
                 ))
               }
               </ Layer>
               <Layer type="symbol"
                       id="missing_curb_ramp"
                       layout={{ "icon-image": "MCRImage", "icon-allow-overlap": true }}
                       images={mcrImage}>
                {
                  this.state.missingCurbRamps.map((f) => (
                    <Feature coordinates={f.geometry.coordinates}/>
                  ))
                }
                </ Layer>
               <Layer type="symbol"
                      layout={{ "icon-image": "contributeImage", "icon-allow-overlap": true }}
                      images={images}>
                  {this.props.inSituSelection ? <Feature coordinates={this.props.inSituSelection} /> : null}
               </Layer>
               {this.renderInSitu()}
               {this.props.showInSituDialog ? <InSituDialog api_url={API_URL} location={this.props.inSituSelection} handleInSituStatusChange={this.props.handleInSituStatusChange}/> : null }
               {this.renderGeolocation()}
               {this.props.showLegend ? <Legend api_url={API_URL} handleLegendClick={this.props.handleLegendClick}/> : null }
               {this.renderPopup()}

            </MapBoxMap>)

  }
}

export default MapContainer;
