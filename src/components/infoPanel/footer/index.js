import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const WeatherText = styled.p``;

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