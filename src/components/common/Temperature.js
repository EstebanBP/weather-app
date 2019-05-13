import React from 'react';
import PropTypes from 'prop-types';
import AnimatedNumber from 'react-animated-number';
import { getSymbol } from '../../utils/misc';

const formatTemperature = temperature => {
  return `${getSymbol(temperature)}${temperature}`;
};

const Temperature = ({ temperature, style }) => (
  <AnimatedNumber
    component="p"
    initialValue={0}
    value={temperature}
    style={style}
    stepPrecision={0}
    duration={1000}
    formatValue={formatTemperature}
  />
);

Temperature.propTypes = {
  temperature: PropTypes.number,
  style: PropTypes.shape({})
};

Temperature.defaultProps = {
  temperature: 0,
  style: null
};

export default Temperature;
