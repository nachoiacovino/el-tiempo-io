import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import { setRequestMunicipalities, setSearchField } from './actions';
import { CHANGE_SEARCH_FIELD, REQUEST_MUNICIPALITIES_PENDING } from './constants';

const mockStore = configureStore([thunkMiddleware]);

describe('setSearchField', () => {
  it('should create an action to search municipalities', () => {
    const text = 'woo';
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: text,
    };
    expect(setSearchField(text)).toEqual(expectedAction);
  });
});

describe('setRequestMunicipalities', () => {
  const store = mockStore();

  it('handles requesting municipalities from API', async () => {
    await store.dispatch(setRequestMunicipalities());
    const actions = store.getActions();

    const expectedAction = {
      type: REQUEST_MUNICIPALITIES_PENDING,
    };
    expect(actions[0]).toEqual(expectedAction);
  });
});
