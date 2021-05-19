import React from "react";
import ReactDOM from "react-dom";
import MapContainer from "../../components/Global/maps";

export default function MapComponent(props) {
  const consignment = props.consignment;
  return <MapContainer consignment = {consignment}/>;
}
