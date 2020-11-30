import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';

import { mockStore } from '../../setupTests';
import SignIn from './SignIn';

it('should render SignIn component', () => {
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
