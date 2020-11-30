import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';

import App from './App';
import { mockStore } from './setupTests';

it('should render App component', () => {
  const store = mockStore();

  expect(
    toJson(
      shallow(
        <Provider store={store}>
          <App />
        </Provider>,
      ),
    ),
  ).toMatchSnapshot();
});
