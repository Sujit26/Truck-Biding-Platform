import React from "react";
import TruckUnionCard from "../components/union_card";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import unions from '../components/Data/unions'
export default function Home() {
  return (
    <div style={{ padding: 10 }}>
      <Grid container spacing={3}>
        {unions.map((union, key) => {
          return (
            <Grid item xs={3}>
              <Link to={`/bookingscreen/${union.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <TruckUnionCard key={key} {...union} />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

