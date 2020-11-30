import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Loading from './Loading';

it('should render Loading component', () => {
  const mockStore = configureStore([]);
  const store = mockStore();

  expect(
    toJson(
      shallow(
        <Provider store={store}>
          <Loading />
        </Provider>,
      ),
    ),
  ).toMatchSnapshot();
});
