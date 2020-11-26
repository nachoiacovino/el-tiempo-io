import './Homepage.scss';

import { EuiButton, EuiCard, EuiFlexGrid, EuiFlexItem, EuiSpacer } from '@elastic/eui';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import SearchBar from '../../components/SearchBar/SearchBar';
import { pinMunicipality, setRequestMnpsStart } from '../../redux/actions';

const Homepage = () => {
  const [options, setOptions] = useState([]);

  const dispatch = useDispatch();
  const municipalities = useSelector(
    ({ requestMunicipalities }) => requestMunicipalities.municipalities,
  );
  const selected = useSelector(
    ({ requestSelected }) => requestSelected.selected,
  );
  const isPending = useSelector(
    ({ requestMunicipalities }) => requestMunicipalities.isPending,
  );
  const error = useSelector(
    ({ requestMunicipalities }) => requestMunicipalities.error,
  );

  useEffect(() => dispatch(setRequestMnpsStart()), [dispatch]);

  useEffect(() => {
    setOptions(
      municipalities.map((option) => ({
        label: option.NOMBRE_CAPITAL,
        codigoine: option.CODIGOINE,
        codprov: option.CODPROV,
      })),
    );
  }, [municipalities]);

  const saveSearch = (selected) => {
    dispatch(pinMunicipality(selected));
  };

  return (
    <div className="Homepage">
      <EuiSpacer />
      <Link to="signin">Sign In</Link>
      <EuiSpacer />
      <SearchBar options={options} />
      {selected && (
        <EuiFlexGrid columns={3}>
          <EuiFlexItem key={selected.ID_REL}>
            <EuiCard
              title={selected.municipio.NOMBRE_CAPITAL}
              description={
                <>
                  Temperatura actual: {selected.temperatura_actual}.
                  Probabilidad de lluvia: {selected.lluvia}
                  <EuiSpacer />
                  <EuiButton
                    type="EuiButton"
                    fill
                    onClick={() => saveSearch(selected)}
                  >
                    Guardar búsqueda
                  </EuiButton>
                </>
              }
            />
          </EuiFlexItem>
        </EuiFlexGrid>
      )}
    </div>
  );
};

export default Homepage;
