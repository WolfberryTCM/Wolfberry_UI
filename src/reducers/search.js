import {
  SEARCH_BUSINESS,
  SEARCH_FAIL
} from '../actions/types'

const initialState = {
  result:null,
  loading: true,
  error:{}
}

export default function(state=initialState,action)  {
  const {type,payload} = action;

  switch(type) {
    case SEARCH_BUSINESS : 
      return {
        ...state,
        result: payload,
        loading: false
      };
      case SEARCH_FAIL:
        return {
          ...state,
          result:null,
          loading: false,
          error:payload          
        }
    default :
    return state;
  }
}