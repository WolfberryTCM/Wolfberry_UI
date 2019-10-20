import axios from 'axios';
import { setAlert } from './alert';

import { GET_PROFILE, PROFILE_ERROR } from './types';


const profile_url = 'http://localhost:5000'

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get(`${profile_url}/api/profile/me`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get profile by ID
export const getProfileById = userId => async dispatch => {
  try {
    const res = await axios.get(`${profile_url}/api/profile/${userId}`)

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })

  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload:{
        msg: err.response.statusText,
        status:err.response.status
      }
    })
  }
}

// Create or Update profile
export const createProfile = (
  formData,
  history, // history push redirect,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.post(`${profile_url}/api/profile`, formData, config);

    // Get profile for the state
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
