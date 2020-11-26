import { EuiComboBox } from '@elastic/eui';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setRequestSelectedStart } from '../../redux/actions';

const SearchBar = ({ options }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelected] = useState();

  const onChange = (selectedOption) => {
    setSelected(selectedOption);
    dispatch(setRequestSelectedStart(selectedOption));
  };

  return (
    <EuiComboBox
      placeholder="Select a single option"
      singleSelection={{ asPlainText: true }}
      options={options}
      selectedOptions={selectedOption}
      onChange={onChange}
    />
  );
};

export default SearchBar;
