import axios from 'axios';

import {setAlert} from './alert'

import { CREATE_APPOINTMENT,GET_ALL_APPOINTMENTS,SET_SERVICE,SET_STAFF,SET_DATE_TIME,RESET_APPOINTMENT} from './types';

const url_base = 'https://agile-badlands-98142.herokuapp.com';

// Reset appointment
export const resetAppointment = () => dispatch => {
  dispatch({
    type: RESET_APPOINTMENT
  })
}

// Set service
export const setService = ({title,duration,price}) => dispatch => {
  dispatch({
    type:SET_SERVICE,
    payload: {
      title,duration,price
    }
  })
}

// Set staff
export const setStaff = ({name,email}) => dispatch => {
  dispatch({
    type:SET_STAFF,
    payload: {
      name,email
    }
  })
}

// Set date & time
export const setDateAndTime = (date,time) => dispatch => {
  dispatch({
    type:SET_DATE_TIME,
    payload: {
      date,time
    }
  })
}

// Create appointment
export const createAppointment = formData => async dispatch => {
  console.log(formData);
  const config = {
    headers :{
      'Content-Type':'application/json'
    }
  };

  try {
    const res = await axios.post(`${url_base}/api/appointment`,formData,config);
    dispatch({
      type:CREATE_APPOINTMENT,
      payload: res.data
    })

    dispatch(setAlert('Appointment Created','success'));

  } catch(err) {
    console.log(err);
  }
}

// Get appointments
export const getAllAppointments = () => async dispatch => {
  try {
    const res = await axios.get(`${url_base}/api/appointment`);

    dispatch({
      type: GET_ALL_APPOINTMENTS,
      payload: res.data
    })
  } catch (err) {
    console.log(err)
  }
}