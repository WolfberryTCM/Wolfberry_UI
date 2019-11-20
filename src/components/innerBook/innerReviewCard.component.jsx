import React, { Fragment } from "react";

const InnerReviewCard = ({ review }) => {
  const { text, rating, time_created, user } = review;
  const { name } = user;
  return (
    <Fragment>
      <div className="card">
        <h5 className="card-header">{name}</h5>
        <div className="card-body">
          <h5 className="card-title">{text}</h5>
          <p className="card-text">rating:{rating}</p>
          <p className="card-text">{time_created} </p>
        </div>
      </div>
    </Fragment>
  );
};

export default InnerReviewCard;
