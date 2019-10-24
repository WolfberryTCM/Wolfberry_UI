import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner.component';
import ProfileTop from './ProfileTop.component';
import ProfileBook from './ProfileBook.component';
import ProfileReviews from './ProfileReviews.component';
import ProfileContact from './ProfileContact.component';

// import { getProfileById } from '../../actions/profile';

const Profile = ({
  // getProfileById,
  profile: { profile, loading },
  auth
  // match
}) => {
  // useEffect(() => {
  //   getProfileById(match.params.id);
  // }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to="/profiles" className="btn btn-light">
            Back To Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )}
          <div className="profile-grid my-1">
            <ProfileTop profile={profile} />
            <ProfileBook profile={profile} />
            <ProfileReviews profile={profile} />
            <ProfileContact profile={profile} />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps
  // { getProfileById }
)(Profile);