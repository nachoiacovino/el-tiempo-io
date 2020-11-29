import './SignIn.scss';

import { EuiFlexGroup } from '@elastic/eui';

import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

const SignIn = () => {
  return (
    <div className="SignIn">
      <EuiFlexGroup>
        <Login />
        <Register />
      </EuiFlexGroup>
    </div>
  );
};

export default SignIn;
