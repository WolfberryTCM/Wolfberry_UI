import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">WOLFBERRY</h1>
          <h2 className="x-small">
            The complete platform for Chinese Medicine professionals.
          </h2>

          <p className="lead">
            <i className="far fa-check-circle"></i>
            Access your notes, scheduling, and billing all in one place.
          </p>
          <p className="lead">
            <i className="far fa-check-circle"></i>
            Purchase all herbs in prescription by just clicking one button.
          </p>
          <p className="lead">
            <i className="far fa-check-circle"></i>
            Go paperless to save time and stay organized.
          </p>

          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
