import './Card.scss';

import { EuiButtonIcon, EuiCard, EuiFlexItem, EuiHorizontalRule, EuiIcon } from '@elastic/eui';
import { useDispatch } from 'react-redux';

import { pinMunicipality, unpinMunicipality } from '../../redux/user/userActions';

const Card = ({ mnp, pinned }) => {
  const dispatch = useDispatch();

  const handlePin = (action, selected) => {
    if (action === 'PIN') dispatch(pinMunicipality(selected));
    else if (action === 'UNPIN') dispatch(unpinMunicipality(selected));
  };

  const buttonToShow = pinned ? (
    <EuiButtonIcon
      iconType="pinFilled"
      aria-label="Eliminar"
      onClick={() => handlePin('UNPIN', mnp)}
    />
  ) : (
    <EuiButtonIcon
      iconType="pin"
      aria-label="Guardar"
      onClick={() => handlePin('PIN', mnp)}
    />
  );

  return (
    <EuiFlexItem>
      <EuiCard
        className="Card"
        title={
          <>
            {mnp.municipio.NOMBRE_CAPITAL} {buttonToShow}
            <EuiHorizontalRule margin="xs" />
          </>
        }
        description={''}
      >
        <p className="mb-5">
          <EuiIcon type="temperature" /> Temperatura actual:{' '}
          <strong>{mnp.temperatura_actual}ºC</strong>
        </p>
        <p>
          <EuiIcon type="cloudDrizzle" /> Probabilidad de lluvia:{' '}
          <strong>{mnp.lluvia}%</strong>
        </p>
      </EuiCard>
    </EuiFlexItem>
  );
};

export default Card;
