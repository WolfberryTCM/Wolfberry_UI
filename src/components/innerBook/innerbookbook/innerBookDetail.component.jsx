import React, { useState } from "react";

// Redux
import { connect } from "react-redux";

import { setAlert } from "../../../actions/alert";
import { createAppointment } from "../../../actions/appointment";

const InnerBookDetail = ({
  createAppointment,
  setAlert,
  appointment,
  user
}) => {
  const [formData, setFormData] = useState({
    name: user ? user.name : "",
    email: user ? user.email : "",
    phone: ""
  });

  const { name, email, phone } = formData;

  const {
    title,
    price,
    date,
    time,
    duration,
    staff,
    staff_email
  } = appointment;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (name === "") {
      setAlert("Name is required", "danger");
      return;
    }
    if (email === "") {
      setAlert("Email is required", "danger");
      return;
    }
    if (phone === "") {
      setAlert("Phone is required", "danger");
      return;
    }
    createAppointment({
      name,
      phone,
      staff,
      staff_email,
      title,
      price,
      date,
      time,
      duration
    });
    console.log("order!");
  };
  return (
    <form className="form" onSubmit={e => onSubmit(e)}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={e => onChange(e)}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={e => onChange(e)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={e => onChange(e)}
        />
      </div>
      <input
        type="submit"
        className="btn btn-primary"
        value="Place Order"
        onClick={e => onSubmit(e)}
      />
    </form>
  );
};

const mapStateToProps = state => ({
  appointment: state.appointment,
  user: state.auth.user
});
export default connect(mapStateToProps, { createAppointment, setAlert })(
  InnerBookDetail
);
