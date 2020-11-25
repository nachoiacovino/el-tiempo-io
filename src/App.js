import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Homepage from './pages/Homepage/Homepage';
import SignIn from './pages/SignIn/SignIn';
import { setCurrentUser } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();

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
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/signin" component={SignIn} />
    </Switch>
  );
};

export default App;
