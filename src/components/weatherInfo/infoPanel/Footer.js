import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { BACKGROUND_FONT_COLOR, FONT_SIZES } from '../../../constants';

const WeatherText = styled.p`
  background-color: ${BACKGROUND_FONT_COLOR};
  padding: 5px;
  border-radius: 10px;
  font-size: ${FONT_SIZES.S};
`;

const Footer = ({ description }) => {
  return <WeatherText>{description.capitalizeFirstLetter()}</WeatherText>;
};

Footer.propTypes = {
  description: PropTypes.string
};

Footer.defaultProps = {
  description: 'Unknown'
};

export default Footer;
