import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// redux
import { connect } from "react-redux";
import { setService } from "../../../actions/appointment";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const InnerBookService = props => {
  const classes = new useStyles();

  const { profile } = props.location;
  const { setService } = props;

  const { services } = profile;

  const onSubmit = (e, service) => {
    const link = document.querySelector(".directToStaff");
    e.preventDefault();
    setService(service);
    link.click();
  };
  return (
    <div>
      {services.map((service, index) => (
        <div key={index}>
          <Link
            className="directToStaff"
            to={{
              pathname: "/innerbookbook/staff",
              profile: profile
            }}
          >
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={e => onSubmit(e, service)}
            >
              {" "}
              {service.title}
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default connect(null, { setService })(InnerBookService);
