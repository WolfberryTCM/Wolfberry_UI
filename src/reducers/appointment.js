import {
  ADD_APPOINTMENT
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
    case ADD_APPOINTMENT :
      return {
        ...state,
        posts:[payload,...state.posts],
        loading:false
      };
    
  }
}