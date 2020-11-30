import './Homepage.scss';

import { EuiFlexGrid, EuiSpacer, EuiTitle, EuiToast } from '@elastic/eui';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/Card/Card';
import Loading from '../../components/Loading/Loading';
import SearchBar from '../../components/SearchBar/SearchBar';
import { firestore } from '../../firebase/firebase.utils';
import { setRequestMnpsStart } from '../../redux/actions';
import { updatePinnedStart } from '../../redux/user/userActions';

const Homepage = () => {
  const [options, setOptions] = useState([]);

  const dispatch = useDispatch();
  const currentUser = useSelector(({ user }) => user.currentUser);
  const pinned = useSelector(({ user }) => user.pinned);
  const municipalities = useSelector(
    ({ requestMunicipalities }) => requestMunicipalities.municipalities,
  );
  const selected = useSelector(
    ({ requestSelected }) => requestSelected.selected,
  );
  const municipalitiesIsPending = useSelector(
    ({ requestMunicipalities }) => requestMunicipalities.isPending,
  );
  const municipalitiesError = useSelector(
    ({ requestMunicipalities }) => requestMunicipalities.error,
  );

  useEffect(() => {
    if (currentUser) {
      const handleSnapshot = (snapshot) => {
        const pinned = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(updatePinnedStart(pinned));
      };

      firestore
        .doc(`users/${currentUser.id}`)
        .collection('pinned')
        .onSnapshot(handleSnapshot);
    } else {
      dispatch(updatePinnedStart(pinned));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, dispatch]);

  useEffect(() => {
    dispatch(setRequestMnpsStart());
  }, [dispatch]);

  useEffect(() => {
    setOptions(
      municipalities.map((option) => ({
        label: option.NOMBRE_CAPITAL,
        codigoine: option.CODIGOINE,
        codprov: option.CODPROV,
      })),
    );
  }, [municipalities]);

  if (municipalitiesIsPending) return <Loading />;
  if (municipalitiesError)
    return (
      <div className="error">
        <EuiToast
          title="No se han podido recuperar los municipios"
          color="danger"
          iconType="alert"
        >
          Por favor, inténtalo de nuevo más tarde.
        </EuiToast>
      </div>
    );

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
          <EuiSpacer />
          <Card mnp={selected} selected />
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
              <Card
                key={currentUser ? mnp.id : mnp.municipio.ID_REL}
                mnp={mnp}
                pinned
              />
            ))}
          </EuiFlexGrid>
        </>
      )}
    </div>
  );
};

export default Homepage;
