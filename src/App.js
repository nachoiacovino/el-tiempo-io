import { EuiCard, EuiFlexGrid, EuiFlexItem } from '@elastic/eui';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setRequestProvinces, setSearchField } from './redux/actions';

const App = () => {
  const [filteredProvinces, setFilteredProvinces] = useState([]);

  const dispatch = useDispatch();
  const searchField = useSelector(
    ({ searchProvinces }) => searchProvinces.searchField,
  );
  const provinces = useSelector(
    ({ requestProvinces }) => requestProvinces.provinces,
  );
  const isPending = useSelector(
    ({ requestProvinces }) => requestProvinces.isPending,
  );
  const error = useSelector(({ requestProvinces }) => requestProvinces.error);

  useEffect(() => dispatch(setRequestProvinces()), [dispatch]);
  useEffect(() => {
    setFilteredProvinces(
      provinces.filter((province) =>
        province.NOMBRE_PROVINCIA.toLowerCase().includes(
          searchField.toLowerCase(),
        ),
      ),
    );
  }, [provinces, searchField]);

  const onSearchChange = (e) => dispatch(setSearchField(e.target.value));

  return (
    <div>
      <EuiFlexGrid columns={3}>
        {provinces.map((province) => (
          <EuiFlexItem>
            <EuiCard
              title={province?.NOMBRE_PROVINCIA}
              description="description"
            />
          </EuiFlexItem>
        ))}
      </EuiFlexGrid>
    </div>
  );
};

export default App;
