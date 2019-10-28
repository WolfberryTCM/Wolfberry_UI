import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addService, deleteService } from '../../actions/profile';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const EditService = ({ profile, addService, deleteService, history }) => {
  const initialState = {
    title: '',
    price: '',
    duration: ''
  };

  const [formData, setFormData] = useState(initialState);

  const services = profile ? profile.services : [];

  const { title, price, duration } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    setFormData(initialState);
    addService(formData, history);
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Edit Your Service</h1>
      <small>* = required field</small>

      <ul className="list-group list-group-flush">
        {services &&
          services.map((service, index) => (
            <li
              className="list-group-item"
              style={{
                display: 'inline-flex',
                justifyContent: 'space-around'
              }}
            >
              <p>{index + 1}</p>
              <p>{service.title}</p>
              <p>{service.price} $</p>
              <p>{service.duration} m</p>
              <IconButton
                aria-label="delete"
                onClick={e => deleteService(service._id)}
              >
                <DeleteIcon />
              </IconButton>
            </li>
          ))}
      </ul>

      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* service name"
            name="title"
            value={title}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="price/$"
            name="price"
            value={price}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="duration/minutes"
            name="duration"
            onChange={e => onChange(e)}
            value={duration}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" value="Add" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  profile: state.profile.profile
});

export default connect(
  mapStateToProps,
  { addService, deleteService }
)(withRouter(EditService));
