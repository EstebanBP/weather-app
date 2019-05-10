import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';

const WeatherIcon = ({ color, size, Icon, ...iconProps }) => {
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
  Icon: PropTypes.func.isRequired,
  color: PropTypes.string,
  size: PropTypes.string
};

WeatherIcon.defaultProps = {
  color: 'white',
  size: '2em'
};

export default WeatherIcon;
