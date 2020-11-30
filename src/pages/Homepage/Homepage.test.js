import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Homepage from './Homepage';

it('should render Homepage component', () => {
  const mockStore = configureStore([]);
  const store = mockStore();

  expect(
    toJson(
      shallow(
        <Provider store={store}>
          <Homepage />
        </Provider>,
      ),
    ),
  ).toMatchSnapshot();
});
