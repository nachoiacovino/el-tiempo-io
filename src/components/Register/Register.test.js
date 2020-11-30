import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Register from './Register';

it('should render Register component', () => {
  const mockStore = configureStore([]);
  const store = mockStore();

  expect(
    toJson(
      shallow(
        <Provider store={store}>
          <Register />
        </Provider>,
      ),
    ),
  ).toMatchSnapshot();
});
