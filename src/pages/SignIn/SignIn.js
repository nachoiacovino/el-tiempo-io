import './SignIn.scss';

import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

const SignIn = () => {
  return (
    <div className="SignIn">
      <Login />
      <Register />
    </div>
  );
};

export default SignIn;
