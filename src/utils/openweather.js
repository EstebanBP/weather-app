import { unixToDate, getWeekDayName } from './misc';

const API_KEY = '65f9c37a11805cae899e71f4f60f67d8';
const BASE_URL = 'http://api.openweathermap.org';
const END_POINTS = {
  CurrentWeather: 'data/2.5/weather',
  WeekWeather: 'data/2.5/forecast'
};

const getUrl = (endPoint, parameters = {}) => {
  const base = `${BASE_URL}/${endPoint}`;
  parameters.APPID = API_KEY;
  parameters.units = 'metric';
  return Object.keys(parameters).reduce((url, key, index) => {
    return `${url}${index === 0 ? '?' : '&'}${key}=${parameters[key]}`;
  }, base);
};

const parseCurrent = response => {
  const {
    name,
    sys: { country },
    main: { humidity, pressure, temp },
    wind: { speed },
    weather
  } = response;
  const { description, icon, main } = (weather && weather[0]) || {};
  return {
    city: name,
    country,
    weather: { description, icon, main },
    temperature: Math.round(temp),
    wind: speed,
    humidity,
    pressure
  };
};

const parseWeekly = response => {
  const { list } = response;
  const days = [];
  let lastDay = null;
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const date = unixToDate(item.dt);
    const weekDay = date.getDay();
    if (lastDay !== weekDay) {
      days.push({ weekDayName: getWeekDayName(weekDay), items: [item] });
      lastDay = weekDay;
    } else {
      days[days.length - 1].items.push(item);
    }
  }
  const weeklyInfo = days.map(({ weekDayName, items }) => {
    const middleIndex = Math.floor(items.length / 2);
    const middleItem = items[middleIndex];
    const {
      weather,
      main: { temp }
    } = middleItem;
    const { icon } = weather[0];
    return {
      weekDayName,
      temperature: Math.round(temp),
      icon
    };
  });
  return weeklyInfo;
};

const getCityWeather = async cityName => {
  const currentResponse = await getCurrentWeather(cityName);
  if (currentResponse.status !== 200) {
    throw new Error(currentResponse.statusText || 'unknown error');
  }
  const currentData = await currentResponse.json();
  const cityId = currentData.id;
  const weeklyResponse = await getWeeklyWeather(cityId);
  if (weeklyResponse.status !== 200) {
    throw new Error(weeklyResponse.statusText || 'unknown error');
  }
  const weeklyData = await weeklyResponse.json();
  return {
    currentInfo: parseCurrent(currentData),
    weeklyInfo: parseWeekly(weeklyData)
  };
};

const getCurrentWeather = cityName => {
  const url = getUrl(END_POINTS.CurrentWeather, { q: cityName });
  return fetch(url);
};

const getWeeklyWeather = cityId => {
  const url = getUrl(END_POINTS.WeekWeather, { id: cityId });
  return fetch(url);
};

export default { getCityWeather };
