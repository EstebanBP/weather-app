import {
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiHail,
  WiRain,
  WiDayHail,
  WiNightAltRain,
  WiThunderstorm,
  WiSnow,
  WiWindy,
  WiNa
} from 'react-icons/wi';

const opacity = 0.05;
const opacityHover = 0.6;
const SUNNY = {
  main: 'rgba(240, 255, 0, 1)',
  background: `rgba(240, 255, 0, ${opacity})`,
  hover: `rgba(240, 255, 0, ${opacityHover})`
};
const CLOUDY = {
  main: 'rgba(236, 236, 236, 1)',
  background: `rgba(189, 195, 199, ${opacity + 0.3})`, // Higher opacity for grey color
  hover: `rgba(189, 195, 199, ${opacityHover + 0.3})` // Higher opacity for grey color
};
const RAINY = {
  main: 'rgba(25, 181, 254, 1)',
  background: `rgba(25, 181, 254, ${opacity})`,
  hover: `rgba(25, 181, 254, ${opacityHover})`
};
const openweatherIcons = {
  '01d': { icon: WiDaySunny, color: SUNNY },
  '01n': { icon: WiDaySunny, color: SUNNY },
  '02d': { icon: WiDayCloudy, color: SUNNY },
  '02n': { icon: WiDayCloudy, color: SUNNY },
  '03d': { icon: WiCloud, color: CLOUDY },
  '03n': { icon: WiCloud, color: CLOUDY },
  '04d': { icon: WiHail, color: RAINY },
  '04n': { icon: WiHail, color: RAINY },
  '09d': { icon: WiRain, color: RAINY },
  '09n': { icon: WiRain, color: RAINY },
  '10d': { icon: WiDayHail, color: RAINY },
  '10n': { icon: WiNightAltRain, color: RAINY },
  '11d': { icon: WiThunderstorm, color: RAINY },
  '11n': { icon: WiThunderstorm, color: RAINY },
  '13d': { icon: WiSnow, color: RAINY },
  '13n': { icon: WiSnow, color: RAINY },
  '50d': { icon: WiWindy, color: RAINY },
  '50n': { icon: WiWindy, color: RAINY },
  default: { icon: WiNa, color: CLOUDY }
};

const getWeatherIcon = openweatherIconName => {
  return openweatherIcons[openweatherIconName] || openweatherIcons.default;
};

export default getWeatherIcon;
