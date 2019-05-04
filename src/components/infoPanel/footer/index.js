import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const WeatherText = styled.p`
  background-color: rgba(100,100,100,0.8);
  padding: 5px;
  border-radius: 10px;
  font-size: 0.8em;
`;

const Header = ({ text }) => {
  return (
    <WeatherText>{text}</WeatherText>
  );
};


Header.propTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: 'Cloudy, Storm',
};

export default Header;