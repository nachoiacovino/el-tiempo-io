import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from './components/SearchBar/SearchBar';
import { setRequestMunicipalities, setSearchField } from './redux/actions';

const App = () => {
  const [options, setOptions] = useState([]);

  const dispatch = useDispatch();
  const searchField = useSelector(
    ({ searchMunicipalities }) => searchMunicipalities.searchField,
  );
  const municipalities = useSelector(
    ({ requestMunicipalities }) => requestMunicipalities.municipalities,
  );
  const selectedOption = useSelector(
    ({ selectOption }) => selectOption.selectedOption,
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

  const onSearchChange = (e) => dispatch(setSearchField(e.target.value));

  return (
    <div>
      <SearchBar options={options} />
      {/*       <EuiFlexGrid columns={3}>
        {municipalities.map((municipality) => (
          <EuiFlexItem key={municipality.ID_REL}>
            <EuiCard
              title={municipality?.NOMBRE_PROVINCIA}
              description="description"
            />
          </EuiFlexItem>
        ))}
      </EuiFlexGrid> */}
    </div>
  );
};

export default App;
