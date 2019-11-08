import React from 'react';
import { connect } from 'react-redux';

const ProfileService = ({ profile }) => {
  const { services } = profile;
  return (
    <div>
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
            </li>
          ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  profile: state.profile.profile
});
export default connect(mapStateToProps)(ProfileService);
