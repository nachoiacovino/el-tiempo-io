import './Homepage.scss';

import { EuiCard, EuiFlexGrid, EuiFlexItem } from '@elastic/eui';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from '../../components/SearchBar/SearchBar';
import { setRequestMunicipalities } from '../../redux/actions';

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

  useEffect(() => dispatch(setRequestMunicipalities()), [dispatch]);

  useEffect(() => {
    setOptions(
      municipalities.map((option) => {
        option.label = option.NOMBRE_CAPITAL;
        return option;
      }),
    );
  }, [municipalities]);

  return (
    <div>
      <SearchBar options={options} />
      {selected && (
        <EuiFlexGrid columns={3}>
          <EuiFlexItem key={selected.ID_REL}>
            <EuiCard
              title={selected.municipio.NOMBRE_CAPITAL}
              description={
                <div>
                  Temperatura actual: {selected.temperatura_actual}.
                  Probabilidad de lluvia: {selected.lluvia}
                </div>
              }
            />
          </EuiFlexItem>
        </EuiFlexGrid>
      )}
    </div>
  );
};

export default Homepage;
