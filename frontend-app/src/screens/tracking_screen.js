import React from "react";
import Grid from "@material-ui/core/Grid";
import ConsignmnetComponent from "../components/Tracking/consignmnet_component";
import MapComponent from "../components/Tracking/map_component";
import { useParams } from "react-router";
import consignments from "../components/Data/consignmnets";

export default function TrackingScreen(props) {
  let { id } = useParams();
  const consingment = consignments[id];

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ConsignmnetComponent id={id} />
        </Grid>
        <Grid item xs={9}>
          <MapComponent consignment= {consingment}/>
        </Grid>
      </Grid>
    </div>
  );
}
