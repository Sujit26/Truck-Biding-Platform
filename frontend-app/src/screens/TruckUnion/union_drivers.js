import React from "react";
import DriverCard from "../../components/Driver/DriverCard";
import drivers from "../../components/Data/driver";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
export default function UnionDrivers() {
  const classes = useStyles();
  return (
    <div style={{ padding: 10 }}>
      <Grid container>
        <Grid item xs={9}>
          <h1 style={{ textAlign: "left", margin: 20 }}>Drivers Regsitered</h1>
        </Grid>
        <Grid item xs={3}>
          <div style={{ textAlign: "left", margin: 20 }}></div>
          <Link to="/union/driver_form/new">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<Icon>add</Icon>}
            >
              Register New Driver
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {drivers.map((driver, key) => {
          return (
            <Grid item xs={3}>
              <Link
                to={`/driver_form/${driver.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <DriverCard key={key} driver={driver} />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
