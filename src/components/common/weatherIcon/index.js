import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';

const openweatherIcons = {
  '01d': 'WiDaySunny',
  '01n': 'WiDaySunny',
  '02d': 'WiDayCloudy',
  '02n': 'WiDayCloudy',
  '03d': 'WiCloud',
  '03n': 'WiCloud',
  '04d': 'WiHail',
  '04n': 'WiHail',
  '09d': 'WiRain',
  '09n': 'WiRain',
  '10d': 'WiDayHail',
  '10n': 'WiNightAltRain',
  '11d': 'WiThunderstorm',
  '11n': 'WiThunderstorm',
  '13d': 'WiSnow',
  '13n': 'WiSnow',
  '50d': 'WiWindy',
  '50n': 'WiWindy'
};

const getIcon = openweatherIconName => {
  const iconName = openweatherIcons[openweatherIconName];
  if (!iconName) {
    console.log({ openweatherIconName });
  }
  return require('react-icons/wi')[iconName || 'WiHail'];
};

const WeatherIcon = ({ color, size, icon, ...iconProps }) => {
  const Icon = getIcon(icon);
  return (
    <IconContext.Provider
      value={{
        color,
        size,
        ...iconProps
      }}
    >
      <Icon />
    </IconContext.Provider>
  );
};

WeatherIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string
};

WeatherIcon.defaultProps = {
  color: 'white',
  size: '2em'
};

export default WeatherIcon;
