import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Login from './Login';

it('should render Login component', () => {
  const mockStore = configureStore([]);
  const store = mockStore();

  expect(
    toJson(
      shallow(
        <Provider store={store}>
          <Login />
        </Provider>,
      ),
    ),
  ).toMatchSnapshot();
});
