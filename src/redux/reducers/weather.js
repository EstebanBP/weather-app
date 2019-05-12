import { ACTION_TYPES } from '../actions/weather';

const initialState = {
  searchText: null,
  currentInfo: null,
  weeklyInfo: null,
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.REQUEST_STARTED: {
      return { ...state, loading: true, searchText: action.payload, error: null };
    }
    case ACTION_TYPES.REQUEST_FAILED: {
      const error = action.payload;
      const errorText = `Error trying to search ${state.searchText}: ${error.message}`;
      return { ...state, loading: false, error: errorText };
    }
    case ACTION_TYPES.REQUEST_SUCCEED: {
      return { ...state, loading: false, error: null, ...action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
