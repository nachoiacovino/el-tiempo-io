import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import { setRequestProvinces, setSearchField } from './actions';
import { CHANGE_SEARCH_FIELD, REQUEST_PROVINCES_PENDING } from './constants';

const mockStore = configureStore([thunkMiddleware]);

describe('setSearchField', () => {
  it('should create an action to search provinces', () => {
    const text = 'woo';
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: text,
    };
    expect(setSearchField(text)).toEqual(expectedAction);
  });
});

describe('setRequestProvinces', () => {
  const store = mockStore();

  it('handles requesting provinces from API', async () => {
    await store.dispatch(setRequestProvinces());
    const actions = store.getActions();

    const expectedAction = {
      type: REQUEST_PROVINCES_PENDING,
    };
    expect(actions[0]).toEqual(expectedAction);
  });
});
