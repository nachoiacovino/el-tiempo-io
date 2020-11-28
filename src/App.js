import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import SignIn from './pages/SignIn/SignIn';

const App = () => {
  const currentUser = useSelector(({ user }) => user.currentUser);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
        />
      </Switch>
    </>
  );
};

export default App;
