import React from "react";
import consignments from "../../components/Data/consignmnets";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

export default function ActiveConsignments() {
  function renderPaymentButton(status, id) {
    if (status == "Un-Paid") {
      return (
        <Link
          to={`/trackingscreen/${id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Grid item xs={2}>
            {status}
          </Grid>
        </Link>
      );
    } else {
      return (
        <Grid item xs={2}>
          {status}
        </Grid>
      );
    }
  }
  return (
    <div>
      <h1 style={{ textAlign: "left", margin: 20 }}>Active Consignments</h1>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <h3>Track id</h3>
        </Grid>
        <Grid item xs={2}>
          <h3>Tranporter</h3>
        </Grid>
        <Grid item xs={2}>
          <h3>Driver</h3>
        </Grid>
        <Grid item xs={2}>
          <h3>PickUp</h3>
        </Grid>
        <Grid item xs={2}>
          <h3>Drop-off</h3>
        </Grid>
        <Grid item xs={2}>
          <h3>Payement</h3>
        </Grid>
        <Grid item xs={1}>
          <h3>Track</h3>
        </Grid>

        <div></div>
      </Grid>

      {consignments.slice(0, 4).map((item, key) => {
        return (
          <div>
            <Grid container spacing={3}>
              <Grid item xs={1}>
                {item.id}
              </Grid>
              <Grid item xs={2}>
                <Link
                  to={`/bookingscreen/${item.trasporter_id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.trasporter_name}
                </Link>
              </Grid>
              <Grid item xs={2}>
                {item.driver_name}
              </Grid>
              <Grid item xs={2}>
                {item.pickup_address}
              </Grid>
              <Grid item xs={2}>
                {item.drop_off_address}
              </Grid>
              <Grid item xs={2}>
                {
                  <Link
                    to={item.payment_status=="Un-Paid"?`https://paytm.com/`:`/active_consignment`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {item.payment_status}
                  </Link>
                  
                }
              </Grid>

              {/* renderPaymentButton(status: {item.payment_status}, id:{item.id}) */}
              <Grid item xs={1}>
                <Link
                  to={`/trackingscreen/${item.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Click
                </Link>
              </Grid>
            </Grid>
          </div>
        );
      })}

      {/* < */}
    </div>
  );
}
