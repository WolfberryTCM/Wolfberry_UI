import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login, googleLogin } from "../../actions/auth";

// Google Login
import GoogleLogin from "react-google-login";

const Login = ({
  login,
  googleLogin,
  auth: { isAuthenticated, loading, user }
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log(email, password);
    login(email, password);
  };

  // Redirect if logged in

  if (isAuthenticated && user) {
    if (user.isDoctor) return <Redirect to="/dashboard" />;
    else return <Redirect to="/search" />;
  }

  // if (isAuthenticated && !loading && !user.isDoctor) {
  //   return <Redirect to="/search" />;
  // }

  const responseGoogle = response => {
    console.log(response);
    console.log(response.Zi.access_token);
    console.log(response.tokenId);
    googleLogin(response.tokenId);
  };

  const onSignIn = googleUser => {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign Into Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            required
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>

      <form className="form">
        <div className="form-group">
          <GoogleLogin
            clientId="1037712764162-3aivd1te1aa8bgnvhfhqsm0s2s0cch9a.apps.googleusercontent.com"
            buttonText="Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            className="btn btn-outline-danger"
          />
        </div>
        <div className="g-signin2" data-onsuccess={onSignIn}></div>
      </form>

      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { login, googleLogin })(Login);
