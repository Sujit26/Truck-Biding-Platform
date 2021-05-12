import React, { Component } from "react";
import TruckUnionCard from "../union_card";
import BookingForm from "./booking_form";
class UnionBooking extends React.Component {
  union = this.props.union;
  render() {
    return (
      <div class="row">
        <div class="column">
          <TruckUnionCard {...this.union}/>
        </div>
        <div class="column">
          <BookingForm />
        </div>
      </div>
    );
  }
}

export default UnionBooking;
