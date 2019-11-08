import React from 'react';
import { connect } from 'react-redux';

const ProfileStaff = ({ profile }) => {
  const { staffs } = profile;

  return (
    <div>
      <ul className="list-group list-group-flush">
        {staffs &&
          staffs.map((staff, index) => (
            <li
              key={index}
              className="list-group-item"
              style={{
                display: 'inline-flex',
                justifyContent: 'space-around'
              }}
            >
              <p>{index + 1}</p>
              <p>{staff.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  profile: state.profile.profile
});

export default connect(mapStateToProps)(ProfileStaff);
