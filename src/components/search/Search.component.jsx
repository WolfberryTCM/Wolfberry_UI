import React, { useState, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { searchBusiness, getCurrentLocation } from '../../actions/search';
import PropTypes from 'prop-types';

import ResultCard from './ResultCard.component';

const Search = ({ setAlert, searchBusiness, search }) => {
  const { result, current_location } = search;
  const [formData, setFormData] = useState({
    term: '',
    location: current_location.city
  });

  const { term, location } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    if (location === '') {
      setAlert();
    }
    e.preventDefault();
    searchBusiness({ term, location });
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Search</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Search doctors
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Term"
            name="term"
            value={term}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            defaultValue={location}
            value={location}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Search" />
      </form>
      {result &&
        result.map(result => (
          <ResultCard result={result} key={result.id}></ResultCard>
        ))}
    </Fragment>
  );
};

Search.protoTypes = {
  setAlert: PropTypes.func.isRequired,
  searchBusiness: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  search: state.search
});

export default connect(
  mapStateToProps,
  { setAlert, searchBusiness, getCurrentLocation }
)(Search);
