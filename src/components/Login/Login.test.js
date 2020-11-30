import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';

import { mockStore } from '../../setupTests';
import Login from './Login';

it('should render Login component', () => {
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
