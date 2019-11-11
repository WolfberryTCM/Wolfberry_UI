import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getCurrentProfile } from '../../actions/profile';
import { getCurrentLocation } from '../../actions/search';
import DashboardActions from './DashboardAction';

const Dashboard = ({
  getCurrentProfile,
  getCurrentLocation,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
    getCurrentLocation();
  }, [getCurrentProfile, getCurrentLocation]); // blanked[] let it only run once

  // We want to make sure that the profile is loaded.
  // If it is still loading, we want to have a spin graph

  return loading && profile === null ? (
    <CircularProgress></CircularProgress>
  ) : (
    <Fragment>
      {user && !user.isDoctor && <Redirect to="search"></Redirect>}
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead"></p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions></DashboardActions>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { getCurrentProfile, getCurrentLocation }
)(Dashboard);
