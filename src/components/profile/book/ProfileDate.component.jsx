import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import 'flatpickr/dist/themes/material_green.css';
import Flatpickr from 'react-flatpickr';

const ProfileDate = ({ profile }) => {
  const { hours } = profile;
  const { isInitial, open } = hours;
  const getRestDays = () => {
    let restDays = [];
    open.forEach(day => {
      if (!day.check) restDays.push(parseInt(day.day));
    });
    return restDays;
  };
  const rest = getRestDays();
  const [date, setDate] = useState('');
  const options = {
    inline: true,
    minDate: 'today',
    maxDate: new Date().fp_incr(30),
    disable: [
      function(date) {
        // return true to disable
        return rest.includes(date.getDay());
      }
    ]
  };

  return (
    <Fragment>
      {isInitial ? (
        <div>You have not set up your hours.</div>
      ) : (
        <div>
          <Flatpickr
            value={date}
            onChange={date => setDate(date)}
            options={options}
          />
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  profile: state.profile.profile
});

export default connect(mapStateToProps)(ProfileDate);
