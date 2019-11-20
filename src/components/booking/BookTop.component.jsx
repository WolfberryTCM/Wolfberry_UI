import React from "react";

const BookTop = ({ businessInfo }) => {
  const { name, location, rating, review_count } = businessInfo;
  const { display_address } = location;
  return (
    <div>
      <h1>{name}</h1>
      <div>
        {display_address[0]}
        {display_address[1]}
      </div>
      <p>Rating:{rating}</p>
      <p>{review_count} Reviews</p>
      <p>Saved Number</p>
    </div>
  );
};

export default BookTop;
