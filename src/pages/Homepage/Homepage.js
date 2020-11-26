import './Homepage.scss';

import { EuiFlexGrid, EuiSpacer } from '@elastic/eui';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import { setRequestMnpsStart } from '../../redux/actions';

const Homepage = () => {
  const [options, setOptions] = useState([]);

  const dispatch = useDispatch();
  const municipalities = useSelector(
    ({ requestMunicipalities }) => requestMunicipalities.municipalities,
  );
  const selected = useSelector(
    ({ requestSelected }) => requestSelected.selected,
  );
  const pinned = useSelector(({ pinned }) => pinned.municipalities);
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

  return (
    <div className="Homepage">
      <EuiSpacer />
      <SearchBar options={options} />
      <EuiSpacer />
      <EuiFlexGrid columns={3} className="CardList">
        {selected && <Card mnp={selected} />}
        {pinned.map((mnp) => (
          <Card key={mnp.municipio.ID_REL} mnp={mnp} pinned />
        ))}
      </EuiFlexGrid>
    </div>
  );
};

export default Homepage;
