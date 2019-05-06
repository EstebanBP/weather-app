import React from 'react';
import styled from 'styled-components/macro';

const Input = styled.input`
  min-height: 40px;
  width: 40%;
  min-width: 300px;
  font-size: 1em;
  padding-left: 0.5em;
  border-radius: 20px;
  border: 1px solid white;
  background: transparent;
  &:focus {
    outline-width: 0;
  }
`;

function SearchBar() {
  return <Input placeholder="Search city..." />;
}

export default SearchBar;
