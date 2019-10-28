import React from 'react';
import { Link } from 'react-router-dom';

const DashboardAction = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-primary"></i> Edit Profile
      </Link>
      <Link to="/edit-service" className="btn btn-light">
        <i className="fas fa-concierge-bell text-primary"></i> Edit Service
      </Link>
      <Link to="/edit-staff" className="btn btn-light">
        <i className="fas fa-user-md text-primary"></i> Edit Staff
      </Link>
      <Link to="/edit-hours" className="btn btn-light">
        <i className="far fa-calendar-alt text-primary"></i> Edit Hours
      </Link>
    </div>
  );
};

export default DashboardAction;
