import { unixToDate, getWeekDayName } from './misc';

// Config
const API_KEY = '65f9c37a11805cae899e71f4f60f67d8';
const BASE_URL = 'http://api.openweathermap.org';
const END_POINTS = {
  CurrentWeather: 'data/2.5/weather',
  WeekWeather: 'data/2.5/forecast'
};
const unknownError = 'unknown error';
const defaultUnits = 'metric';
const defaultImage = 'generica.jpg';

const ImagesDict = {
  3117735: 'madrid.png',
  3128760: 'barcelona.jpg',
  5128581: 'new york.jpg'
};

const getImageUrl = cityId => {
  return `${process.env.PUBLIC_URL}/img/${ImagesDict[cityId] || defaultImage}`;
};

/**
 * To url + queryString
 */
const getUrl = (endPoint, parameters = {}) => {
  const base = `${BASE_URL}/${endPoint}`;
  parameters.APPID = API_KEY;
  parameters.units = defaultUnits;
  return Object.keys(parameters).reduce((url, key, index) => {
    return `${url}${index === 0 ? '?' : '&'}${key}=${parameters[key]}`;
  }, base);
};

/**
 * Formalize current weather response
 */
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

/**
 * Formalize weekly weather response
 */
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

const getCurrentWeather = cityName => {
  const url = getUrl(END_POINTS.CurrentWeather, { q: cityName });
  return fetch(url);
};

const getWeeklyWeather = cityId => {
  const url = getUrl(END_POINTS.WeekWeather, { id: cityId });
  return fetch(url);
};

/**
 * Gets data from openweather api
 * @param String cityName
 * @return {Promise} Promise which resolves with current data, weekly data and image url
 */
const getCityWeather = async cityName => {
  const currentResponse = await getCurrentWeather(cityName);
  if (currentResponse.status !== 200) {
    throw new Error(currentResponse.statusText || unknownError);
  }
  const currentData = await currentResponse.json();
  const cityId = currentData.id;
  const weeklyResponse = await getWeeklyWeather(cityId);
  if (weeklyResponse.status !== 200) {
    throw new Error(weeklyResponse.statusText || unknownError);
  }

  const weeklyData = await weeklyResponse.json();
  return {
    imageUrl: getImageUrl(currentData.id),
    currentInfo: parseCurrent(currentData),
    weeklyInfo: parseWeekly(weeklyData)
  };
};

export default { getCityWeather };
