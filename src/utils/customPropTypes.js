import PropTypes from 'prop-types';

export const currentWeatherShape = {
  city: PropTypes.string,
  country: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  weather: PropTypes.shape({
    description: PropTypes.string,
    icon: PropTypes.string,
    main: PropTypes.string
  }),
  temperature: PropTypes.number,
  wind: PropTypes.number,
  humidity: PropTypes.number,
  pressure: PropTypes.number
};

const dayInfoShape = {
  weekDayName: PropTypes.string,
  temperature: PropTypes.number,
  icon: PropTypes.string
};

export const weeklyInfoPropType = PropTypes.arrayOf(PropTypes.shape(dayInfoShape));
