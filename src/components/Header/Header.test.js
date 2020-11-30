import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';

import { mockStore } from '../../setupTests';
import Header from './Header';

it('should render Header component', () => {
  const store = mockStore();

  expect(
    toJson(
      shallow(
        <Provider store={store}>
          <Header />
        </Provider>,
      ),
    ),
  ).toMatchSnapshot();
});
