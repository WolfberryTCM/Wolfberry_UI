import axios from 'axios';
import {
  SEARCH_BUSINESS,
  SEARCH_FAIL
} from './types'
import {setAlert} from './alert'

const search_url = 'http://localhost:5000'

export const searchBusiness = ({term,location}) => async dispatch => {

  const config = {
    headers: {
      'Content-Type':'application/json'
    }
  };

  const body = JSON.stringify({term,location})

  try {
    const res = await axios.post(`${search_url}/api/yelp`,body,config);

    dispatch({
      type:SEARCH_BUSINESS,
      payload:res.data
    })
  } catch (err) {
    console.log(err)
    // const errors = err.response.data.errors;

    // if (errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    // }
    // dispatch({
    //   type: SEARCH_FAIL
    // });
  }
}