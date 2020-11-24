import { EuiComboBox } from '@elastic/eui';
import { useState } from 'react';

const SearchBar = ({ options }) => {
  const [selectedOption, setSelected] = useState();

  const onChange = (selectedOptions) => setSelected(selectedOptions);

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
