import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DashboardActions from './DashboardAction';

const DashboardTest = ({ auth, profile: { profile } }) => {
  return (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead"></p>
      <i className="fas fa-user">
        Welcome {auth.name ? auth.name : 'Test User'}
      </i>
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
          <DashboardActions></DashboardActions>
        </Fragment>
      )}
    </Fragment>
  );
};

DashboardTest.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps)(DashboardTest);
