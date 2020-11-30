import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';

import { mockStore } from '../../setupTests';
import Loading from './Loading';

it('should render Loading component', () => {
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
