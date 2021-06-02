import {
    PARSE_REQUEST,
    PARSE_GOT_RESPONSE,
    PARSE_ERROR,
  } from '../types/types';
  
  const initialState = {
    ingredientsParsed: [],
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default function (state = initialState, action) {
    switch (action.type) {
  case PARSE_REQUEST: {
    return {
      ...state,
      loadingFetch: true,
      parseError: false,
    };
  }
  case PARSE_GOT_RESPONSE: {
    return {
      ...state,
      loadingFetch: false,
      ingredientsParsed: action.ingredientsParsed,
      parseError: false,
    };
  }
  case PARSE_ERROR: {
    return {
      ...state,
      loadingFetch: false,
      parseError: action.parseError,
    };
  }
  default:
      return action;
}
}