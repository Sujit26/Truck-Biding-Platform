import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

const myStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function TruckUnionCard(props) {
  const classes = myStyles();

  const clickMe = (event) => {
    console.log(event);
  };

  return (
    <Card
      className={classes.root}
      onClick={(event) => {
        clickMe(props);
      }}
    >
      <CardMedia
        className={classes.media}
        image={props.picture}
        title={props.name}
      />
      <CardHeader title={props.name} />
      Contact: {props.contact}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Address: {props.address}
        </Typography>
      </CardContent>
    </Card>
  );
}
