import { EuiCard, EuiFlexGrid, EuiFlexItem } from '@elastic/eui';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setRequestMunicipalities, setSearchField } from './redux/actions';

const App = () => {
  const [filteredMunicipalities, setFilteredMunicipalities] = useState([]);

  const dispatch = useDispatch();
  const searchField = useSelector(
    ({ searchMunicipalities }) => searchMunicipalities.searchField,
  );
  const municipalities = useSelector(
    ({ requestMunicipalities }) => requestMunicipalities.municipalities,
  );
  const isPending = useSelector(
    ({ requestMunicipalities }) => requestMunicipalities.isPending,
  );
  const error = useSelector(
    ({ requestMunicipalities }) => requestMunicipalities.error,
  );

  useEffect(() => dispatch(setRequestMunicipalities()), [dispatch]);
  useEffect(() => {
    setFilteredMunicipalities(
      municipalities.filter((municipality) =>
        municipality.NOMBRE_PROVINCIA.toLowerCase().includes(
          searchField.toLowerCase(),
        ),
      ),
    );
  }, [municipalities, searchField]);

  const onSearchChange = (e) => dispatch(setSearchField(e.target.value));

  return (
    <div>
      <EuiFlexGrid columns={3}>
        {municipalities.map((municipality) => (
          <EuiFlexItem key={municipality.ID_REL}>
            <EuiCard
              title={municipality?.NOMBRE_PROVINCIA}
              description="description"
            />
          </EuiFlexItem>
        ))}
      </EuiFlexGrid>
    </div>
  );
};

export default App;
