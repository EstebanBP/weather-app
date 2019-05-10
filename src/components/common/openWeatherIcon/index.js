import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from '../weatherIcon';
import getWeatherIcon from '../../../utils/getWeatherIcon';

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
  size: PropTypes.string
};

OpenWeatherIcon.defaultProps = {
  color: 'white',
  size: '2em'
};

export default OpenWeatherIcon;
