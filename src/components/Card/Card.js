import './Card.scss';

import { EuiButton, EuiCard, EuiFlexItem, EuiIcon, EuiSpacer } from '@elastic/eui';
import { useDispatch } from 'react-redux';

import { pinMunicipality, unpinMunicipality } from '../../redux/actions';

const Card = ({ mnp, pinned }) => {
  const dispatch = useDispatch();

  const handlePin = (action, selected) => {
    if (action === 'PIN') dispatch(pinMunicipality(selected));
    else if (action === 'UNPIN') dispatch(unpinMunicipality(selected));
  };

  const buttonToShow = pinned ? (
    <EuiButton type="EuiButton" fill onClick={() => handlePin('UNPIN', mnp)}>
      Eliminar búsqueda
    </EuiButton>
  ) : (
    <EuiButton type="EuiButton" fill onClick={() => handlePin('PIN', mnp)}>
      Guardar búsqueda
    </EuiButton>
  );

  return (
    <EuiFlexItem>
      <EuiCard
        title={mnp.municipio.NOMBRE_CAPITAL}
        description={
          <>
            Temperatura actual: {mnp.temperatura_actual}. Probabilidad de
            lluvia: {mnp.lluvia}
            <EuiSpacer />
            <EuiIcon type="pin" />
            {buttonToShow}
          </>
        }
      />
    </EuiFlexItem>
  );
};

export default Card;
