import React from "react";
import Grid from "@material-ui/core/Grid";
import BookingForm from "../components/BookingComponent/booking_form";
import { useParams } from "react-router-dom";
import unions from "../components/Data/unions";
export default function BookingScreen() {
  let { id } = useParams();
  console.log(id);
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(" + unions[id].picture + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div style={{ height: "100%" }}>
          <Grid container spacing={3}>
            <Grid item xs={9}>
              <div styles={{ margin: 20 }}>
                {/* <img src={unions[id].picture} /> */}
              </div>
            </Grid>
            <Grid item xs={3}>
              <BookingForm />
            </Grid>
          </Grid>
        </div>
      </div>
      <h1>{unions[id].name}</h1>

      <div style={{ margin: 20 }}>
        <ul style={{ textAlign: "justify" }}>
          <h4>Contact: {unions[id].contact}</h4>
          <h4>Address: {unions[id].address}</h4>
          <p>{unions[id].description}</p>
        </ul>
        <h1>Truck Types</h1>
        <ul style={{ textAlign: "justify" }}>
          <h2 style={{ textAlign: "justify" }}>
            Closed Body Truck Or Container Truck
          </h2>
          <h3 style={{ textAlign: "justify", paddingLeft: 10 }}>
            This truck category consists of three types of container trucks or
            closed body trucks with varied lengths. This type of trucks is used
            to transport heavy loads.
          </h3>
          <ul
            style={{
              marginBottom: 15,
              marginTop: 0,
              textAlign: "left",
            }}
          >
            <li>32 Feet Single Axel Truck (7.5 Ton Capacity)</li>
            <li>32 Feet Multi Axel Truck (16 Ton Capacity)</li>
            <li>24 Feet Single Axel Truck (7.5 Ton Capacity)</li>
            <li>24 Feet Multi Axel Truck (16 Ton Capacity)</li>
            <li>20 Feet Single Axel Truck (7.5 Ton Capacity)</li>
            <li>20 Feet Multi Axel Truck (16 Ton Capacity)</li>
          </ul>

          <h2 style={{ textAlign: "justify" }}>Heavy Open Body Trucks</h2>
          <h3 style={{ textAlign: "justify", margin: 10 }}>
            This segment of a truck involves three types of trucks with
            different sizes which are suitable for the transportation of
            chemicals, food grains, raw materials and other heavy goods.
          </h3>
          <ul
            style={{
              marginBottom: 15,
              marginTop: 0,
              textAlign: "left",
            }}
          >
            <li>32-40 Feet 14 Wheeler Truck (21 Ton To 31 Ton Capacity)</li>
            <li>20-32 Feet 10 Wheeler Truck (10 Ton To 25 Ton Capacity)</li>
            <li>24-32 Feet 12 Wheeler Truck (16 Ton To 25 Ton Capacity)</li>
          </ul>

          <h2 style={{ textAlign: "justify" }}> Light Open Body Truck</h2>
          <h3 style={{ textAlign: "justify", margin: 10 }}>
            This category has three types of trucks with different capacities
            and is used for bulky boxes containing light items. We use-
          </h3>
          <ul
            style={{
              marginBottom: 15,
              marginTop: 0,
              textAlign: "left",
            }}
          >
            <li>14 Feet Eicher (Capacity Of 3.5 - 4 Ton Capacity)</li>
            <li>17 Feet Eicher (Capacity Of 4.5 - 5 Ton Capacity</li>
            <li>19 Feet Eicher (Capacity Of 5.5 - 10 Ton Capacity)</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}
