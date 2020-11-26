import './Login.scss';

import {
  EuiButton,
  EuiFieldPassword,
  EuiFieldText,
  EuiFlexGrid,
  EuiFlexItem,
  EuiForm,
  EuiFormRow,
  EuiIcon,
  EuiSpacer,
} from '@elastic/eui';
import { useState } from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import useInputState from '../../hooks/useInputState';

const Login = () => {
  const [email, setEmail] = useInputState('');
  const [password, setPassword] = useInputState('');
  const [dual] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Login">
      <EuiForm component="form" onSubmit={handleSubmit}>
        <EuiFormRow label="Email">
          <EuiFieldText
            placeholder="Email"
            value={email}
            prepend={<EuiIcon type="email" />}
            onChange={setEmail}
            aria-label="Email"
          />
        </EuiFormRow>
        <EuiFormRow label="Contraseña">
          <EuiFieldPassword
            placeholder="Contraseña"
            type={dual ? 'dual' : undefined}
            value={password}
            onChange={setPassword}
            aria-label="Contraseña"
          />
        </EuiFormRow>

        <EuiSpacer />

        <EuiFlexGrid columns={2}>
          <EuiFlexItem>
            <EuiButton type="submit" fill>
              Entrar
            </EuiButton>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiButton fill type="button" onClick={signInWithGoogle}>
              Entrar con Google
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGrid>
      </EuiForm>
    </div>
  );
};

export default Login;
