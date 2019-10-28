import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addStaff, deleteStaff } from '../../actions/profile';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const EditStaff = ({ profile, addStaff, deleteStaff, history }) => {
  const initialState = {
    name: ''
  };

  const [formData, setFormData] = useState(initialState);

  const staffs = profile ? profile.staffs : [];

  const { name } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    setFormData(initialState);
    addStaff(formData);
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Edit Your Staff</h1>
      <small>* = required field</small>

      <ul className="list-group list-group-flush">
        {staffs &&
          staffs.map((staff, index) => (
            <li
              className="list-group-item"
              style={{
                display: 'inline-flex',
                justifyContent: 'space-around'
              }}
            >
              <p>{index + 1}</p>
              <p>{staff.name}</p>
              <IconButton
                aria-label="delete"
                onClick={e => deleteStaff(staff._id)}
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
            placeholder="* staff name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            required
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
  { addStaff, deleteStaff }
)(withRouter(EditStaff));
