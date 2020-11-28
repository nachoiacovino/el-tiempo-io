import './Homepage.scss';

import { EuiFlexGrid, EuiSpacer, EuiTitle } from '@elastic/eui';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/Card/Card';
import SearchBar from '../../components/SearchBar/SearchBar';
import { firestore } from '../../firebase/firebase.utils';
import { setRequestMnpsStart } from '../../redux/actions';

const Homepage = () => {
  const [pinned, setPinned] = useState();
  const [options, setOptions] = useState([]);

  const dispatch = useDispatch();
  const currentUser = useSelector(({ user }) => user.currentUser);
  const pinnedStore = useSelector(({ user }) => user.pinned);
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

  useEffect(() => {
    if (currentUser) {
      const handleSnapshot = (snapshot) => {
        const pinned = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPinned(pinned);
      };

      firestore
        .doc(`users/${currentUser.id}`)
        .collection('pinned')
        .onSnapshot(handleSnapshot);
    } else {
      setPinned(pinnedStore);
    }
  }, [currentUser, pinnedStore]);

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

      {selected && (
        <>
          <EuiTitle>
            <h2>Resultado de la búsqueda</h2>
          </EuiTitle>
          <Card mnp={selected} />
          <EuiSpacer />
        </>
      )}
      {pinned?.length > 0 && (
        <>
          <EuiTitle>
            <h2>Municipios guardados</h2>
          </EuiTitle>
          <EuiFlexGrid columns={3} className="CardList">
            {pinned.map((mnp) => (
              <Card key={mnp.municipio.ID_REL} mnp={mnp} pinned />
            ))}
          </EuiFlexGrid>
        </>
      )}
    </div>
  );
};

export default Homepage;
