import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import openweather from '../utils/openweather';
import weather from './reducers/weather';

const initStore = () =>
  createStore(weather, applyMiddleware(thunk.withExtraArgument({ api: openweather })));

export default initStore;
