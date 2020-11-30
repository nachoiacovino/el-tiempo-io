import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';

import { mockStore } from '../../setupTests';
import Card from './Card';

it('should render Card component', () => {
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
