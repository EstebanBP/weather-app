import React from 'react';
import styled from 'styled-components/macro';
import Select from 'react-select';
import { BACKGROUND_FONT_COLOR, FONT_COLOR } from '../../constants';

const customStyles = {
  control: () => ({
    // none of react-select's styles are passed to <Control />
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
  option: (provided, { isFocused }) => ({
    ...provided,
    color: isFocused ? 'grey': FONT_COLOR,
  }),
  singleValue: provided => ({
    ...provided,
    color: FONT_COLOR,
  }),
  indicatorSeparator: provided => ({ ...provided, display: 'none' })
};
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'platano', label: 'platano' },
  { value: 'fresa', label: 'fresa' },
  { value: 'otro', label: 'otro' },
  { value: 'y mas', label: 'y mas' },
  { value: '1', label: 'otro asi muy largo que no esperas' }
];

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
