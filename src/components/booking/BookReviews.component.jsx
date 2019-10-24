import React from 'react';
import { connect } from 'react-redux';
import ReviewCard from './ReviewCard.component';

const BookReviews = ({ reviews, loading }) => {
  return (
    <div>
      {loading === false &&
        reviews.map(review => <ReviewCard review={review}></ReviewCard>)}
    </div>
  );
};

const mapStateToProps = state => ({
  reviews: state.book.reviews,
  loading: state.book.loading
});
export default connect(mapStateToProps)(BookReviews);
