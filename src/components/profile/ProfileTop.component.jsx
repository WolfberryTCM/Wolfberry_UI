import React from 'react';
import { connect } from 'react-redux';

const ProfileTop = ({ profile }) => {
  const curProfile = profile.profile;
  const { name, location, rating, review_count } = curProfile;
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

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps)(ProfileTop);
