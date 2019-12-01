import React, { useState, useEffect, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const CreateProfile = ({ createProfile, getCurrentProfile, history }) => {
  const [formData, setFormData] = useState({
    name: "",
    business_size: "",
    website: "",
    location: ""
  });

  const { name, business_size, website, location } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCurrentProfile]);

  return (
    <Fragment>
      <h1 className="large text-primary">Create Your Business Profile</h1>
      <p className="lead">
        Let's get started. You can always update these details later in your
        account.
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <select
            name="business_size"
            value={business_size}
            onChange={e => onChange(e)}
          >
            <option value="0">* Select Business Size</option>
            <option value="Just me">Just me</option>
            <option value="2-5">2-5</option>
            <option value="6-50">6-50</option>
            <option value="50+">50+</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Business Name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={e => onChange(e)}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={e => onChange(e)}
          ></input>{" "}
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfile)
); // Pass in history
