import React, { useState, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { setAlert } from '../../actions/alert';
import { searchBusiness, getCurrentLocation } from '../../actions/search';
import PropTypes from 'prop-types';

import ResultCard from './ResultCard.component';

const Search = ({ setAlert, searchBusiness, getCurrentLocation, search }) => {
  const {
    result,
    current_location,
    limit,
    offset,
    hasMore,
    get_location_loading
  } = search;
  const [formData, setFormData] = useState({
    term: 'Chinese Medicine',
    location: current_location.city
  });

  const { term, location } = formData;

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    if (location === '') {
      setAlert();
    }
    e.preventDefault();
    searchBusiness({ term, location, limit, offset });
  };

  const loadMore = async e => {
    searchBusiness({ term, location, limit, offset });
  };

  const loader = <div className="loader">Loading ...</div>;

  return (
    <Fragment>
      {!get_location_loading && (
        <div>
          <h1 className="large text-primary">Doctors</h1>
          <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Location"
                name="location"
                defaultValue={current_location.city}
                value={location}
                onChange={e => onChange(e)}
              />
            </div>
            <input type="submit" className="btn btn-primary" value="Search" />
          </form>
          <div>From Yelp:</div>
          <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={hasMore}
            loader={loader}
          >
            <div className="tracks">
              {result &&
                result.map((result, index) => (
                  <ResultCard result={result} key={index}></ResultCard>
                ))}
            </div>
          </InfiniteScroll>
        </div>
      )}
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
