import './Register.scss';

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
  EuiTitle,
} from '@elastic/eui';
import { useDispatch } from 'react-redux';

import useInputState from '../../hooks/useInputState';
import { googleSignInStart, signUpStart } from '../../redux/user/userActions';

const Register = () => {
  const dispatch = useDispatch();
  const [displayName, setDisplayName] = useInputState('');
  const [email, setEmail] = useInputState('');
  const [password, setPassword] = useInputState('');
  const [confirmPassword, setConfirmPassword] = useInputState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    dispatch(signUpStart({ email, password, displayName }));
  };

  const handleLoginWithGoogle = () => dispatch(googleSignInStart());

  return (
    <EuiFlexItem>
      <EuiTitle>
        <h2>¿Aún no te has registrado?</h2>
      </EuiTitle>
      <EuiSpacer />
      <EuiForm component="form" onSubmit={handleSubmit}>
        <EuiFormRow label="Nombre">
          <EuiFieldText
            placeholder="Nombre"
            value={displayName}
            prepend={<EuiIcon type="user" />}
            onChange={setDisplayName}
            aria-label="Nombre"
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
        <EuiFormRow label="Contraseña">
          <EuiFieldPassword
            placeholder="Contraseña"
            value={password}
            onChange={setPassword}
            aria-label="Contraseña"
          />
        </EuiFormRow>
        <EuiFormRow label="Confirmar contraseña">
          <EuiFieldPassword
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={setConfirmPassword}
            aria-label="Confirmar contraseña"
          />
        </EuiFormRow>

        <EuiSpacer />

        <EuiFlexGrid columns={2}>
          <EuiFlexItem>
            <EuiButton type="submit" fill>
              Crea tu cuenta
            </EuiButton>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiButton fill type="button" onClick={handleLoginWithGoogle}>
              Crea tu cuenta con Google
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGrid>
      </EuiForm>
    </EuiFlexItem>
  );
};

export default Register;
