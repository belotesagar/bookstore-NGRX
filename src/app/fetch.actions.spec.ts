import * as FetchActions from './fetch.actions';

describe('Fetch', () => {
  it('should create an instance', () => {
    expect(new FetchActions.LoadFetchs()).toBeTruthy();
  });
});
