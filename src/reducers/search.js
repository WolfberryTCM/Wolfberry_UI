import { SEARCH_BUSINESS,GET_CURRENT_LOCATION, SEARCH_FAIL } from '../actions/types';

const initialState = {
  total:"",
  result: [],
  limit:20,
  offset:0,
  hasMore:true,
  current_location:"",
  loading: true,
  get_location_loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_BUSINESS:
      return {
        ...state,
        total:payload.total,
        result: [...state.result,...payload.businesses],
        offset: state.result.length + payload.businesses.length,
        limit: payload.total - state.result.length - payload.businesses.length > state.limit? state.limit : payload.total - state.result.length - payload.businesses.length,
        hasMore: payload.total - state.result.length > 0 ? true : false,
        loading: false
      };
    case GET_CURRENT_LOCATION:
      return {
        ...state,
        current_location:payload,
        get_location_loading : false
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
