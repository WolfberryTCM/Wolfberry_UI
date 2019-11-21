import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// redux
import { connect } from "react-redux";
import { setStaff } from "../../../actions/appointment";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const InnerBookStaff = props => {
  const classes = new useStyles();

  const { profile } = props.location;
  const { staffs } = profile;
  const { setStaff } = props;

  const onSubmit = (e, staff) => {
    const link = document.querySelector(".directToDate");
    e.preventDefault();
    setStaff(staff);
    link.click();
  };
  return (
    <div>
      {staffs.map((staff, index) => (
        <div key={index}>
          <Link
            className="directToDate"
            to={{
              pathname: "/innerbookbook/date",
              profile: profile
            }}
          >
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={e => onSubmit(e, staff)}
            >
              {staff.name}
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default connect(null, { setStaff })(InnerBookStaff);
