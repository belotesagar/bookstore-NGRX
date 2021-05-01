import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './fetch.reducer';

const getUserFeaturetate = createFeatureSelector<State>('fetchState');

export const getBooks = createSelector(getUserFeaturetate, state => state.books)

export const addBooks = createSelector(getUserFeaturetate, state => state.books)

export const getError = createSelector(getUserFeaturetate, state => state.error)