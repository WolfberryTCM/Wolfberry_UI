import {
  CREATE_APPOINTMENT,
  GET_ALL_APPOINTMENTS
} from '../actions/types'

const initialState = {
  appointments:[],
  appointment: null,
  loading:true,
  error:{}
}

export default function(state = initialState,action) {
  const {type,payload} = action;

  switch(type) {
    case CREATE_APPOINTMENT :
      return {
        ...state,
        appointments:[payload,...state.appointments],
        loading:false
      };
    case GET_ALL_APPOINTMENTS :
      return {
        ...state,
        appointments:payload,
        loading:false
      }
      default: 
      return state;
  }
}