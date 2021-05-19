import React from "react";
import consignments from "../../components/Data/consignmnets";
export default function ConsignmnetComponent(props) {
  const consignment = consignments[props.id];
  var examples = ["example1", "example2", "example3"];
  return (
    <div
      style={{
        width: "100%",
        // padding: 10,
        margin: 20,
        height: 200,
      }}
    >
      <div style={{ textAlign: "justify", flexWrap: true }}>
        <h3>Transport Aggregator</h3>
        {consignment.trasporter_name}
        <h3>Driver Assigned</h3>
        {consignment.driver_name}
        <h3>Pick-Up Date</h3>
        {consignment.pickup_date}

        <h3>Pick Up Address</h3>
        {consignment.pickup_address}
        <h3>Drop Off Address</h3>
        {consignment.drop_off_address}
        <h3>Comments</h3>
        <div>
          {examples.forEach(function (item, index) {
            return { item };
          })}
        </div>
      </div>
    </div>
  );
}
