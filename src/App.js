import React from 'react';
import { Provider } from 'react-redux';
import initStore from './redux/initStore';
import WeatherInfo from './components/weatherInfo';

const store = initStore();

class App extends React.Component {
  render() {
    return (
      <Provider {...{ store }}>
        <WeatherInfo />
      </Provider>
    );
  }
}

export default App;
