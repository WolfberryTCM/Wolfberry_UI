import React, { Fragment } from 'react';

export default ({ result }) => {
  const { name, img_url, rating, review_count, location } = result;
  return (
    <Fragment>
      <div className="card">
        <h5 className="card-header">{name}</h5>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </Fragment>
  );
};
