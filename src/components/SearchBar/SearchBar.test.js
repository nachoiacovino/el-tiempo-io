import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';

import { mockStore } from '../../setupTests';
import SearchBar from './SearchBar';

it('should render SearchBar component', () => {
  const store = mockStore();

  expect(
    toJson(
      shallow(
        <Provider store={store}>
          <SearchBar />
        </Provider>,
      ),
    ),
  ).toMatchSnapshot();
});
