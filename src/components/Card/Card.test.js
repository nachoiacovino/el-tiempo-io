import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Card from './Card';

it('should render Card component', () => {
  const mockStore = configureStore([]);
  const store = mockStore();

  expect(
    toJson(
      shallow(
        <Provider store={store}>
          <Card />
        </Provider>,
      ),
    ),
  ).toMatchSnapshot();
});
