import './Header.scss';

import { EuiHeader, EuiHeaderLink, EuiHeaderLinks, EuiHeaderLogo, EuiHeaderSectionItem } from '@elastic/eui';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOutStart } from '../../redux/user/userActions';

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(({ user }) => user.currentUser);

  const signOut = () => dispatch(signOutStart());

  return (
    <EuiHeader>
      <EuiHeaderSectionItem border="right">
        <Link to="/">
          <EuiHeaderLogo iconType="logoMaps">El tiempo</EuiHeaderLogo>
        </Link>
      </EuiHeaderSectionItem>

      <EuiHeaderSectionItem>
        <EuiHeaderLinks aria-label="Navegación">
          {currentUser ? (
            <>
              <EuiHeaderLink className="greeting">
                ¡Hola {currentUser.displayName}!
              </EuiHeaderLink>
              <EuiHeaderLink onClick={signOut}>Salir</EuiHeaderLink>
            </>
          ) : (
            <EuiHeaderLink>
              <Link to="signin">Login</Link>
            </EuiHeaderLink>
          )}
        </EuiHeaderLinks>
      </EuiHeaderSectionItem>
    </EuiHeader>
  );
};

export default Header;
