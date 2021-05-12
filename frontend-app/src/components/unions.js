import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TruckUnionCard from "./union_card";

const Styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function UnionGrid() {
  const classes = Styles();
  const unions = [
    {
    name: "Shri Balaji Logistics Movers & Packers",
    picture: 'picture link',
    description: 'From the farm to your refrigerator, or the factory to your wardrobe, A.P. Moller - Maersk is developing solutions that meet customer needs from one end of the supply chain to the other. ',
    contact: '7037251245',
    address: ' 365 Pushpanjli Vihar, Janta Road, Saharanpur - 247001, Behind Dr Ashok '
  },
  {
    name: "Shri Balaji Logistics Movers & Packers",
    picture: 'picture link',
    description: 'From the farm to your refrigerator, or the factory to your wardrobe, A.P. Moller - Maersk is developing solutions that meet customer needs from one end of the supply chain to the other. ',
    contact: '7037251245',
    address: ' 365 Pushpanjli Vihar, Janta Road, Saharanpur - 247001, Behind Dr Ashok '
  },
];
  function FormRow() {
    return (
      unions.map((union, key) => {
          return <TruckUnionCard key={key} {...union}/>
      })
      // <React.Fragment>
      //   <Grid item >
      //   </Grid>
      //   {/* <Grid item xs={4}>
      //     <TruckUnionCard />
      //   </Grid>
      //   <Grid item xs={4}>
      //     <TruckUnionCard />
      //   </Grid> */}
      // </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
