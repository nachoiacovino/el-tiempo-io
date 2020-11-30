import { clearSelected, setRequestMnpsStart, setRequestSelectedStart } from './actions';
import { CLEAR_SELECTED, REQUEST_MUNICIPALITIES_PENDING, REQUEST_SELECTED_PENDING } from './constants';

it('should create an action to request municipalities', () => {
  const expectedAction = { type: REQUEST_MUNICIPALITIES_PENDING };
  expect(setRequestMnpsStart()).toEqual(expectedAction);
});

it('should create an action to request selected municipality', () => {
  const mockMunicipality = {
    id: '123',
    codprov: '01',
    codigoine: '01003000000',
    municipio: { ID_REL: '456' },
  };

  const expectedAction = {
    type: REQUEST_SELECTED_PENDING,
    payload: mockMunicipality,
  };
  expect(setRequestSelectedStart(expectedAction.payload)).toEqual(
    expectedAction,
  );
});

it('should create an action to clear selected', () => {
  const expectedAction = { type: CLEAR_SELECTED };
  expect(clearSelected()).toEqual(expectedAction);
});
