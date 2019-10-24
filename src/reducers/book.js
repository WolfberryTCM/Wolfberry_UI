import {
  GET_BUSINESS_DETAIL,
  GET_BUSINESS_REVIEWS,
  SEARCH_FAIL
} from '../actions/types';

const initialState = {
  detail: null,
  reviews: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BUSINESS_DETAIL:
      return {
        ...state,
        detail: payload,
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
