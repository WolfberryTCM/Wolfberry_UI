import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const InnerBookService = props => {
  const classes = new useStyles();

  const { profile } = props.location;
  const { services } = profile;
  return (
    <div>
      {services.map((service, index) => (
        <Button
          variant="contained"
          color="primary"
          key={index}
          className={classes.button}
        >
          {service.title}
        </Button>
      ))}
    </div>
  );
};

export default InnerBookService;
