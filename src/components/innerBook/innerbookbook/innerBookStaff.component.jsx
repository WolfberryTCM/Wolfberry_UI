import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const InnerBookStaff = props => {
  const classes = new useStyles();

  const { profile } = props.location;
  const { staffs } = profile;
  return (
    <div>
      {staffs.map((staff, index) => (
        <Button
          variant="contained"
          color="primary"
          key={index}
          className={classes.button}
        >
          {staff.name}
        </Button>
      ))}
    </div>
  );
};

export default InnerBookStaff;
