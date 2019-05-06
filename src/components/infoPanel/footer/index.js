import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { BACKGROUND_FONT_COLOR } from '../../../constants';

const WeatherText = styled.p`
  background-color: ${BACKGROUND_FONT_COLOR};
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