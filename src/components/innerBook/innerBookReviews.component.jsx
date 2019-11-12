import React from 'react';
import InnerReviewCard from './innerReviewCard.component';

const innerBookReviews = props => {
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

export default innerBookReviews;
