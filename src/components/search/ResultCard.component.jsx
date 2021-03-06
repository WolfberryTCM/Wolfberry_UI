import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getBusinessDetail, getBusinessReviews } from "../../actions/search";

const ResultCard = ({ result, getBusinessDetail, getBusinessReviews }) => {
  const { alias, name, location, rating, review_count } = result;
  const { display_address } = location;

  const getDetails = alias => {
    getBusinessDetail(alias);
    getBusinessReviews(alias);
  };
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
              color: "red"
            }}
          >
            From Yelp
          </p>
        </h5>
        <div className="card-body">
          <h5 className="card-title">
            {display_address[0]}
            {display_address[1]}
          </h5>
          <p className="card-text">rating:{rating}</p>
          <p className="card-text">{review_count} Reviews</p>
          <Link
            to={{
              pathname: "/booking",
              businessInfo: result
            }}
            className="btn btn-primary"
            onClick={() => getDetails(alias)}
          >
            More Details
          </Link>
          <Link
            to="/reviews"
            className="btn btn-primary"
            onClick={() => getBusinessReviews(alias)}
          >
            Reviews
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { getBusinessDetail, getBusinessReviews })(
  ResultCard
);
