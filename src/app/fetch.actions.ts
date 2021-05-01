import { Action } from '@ngrx/store';
import { Tbooks } from './interfaces'

export enum FetchActionTypes {
  LoadFetchs = '[Fetch] Load Fetchs',
  LoadFetchsSuccess = '[Fetch] Load Fetchs Success',
  LoadFetchsFailure = '[Fetch] Load Fetchs Failure',
  LoadAdds = '[Add] Load Adds',
  LoadAddsSuccess = '[Add] Load Adds Success',
  LoadAddsFailure = '[Add] Load Adds Failure',
}

export class LoadFetchs implements Action {
  readonly type = FetchActionTypes.LoadFetchs;
}

export class LoadFetchsSuccess implements Action {
  readonly type = FetchActionTypes.LoadFetchsSuccess;
  constructor(public payload: { data: Tbooks[] }) { }
}

export class LoadFetchsFailure implements Action {
  readonly type = FetchActionTypes.LoadFetchsFailure;
  constructor(public payload: { error: string }) { }
}

export class LoadAdds implements Action {
  readonly type = FetchActionTypes.LoadAdds;
  constructor(public payload: Tbooks[]) { }
}

export class LoadAddsSuccess implements Action {
  readonly type = FetchActionTypes.LoadAddsSuccess;
  constructor(public payload: Tbooks[]) { }
}

export class LoadAddsFailure implements Action {
  readonly type = FetchActionTypes.LoadAddsFailure;
  constructor(public payload: { error: string }) { }
}

export type FetchActions = LoadFetchs |
  LoadFetchsSuccess |
  LoadFetchsFailure |
  LoadAdds |
  LoadAddsSuccess |
  LoadAddsFailure;

