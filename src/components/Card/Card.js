import './Card.scss';

import { EuiButtonIcon, EuiCard, EuiFlexItem, EuiHorizontalRule, EuiIcon } from '@elastic/eui';
import { useDispatch } from 'react-redux';

import { clearSelected } from '../../redux/actions';
import { pinMunicipality, unpinMunicipality } from '../../redux/user/userActions';

const Card = ({ mnp, pinned, selected }) => {
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
      aria-label="Guardar municipio"
      onClick={() => handlePin('PIN', mnp)}
    />
  );

  const deleteButton = selected && (
    <EuiButtonIcon
      iconType="trash"
      aria-label="Eliminar"
      onClick={() => dispatch(clearSelected())}
    />
  );

  return (
    <EuiFlexItem>
      <EuiCard
        className="Card"
        title={
          <>
            {mnp.municipio.NOMBRE_CAPITAL} {buttonToShow} {deleteButton}
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
