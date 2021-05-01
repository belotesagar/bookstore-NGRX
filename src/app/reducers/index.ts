import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromFetch from '../fetch.reducer';

export interface State {

  [fromFetch.fetchFeatureKey]: fromFetch.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromFetch.fetchFeatureKey]: fromFetch.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
