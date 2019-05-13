/* eslint-disable no-extend-native */
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

String.prototype.capitalizeFirstLetter = function() {
  const text = this;
  return text[0].toUpperCase().concat(text.slice(1));
};

export const unixToDate = unix => new Date(unix * 1000);
export const getWeekDayName = weekDay => days[weekDay];

export const getSymbol = number => {
  if (Number.isNaN(number) || number === 0) {
    return '';
  }
  if (number > 0) {
    return '+';
  }
  return '-';
};
