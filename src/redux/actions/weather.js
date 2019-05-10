export const ACTION_TYPES = {
  FETCH_BY_CITY: 'fetch_by_city',
  REQUEST_STARTED: 'request_started',
  REQUEST_SUCCEED: 'request_succeed',
  REQUEST_FAILED: 'request_failed'
};

function requestStart() {
  return {
    type: ACTION_TYPES.REQUEST_STARTED
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
  return (dispatch, getState, { api }) => {
    dispatch(requestStart());
    api
      .getCityWeather(city)
      .then(({ searchText: city, currentInfo, weeklyInfo }) => {
        dispatch(requestSucceed({ currentInfo, weeklyInfo }));
      })
      .catch(error => {
        dispatch(requestFailed(error));
      });
  };
};

export { fetchByCity };
