import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { searchBusiness } from '../../actions/search';
import PropTypes from 'prop-types';

import ResultCard from './ResultCard.component';

const Search = ({ setAlert, searchBusiness, results }) => {
  const [formData, setFormData] = useState({
    term: '',
    location: ''
  });

  const { term, location } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    searchBusiness({ term, location });
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Search</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Search the doctors
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
            value={location}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Search" />
      </form>
      {results &&
        results.map(result => <ResultCard result={result}></ResultCard>)}
    </Fragment>
  );
};

Search.protoTypes = {
  setAlert: PropTypes.func.isRequired,
  searchBusiness: PropTypes.func.isRequired,
  result: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  results: state.search.result
});

export default connect(
  mapStateToProps,
  { setAlert, searchBusiness }
)(Search);
