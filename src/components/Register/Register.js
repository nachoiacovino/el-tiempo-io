import './Register.scss';

import { EuiButton, EuiFieldPassword, EuiFieldText, EuiForm, EuiFormRow, EuiIcon, EuiSpacer } from '@elastic/eui';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import useInputState from '../../hooks/useInputState';

const Register = () => {
  const [displayName, setDisplayName] = useInputState('');
  const [email, setEmail] = useInputState('');
  const [password, setPassword] = useInputState('');
  const [confirmPassword, setConfirmPassword] = useInputState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      await createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Register">
      <EuiForm component="form" onSubmit={handleSubmit}>
        <EuiFormRow label="Name">
          <EuiFieldText
            placeholder="Name"
            value={displayName}
            prepend={<EuiIcon type="user" />}
            onChange={setDisplayName}
            aria-label="Email"
          />
        </EuiFormRow>
        <EuiFormRow label="Email">
          <EuiFieldText
            placeholder="Email"
            value={email}
            prepend={<EuiIcon type="email" />}
            onChange={setEmail}
            aria-label="Email"
          />
        </EuiFormRow>
        <EuiFormRow label="Password">
          <EuiFieldPassword
            placeholder="Password"
            value={password}
            onChange={setPassword}
            aria-label="Password"
          />
        </EuiFormRow>
        <EuiFormRow label="Confirm password">
          <EuiFieldPassword
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            aria-label="Confirm password"
          />
        </EuiFormRow>

        <EuiSpacer />

        <EuiButton type="submit" fill fullWidth>
          Sign up
        </EuiButton>
      </EuiForm>
    </div>
  );
};

export default Register;
