import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import SignIn from './pages/SignIn/SignIn';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/signin" component={SignIn} />
    </Switch>
  );
};

export default App;
