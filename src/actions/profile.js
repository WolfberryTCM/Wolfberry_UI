import axios from 'axios';
import { setAlert } from './alert';

import { GET_PROFILE,GET_ALL_PROFILES,UPDATE_PROFILE, PROFILE_ERROR } from './types';

const profile_url = 'https://agile-badlands-98142.herokuapp.com';

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

// Get all profiles

export const getProfiles = () => async dispatch => {
  try {
    const res = await axios.get(`${profile_url}/api/profile`);

    dispatch({
      type:GET_ALL_PROFILES,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload:{
        msg : err.response.statusText,
        status: err.response.status
      }
    })
  }
}

// Get profile by ID
export const getProfileById = userId => async dispatch => {
  try {
    const res = await axios.get(`${profile_url}/api/profile/${userId}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

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

    const res = await axios.post(
      `${profile_url}/api/profile`,
      formData,
      config
    );

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

// Add service
export const addService = (formData) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type':'application/json'
      }
    };

    const res = await axios.put(`${profile_url}/api/profile/service`,formData,config);

    dispatch({
      type:UPDATE_PROFILE,
      payload: res.data
    })

    dispatch(setAlert('Service Added','success'));

  } catch(err) {
    const errors = err.response.data.errors;

    if(errors) {
      errors.forEach(error=>dispatch(setAlert(error.msg,'danger')))
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {msg:
      err.response.statusText, status:err.response.status}
    })
  }
}

// Delete service
export const deleteService = id => async dispatch=> {
  try {
    const res = await axios.delete(`${profile_url}/api/profile/service/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload:res.data
    })

    dispatch(setAlert('Service Removed','success'))
  } catch(err) {
    dispatch({
      type:PROFILE_ERROR,
      payload:{
        msg:err.response.statusText,
        status: err.response.status
      }
    })
  }
}

// Add staff
export const addStaff = (formData) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type':'application/json'
      }
    };

    const res = await axios.put(`${profile_url}/api/profile/staff`,formData,config);

    dispatch({
      type:UPDATE_PROFILE,
      payload: res.data
    })

    dispatch(setAlert('Staff Added','success'));

  } catch(err) {
    const errors = err.response.data.errors;

    if(errors) {
      errors.forEach(error=>dispatch(setAlert(error.msg,'danger')))
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {msg:
      err.response.statusText, status:err.response.status}
    })
  }
}

// Delete staff
export const deleteStaff = id => async dispatch=> {
  try {
    const res = await axios.delete(`${profile_url}/api/profile/staff/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload:res.data
    })

    dispatch(setAlert('Staff Removed','success'))
  } catch(err) {
    console.error(err.message)
    dispatch({
      type:PROFILE_ERROR,
      payload:{
        msg:err.response.statusText,
        status: err.response.status
      }
    })
  }
}

// Update hours
export const updateHours = (formData) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post(`${profile_url}/api/profile/hours`,formData,config);

    dispatch({
      type:UPDATE_PROFILE,
      payload: res.data
    })

    dispatch(setAlert('Hours Updated','success'))
  } catch (err) {
    if(err.response) {
      const errors = err.response.data.errors;

    if(errors) {
      errors.forEach(error=>dispatch(setAlert(error.msg,'danger')))
    }
      dispatch({
        type: PROFILE_ERROR,
        payload: {msg:
        err.response.statusText, status:err.response.status}
      })
    }
    
  }
}
