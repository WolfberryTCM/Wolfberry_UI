import { SEARCH_BUSINESS,GET_CURRENT_LOCATION, SEARCH_FAIL } from '../actions/types';

const initialState = {
  result: [],
  current_location:"",
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_BUSINESS:
      return {
        ...state,
        result: payload,
        loading: false
      };
    case GET_CURRENT_LOCATION:
      return {
        ...state,
        current_location:payload
    }
    case SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
}
