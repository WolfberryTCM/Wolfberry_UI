import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BookTop = ({ detail, loading }) => {
  const { name, location, rating, review_count } = detail;
  const { display_address } = location;
  return (
    loading === false && (
      <div>
        <h1>{name}</h1>
        <div>
          {display_address[0]}
          {display_address[1]}
        </div>
        <p>{rating}</p>
        <p>{review_count} Reviews</p>
        <p>Saved Number</p>
      </div>
    )
  );
};

BookTop.propTypes = {
  detail: PropTypes.object.isRequired
};

const mapStateToProp = state => ({
  detail: state.book.detail,
  loading: state.book.loading
});

export default connect(mapStateToProp)(BookTop);
