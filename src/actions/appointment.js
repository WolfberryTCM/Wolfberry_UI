import axios from 'axios';

import {setAlert} from './alert'

import { CREATE_APPOINTMENT } from './types';

const url_base = 'https://agile-badlands-98142.herokuapp.com';


// Create appointment
export const createAppointment = formData => async dispatch => {
  const config = {
    headers :{
      'Content-Type':'application/json'
    }
  };

  try {
    const res = await axios.post('api/appointment',formData,config);
    dispatch({
      type:CREATE_APPOINTMENT,
      payload: res.data
    })

    dispatch(setAlert('Appointment Created','success'));

  } catch(err) {
    console.log(err);
  }
}