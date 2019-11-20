import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const innerResultCard = ({ profile }) => {
  const { name, location } = profile;
  return (
    <Fragment>
      <div className="card">
        <h5 className="card-header">
          {name}
          <p
            style={{
              display: "inLine",
              position: "absolute",
              right: "5px",
              fontSize: "15px",
              color: "green"
            }}
          >
            From Wolf Berry
          </p>
        </h5>
        <div className="card-body">
          <h5 className="card-title">{location}</h5>
          <p className="card-text">rating:</p>
          <p className="card-text">Reviews</p>
          <Link
            to={{
              pathname: "/innerbooking",
              profile: profile
            }}
            className="btn btn-primary"
          >
            More Details
          </Link>
          <Link to="/reviews" className="btn btn-primary">
            Reviews
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default innerResultCard;
