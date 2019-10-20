import React, { useState, Fragment, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    name: '',
    business_size: '',
    website: '',
    location: '',
    services: ''
  });

  const { name, business_size, website, location, services } = formData;

  useEffect(() => {
    getCurrentProfile();
    setFormData({
      name: loading || !profile.name ? '' : profile.name,
      business_size:
        loading || !profile.business_size ? '' : profile.business_size,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      services: loading || !profile.services ? '' : profile.services
    });
  }, [loading]); // When it load, this will run.

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
    // edit and create all share create action
    // true, means edit and will alert update success
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Update Your Profile</h1>
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
          ></input>{' '}
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Services"
            name="services"
            value={services}
            onChange={e => onChange(e)}
          ></input>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(EditProfile)); // Pass in history
