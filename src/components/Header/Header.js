import './Header.scss';

import { EuiHeader, EuiHeaderLink, EuiHeaderLinks, EuiHeaderLogo, EuiHeaderSectionItem } from '@elastic/eui';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

const Header = () => {
  const currentUser = useSelector(({ user }) => user.currentUser);

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
              <EuiHeaderLink onClick={() => auth.signOut()}>
                Salir
              </EuiHeaderLink>
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
