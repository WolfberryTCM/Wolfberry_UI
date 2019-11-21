import {
  CREATE_APPOINTMENT
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
        posts:[payload,...state.appointments],
        loading:false
      };
      default: 
      return state;
  }
}