import { ACTION_TYPES } from '../actions/weather';

const initialState = {
  searchText: null, 
  currentInfo: null,
  weeklyInfo: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  console.log({ action });
  switch (action.type) {
    case ACTION_TYPES.REQUEST_STARTED: {
      return { ...state, loading: true };
    }
    case ACTION_TYPES.REQUEST_FAILED: {
      return { ...state, loading: false, error: action.payload };
    }
    case ACTION_TYPES.REQUEST_SUCCEED: {
      return { ...state, loading: false, ...action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
