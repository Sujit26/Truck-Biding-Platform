import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyD44t7UQlp2t0abQqmZCji8wFApRcioYA4");
Geocode.setLanguage("en");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();
export class MapContainer extends Component {
  // constructor (props) {
  //   super(props)
  //   this.consignment = props.consignment;
    
    
  // }
  lat= Math.floor(Math.random() * 30) + 8;
  lng = Math.floor(Math.random() * 20) + 68;

  
  render() {

    
    return (
      <Map
        google={this.props.google}
        zoom={8}

        initialCenter={{ lat: this.lat, lng: this.lng }}
      >
        <Marker position={{ lat: this.lat, lng: this.lng }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD44t7UQlp2t0abQqmZCji8wFApRcioYA4",
})(MapContainer);
