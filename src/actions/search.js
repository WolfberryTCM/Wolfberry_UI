import axios from 'axios';
import {
  SEARCH_BUSINESS,
  GET_BUSINESS_DETAIL,
  GET_BUSINESS_REVIEWS,
  SEARCH_FAIL
} from './types';
import { setAlert } from './alert';

const search_url = 'https://agile-badlands-98142.herokuapp.com';

export const getBusinessReviews = alias => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ alias });
  
  try {
    const res = await axios.post(
      `${search_url}/api/yelp/reviews`,
      body,
      config
    );

    dispatch({
      type: GET_BUSINESS_REVIEWS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: SEARCH_FAIL
    });
  }
};

export const getBusinessDetail = alias => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ alias });
  try {
    const res = await axios.post(`${search_url}/api/yelp/detail`, body, config);

    dispatch({
      type: GET_BUSINESS_DETAIL,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    // }
    // dispatch({
    //   type: SEARCH_FAIL
    // });
  }
};

export const searchBusiness = ({ term, location }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ term, location });

  try {
    const res = await axios.post(`${search_url}/api/yelp`, body, config);

    dispatch({
      type: SEARCH_BUSINESS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: SEARCH_FAIL
    });
  }
};
