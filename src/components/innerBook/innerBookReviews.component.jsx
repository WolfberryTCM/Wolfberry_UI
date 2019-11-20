import React from "react";
import InnerReviewCard from "./InnerReviewCard.component";

const InnerBookReviews = props => {
  const { profile } = props.location;
  const { reviews } = profile;
  return (
    <div>
      {reviews.map((review, index) => (
        <InnerReviewCard review={review} key={index}></InnerReviewCard>
      ))}
    </div>
  );
};

export default InnerBookReviews;
