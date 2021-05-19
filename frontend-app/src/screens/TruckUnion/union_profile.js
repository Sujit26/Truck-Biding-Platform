import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { Link } from "react-router-dom";
import trucks from "../../components/Data/trucks";
import UploadFiles from "../../components/Global/ImgaeUploadComponent";
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

export default function UnionProfile() {
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
    <div className="container" style={{ padding: 10 }}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <div className="container" style={{ padding: 10, width: "100%" }}>
            <TextField
              label="Truck Union Name"
              id="filled-margin-none"
              defaultValue="Truck Union Name"
              className={classes.textField}
              variant="filled"
            />
          </div>
        </Grid>
        <Grid item xs={4}>
          <UploadFiles keyword="Image" />
        </Grid>
      </Grid>

      <div className={classes.root} style={{ alignSelf: "center" }}>
        <div className="container" style={{ padding: 10 }}>
          <TextField
            label="Address1"
            id="filled-margin-none"
            defaultValue="Address1"
            className={classes.textField}
            variant="filled"
          />
          <TextField
            label="Address2"
            id="filled-margin-none"
            defaultValue="Address2"
            className={classes.textField}
            variant="filled"
          />
        </div>

        <div className="container" style={{ padding: 10 }}>
          <TextField
            label="Zipcode"
            id="filled-margin-none"
            defaultValue="Zipcode"
            className={classes.textField}
            variant="filled"
          />
          <TextField
            label="City"
            id="filled-margin-none"
            defaultValue="City"
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
            label="State"
            id="filled-margin-none"
            defaultValue="State"
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
            label="Lisence Number"
            id="filled-margin-none"
            defaultValue="Lisence Number"
            className={classes.textField}
            variant="filled"
          />
          
          <TextField
            label="Union id"
            id="filled-margin-none"
            defaultValue="14c057-d2ccdc-5df07b-5e640036-d80008"
            className={classes.textField}
            disabled={true}
            variant="filled"
          />
        </div>

        
        {/* <FormControlLabel
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
        /> */}
        <Link to="/home">
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
    </div>
  );
}
