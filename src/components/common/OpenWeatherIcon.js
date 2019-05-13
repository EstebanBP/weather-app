import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon';
import getWeatherIcon from '../../utils/getWeatherIcon';
import { FONT_COLOR, ICON_SIZES } from '../../constants';

const getIcon = openWeatherIconName => {
  const weatherIcon = getWeatherIcon(openWeatherIconName);
  return weatherIcon ? weatherIcon.icon : null;
};

const OpenWeatherIcon = ({ icon, ...iconProps }) => {
  const Icon = getIcon(icon);
  return <WeatherIcon {...{ Icon, ...iconProps }} />;
};

OpenWeatherIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OpenWeatherIcon.defaultProps = {
  color: FONT_COLOR,
  size: ICON_SIZES.S
};

export default OpenWeatherIcon;
