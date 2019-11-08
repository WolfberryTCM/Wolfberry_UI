import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
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
      <Router>
        {profile === null || loading ? (
          <CircularProgress></CircularProgress>
        ) : (
          <Fragment>
            <Link to="/dashboard" className="btn btn-light">
              Back to dashboard
            </Link>
            {/* {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link to="/edit-profile" className="btn btn-dark">
                  Edit Profile
                </Link>
              )} */}
            <ProfileTop></ProfileTop>
            <ul className="nav nav-pills nav-fill">
              <li className="nav-item">
                <Link className="nav-link" to="/profile-book">
                  Book
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile-reviews">
                  Reviews
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile-contact">
                  Contact
                </Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/profile-book" component={ProfileBook}></Route>
              <Route
                exact
                path="/profile-reviews"
                component={ProfileReviews}
              ></Route>
              <Route
                exact
                path="/profile-contact"
                component={ProfileContact}
              ></Route>
            </Switch>
          </Fragment>
        )}
      </Router>
    </Fragment>
  );
};

Profile.propTypes = {
  // getProfileById: PropTypes.func.isRequired,
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
