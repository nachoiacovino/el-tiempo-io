import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import SignIn from './SignIn';

it('should render SignIn component', () => {
  const mockStore = configureStore([]);
  const store = mockStore();

  expect(
    toJson(
      shallow(
        <Provider store={store}>
          <SignIn />
        </Provider>,
      ),
    ),
  ).toMatchSnapshot();
});
