import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import trucks from "../Data/trucks";
import UploadFiles from "../Global/ImgaeUploadComponent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "48%",
  },
}));

export default function DriverForm() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const truckTypePros = {
    options: trucks,
    getOptionLabel: (option) => option,
  };
  return (
    <div className={classes.root} style={{ alignSelf: "center" }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <UploadFiles keyword="Driving Lisence" />
        </Grid>

        <Grid item xs={4}>
          <UploadFiles keyword="Profile Picture" />
        </Grid>

        <Grid item xs={4}>
          <UploadFiles keyword="Aadhar Card" />
        </Grid>
      </Grid>

      <div className="container" style={{ padding: 10 }}>
        <TextField
          label="First Name"
          id="filled-margin-none"
          defaultValue="First"
          className={classes.textField}
          variant="filled"
        />
        <TextField
          label="Last Name"
          id="filled-margin-none"
          defaultValue="Last"
          className={classes.textField}
          variant="filled"
        />
      </div>

      <div className="container" style={{ padding: 10 }}>
        <TextField
          label="Aadhar Card Number"
          id="filled-margin-none"
          defaultValue="Aadhar Card Number"
          className={classes.textField}
          variant="filled"
        />
        <TextField
          label="Lisence Number"
          id="filled-margin-none"
          defaultValue="Lisence Number"
          className={classes.textField}
          variant="filled"
        />
      </div>

      <div className="container" style={{ padding: 10 }}>
        <TextField
          label="Phone No"
          id="filled-margin-none"
          defaultValue="+91-1234567890"
          className={classes.textField}
          variant="filled"
        />
        <TextField
          label="Email Address"
          id="filled-margin-none"
          defaultValue="email@email.com"
          className={classes.textField}
          variant="filled"
        />
      </div>

      <div className="container" style={{ padding: 10 }}>
        <TextField
          label="Truck Number"
          id="filled-margin-none"
          defaultValue="UP-11-709201"
          className={classes.textField}
          variant="filled"
        />
        <TextField
          label="Truck id"
          id="filled-margin-none"
          defaultValue="14c057-d2ccdc-5df07b-5e640036-d80008"
          className={classes.textField}
          disabled={true}
          variant="filled"
        />
      </div>

      <div
        style={{
          margin: 40,
          paddingLeft: 10,
          paddingRight: 10,
          alignContent: "center",
        }}
      >
        <div>
          <Autocomplete
            {...truckTypePros}
            id="Truck Type"
            clearOnEscape
            variant="filled"
            renderInput={(params) => (
              <TextField {...params} label="Truck Type" margin="normal" />
            )}
          />
        </div>
      </div>

      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="#00c853"
          />
        }
        label="Verified"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            color="#00c853"
          />
        }
        label="Active"
      />
      <Link to="/union/drivers">
        <Button
          variant="contained"
          color="primary"
          size="small"
          fullWidth={true}
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </Link>
    </div>
  );
}
