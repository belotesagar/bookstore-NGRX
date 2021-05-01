import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { IndexedDBService } from './indexed-db.service';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { EMPTY, Observable, of, pipe } from 'rxjs';
import * as FetchActions from './fetch.actions';
import { Tbooks } from './interfaces';

@Injectable()
export class FetchEffects {
  constructor(private actions$: Actions, private IndexedDBService: IndexedDBService) { }

  loadBooks$ = createEffect(() => this.actions$.pipe(
    ofType(FetchActions.FetchActionTypes.LoadFetchs),
    action => this.IndexedDBService.getUsers().pipe(
      map(books => (new FetchActions.LoadFetchsSuccess({ data: books }))),
      catchError(err => of(new FetchActions.LoadFetchsFailure({ error: err })))
    ))
  );

  addBooks$ = createEffect(() => this.actions$.pipe(
    ofType(FetchActions.FetchActionTypes.LoadAdds),
    map((action: FetchActions.LoadAdds) => action.payload),
    mergeMap(((book: Tbooks[]) => this.IndexedDBService.addUsers(book)).pipe(
      map((newBook: Tbooks[]) => (new FetchActions.LoadAddsSuccess(newBook))),
      catchError(err => of(new FetchActions.LoadAddsFailure({ error: err })))
    ))));
}
