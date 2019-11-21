import React from "react";

const InnerBookTop = ({ profile }) => {
  const { name, location, rating, review_count } = profile;
  return (
    <div>
      <h1>{name}</h1>
      <div>{location}</div>
      <p>Rating:{rating}</p>
      <p>{review_count} Reviews</p>
      <p>Saved Number</p>
    </div>
  );
};

export default InnerBookTop;
