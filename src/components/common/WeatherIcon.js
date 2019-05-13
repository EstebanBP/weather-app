import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FONT_COLOR, ICON_SIZES } from '../../constants';

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
  color: FONT_COLOR,
  size: ICON_SIZES.S
};

export default WeatherIcon;
