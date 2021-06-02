import { put, call } from 'redux-saga/effects';
import {
  PARSE_REQUEST,
  PARSE_GOT_RESPONSE,
  PARSE_ERROR,
  FETCHED_PARSE,
} from '../types/types';

export const parseRequestAC = () => ({ type: PARSE_REQUEST });

export const parseGotResponseAC = result => ({
  type: PARSE_GOT_RESPONSE,
  ingredientsParsed: result.ingredients
});

export const parseErrorAC = err => ({
  type: PARSE_ERROR,
  parseError: err,
});

export function* parseFetchAsyncAC(action) {
  console.log('Parse Func Called');

  try {
     console.log('parse');
    yield put(parseRequestAC());
    const response = yield fetch('/api/parses/', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ productname: action.data.search })
    });
    if (response.status === 200) {
      const result = yield call(() => response.json());
      yield put(parseGotResponseAC(result));
    } else if (response.status === 204) {
      let err = true;
      yield put(parseErrorAC(err));
    }
  } catch (error) {
    console.log(error);
  }
}

export const parseFetchAC = data => ({ type: FETCHED_PARSE, data });