import React from 'react';
import Select from 'react-select';
import { BACKGROUND_FONT_COLOR, FONT_COLOR } from '../constants';

/**
 * Component not used. Openweather countries list is too big to load on select component. Might be
 * useful in some future functionality
 */

const customStyles = {
  control: () => ({
    display: 'flex',
    'min-height': '40px',
    width: '40%',
    'min-width': '300px',
    'font-size': '1em',
    'padding-left': '0.5em',
    'border-radius': '20px',
    border: '1px solid white',
    background: 'transparent'
  }),
  input: provided => ({
    ...provided,
    color: FONT_COLOR
  }),
  placeholder: provided => ({
    ...provided,
    color: FONT_COLOR
  }),
  menu: provided => ({
    ...provided,
    border: '1px solid white',
    backgroundColor: BACKGROUND_FONT_COLOR,
    borderRadius: '0px 0px 10px 10px'
  }),
  option: (provided, { isFocused }) => ({
    ...provided,
    color: isFocused ? 'grey' : FONT_COLOR
  }),
  singleValue: provided => ({
    ...provided,
    color: FONT_COLOR
  }),
  indicatorSeparator: provided => ({ ...provided, display: 'none' })
};
const options = [{ value: 'madrid', label: 'Madrid' }, { value: 'london', label: 'Londres' }];

const DropdownIndicator = () => null;

function SearchBar() {
  return (
    <Select
      styles={customStyles}
      placeholder="Search city ..."
      components={{ DropdownIndicator }}
      // filterOption={({label, value, data}, string) => boolean}
      // getOptionLabel={option => string}
      // getOptionValue={option => string}
      options={options}
    />
  );
}

export default SearchBar;
