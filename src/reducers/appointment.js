import {
  SET_SERVICE,
  SET_STAFF,
  SET_DATE_TIME,
  RESET_APPOINTMENT
} from '../actions/types'

const initialState = {
  title:'',
  duration:'',
  price:'',
  staff: '',
  staff_email:'',
  date:'',
  time:'',
  error:{}
}

export default function(state = initialState,action) {
  const {type,payload} = action;

  switch(type) {
    case RESET_APPOINTMENT :
      return {
        ...initialState
      }
    case SET_SERVICE :
      return {
        ...state,
        title:payload.title,
        duration:payload.duration,
        price:payload.price
      };
    case SET_STAFF :
      return {
        ...state,
        staff:payload.name,
        staff_email:payload.email
      };
    case SET_DATE_TIME :
      return {
        ...state,
        date:payload.date,
        time:payload.time
      };
    default:
      return state
  }
}