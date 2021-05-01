import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FetchEffects } from './fetch.effects';

describe('FetchEffects', () => {
  let actions$: Observable<any>;
  let effects: FetchEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FetchEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(FetchEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
