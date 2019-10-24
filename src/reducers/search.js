import { SEARCH_BUSINESS, SEARCH_FAIL } from '../actions/types';

const initialState = {
  result: [],
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
