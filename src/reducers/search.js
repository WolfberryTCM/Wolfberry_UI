import {
  SEARCH_BUSINESS,
  SEARCH_FAIL,
  GET_BUSINESS_DETAIL,
  GET_BUSINESS_REVIEWS
} from '../actions/types';

const initialState = {
  result: null,
  result_chosen: '',
  reviews: null,
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
    case GET_BUSINESS_DETAIL:
      return {
        ...state,
        result_chosen: payload,
        loading: false
      };
    case GET_BUSINESS_REVIEWS:
      return {
        ...state,
        reviews: payload,
        loading: false
      };
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
