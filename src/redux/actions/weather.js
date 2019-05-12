export const ACTION_TYPES = {
  FETCH_BY_CITY: 'fetch_by_city',
  REQUEST_STARTED: 'request_started',
  REQUEST_SUCCEED: 'request_succeed',
  REQUEST_FAILED: 'request_failed'
};

function requestStart(searchText) {
  return {
    type: ACTION_TYPES.REQUEST_STARTED,
    payload: searchText
  };
}

function requestSucceed(result) {
  return {
    type: ACTION_TYPES.REQUEST_SUCCEED,
    payload: result
  };
}

function requestFailed(error) {
  return {
    type: ACTION_TYPES.REQUEST_FAILED,
    payload: error
  };
}

const fetchByCity = city => {
  const searchText = city;
  return (dispatch, _, { api }) => {
    dispatch(requestStart(searchText));
    api
      .getCityWeather(city)
      .then(({ imageUrl, currentInfo, weeklyInfo }) => {
        dispatch(requestSucceed({ searchText, imageUrl, currentInfo, weeklyInfo }));
      })
      .catch(error => {
        dispatch(requestFailed(error));
      });
  };
};

export { fetchByCity };
