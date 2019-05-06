const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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
