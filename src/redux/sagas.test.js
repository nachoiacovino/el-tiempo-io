import { put, takeLatest } from 'redux-saga/effects';

import elTiempo from '../api/elTiempo';
import {
  REQUEST_MUNICIPALITIES_FAILED,
  REQUEST_MUNICIPALITIES_PENDING,
  REQUEST_SELECTED_FAILED,
  REQUEST_SELECTED_PENDING,
} from './constants';
import {
  requestMunicipality,
  setRequestMnpsAsync,
  setRequestMunicipalities,
  setRequestSelected,
  setRequestSelectedAsync,
} from './sagas';

describe('should handle request municipalities API', () => {
  it('should trigger on REQUEST_MUNICIPALITIES_PENDING', () => {
    const generator = setRequestMunicipalities();
    expect(generator.next().value).toEqual(
      takeLatest(REQUEST_MUNICIPALITIES_PENDING, setRequestMnpsAsync),
    );
  });

  it('should call elTiempo api to request municipalities', () => {
    const generator = setRequestMnpsAsync();
    const getCollection = jest.spyOn(elTiempo, 'get');
    generator.next();
    expect(getCollection).toHaveBeenCalled();
  });

  it('should fire REQUEST_MUNICIPALITIES_FAILED if "GET" fails', () => {
    const mockError = 'error';

    const newGenerator = setRequestMnpsAsync();
    newGenerator.next();
    expect(newGenerator.throw(mockError).value).toEqual(
      put({ type: REQUEST_MUNICIPALITIES_FAILED, payload: mockError }),
    );
  });
});

describe('should handle request selected API', () => {
  const mockMunicipality = {
    id: '123',
    codprov: '01',
    codigoine: '01003000000',
    municipio: { ID_REL: '456' },
  };
  it('should trigger on REQUEST_SELECTED_PENDING', () => {
    const generator = setRequestSelected();
    expect(generator.next().value).toEqual(
      takeLatest(REQUEST_SELECTED_PENDING, setRequestSelectedAsync),
    );
  });

  it('should call elTiempo api to request detailed municipality', () => {
    const generator = requestMunicipality(mockMunicipality);
    const getCollection = jest.spyOn(elTiempo, 'get');
    generator.next();
    expect(getCollection).toHaveBeenCalled();
  });

  it('should fire REQUEST_SELECTED_FAILED if "GET" fails', () => {
    const mockError = 'error';

    const newGenerator = setRequestSelectedAsync({ payload: mockMunicipality });
    newGenerator.next();
    expect(newGenerator.throw(mockError).value).toEqual(
      put({ type: REQUEST_SELECTED_FAILED, payload: mockError }),
    );
  });
});
