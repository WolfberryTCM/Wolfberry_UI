import React, { Fragment } from 'react';

const innerBookContact = props => {
  const { profile } = props.location;
  const { location, website } = profile;
  return (
    <Fragment>
      <div>
        <div>Phone Number</div>
        <div>{location}</div>
        <div>{website}</div>
      </div>
    </Fragment>
  );
};

export default innerBookContact;
