import { Action } from '@ngrx/store';
import { FetchActions, FetchActionTypes } from './fetch.actions';
import { Tbooks } from './interfaces'

export const fetchFeatureKey = 'fetchState';

export interface State {
  books: Tbooks[],
  error: string
}

export const initialState: State = {
  books: [],
  error: ''
};

export function reducer(state = initialState, action: FetchActions): State {
  switch (action.type) {
    case FetchActionTypes.LoadFetchs:
      return { ...state, }

    case FetchActionTypes.LoadFetchsSuccess:
      return {
        ...state,
        books: action.payload.data,
        error: ''
      }
    case FetchActionTypes.LoadFetchsFailure:
      return {
        ...state,
        books: [],
        error: action.payload.error
      }
    case FetchActionTypes.LoadAdds:
      return { ...state, }

    case FetchActionTypes.LoadAddsSuccess:
      return {
        ...state,
        books: action.payload,
        error: ''
      }
    case FetchActionTypes.LoadAddsFailure:
      return {
        ...state,
        // books: action.payload,
        error: action.payload.error
      }
    default:
      return state;
  }
}
