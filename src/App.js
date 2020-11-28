import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Homepage from './pages/Homepage/Homepage';
import SignIn from './pages/SignIn/SignIn';
import { setCurrentUser } from './redux/user/userActions';

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(({ user }) => user.currentUser);

  useEffect(() => {
    let unsuscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) =>
          dispatch(setCurrentUser({ id: snapShot.id, ...snapShot.data() })),
        );
      } else dispatch(setCurrentUser(userAuth));
    });
    return () => unsuscribeFromAuth();
  }, [dispatch]);

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
