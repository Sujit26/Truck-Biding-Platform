import React from "react";
import consignments from "../../components/Data/consignmnets";
import { MDBBox } from "mdbreact";
export default function ConsignmnetComponent(props) {
  const consignment = consignments[props.id];
  return (
    <div
      style={{
        width: "100%",
        padding: 50,
        margin: 20,
        height: 200,
      }}
    >
      <div>{consignment.trasporter_name}</div>
      <React.Fragment>
        <MDBBox bgColor="primary">primary color</MDBBox>
        <MDBBox bgColor="danger">danger color</MDBBox>
        <MDBBox bgColor="warning">warning color</MDBBox>
        <MDBBox bgColor="success">success color</MDBBox>
      </React.Fragment>
    </div>
  );
}
