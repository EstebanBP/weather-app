import React from 'react';
import styled from 'styled-components/macro';
import InfoPanel from './components/infoPanel';
import WeekPanel from './components/weekPanel';
import SearchBar from './components/searchBar';
import Loader from './components/loader';
import OpenWeather from './utils/openweather';

const blur = '20px';
const url =
  'https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-francisco-bay-area_web-f17b1f60e6.jpg';
// const url = "bgImage2.jpg";
const Container = styled.div`
  min-height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
  padding: 0px 0px 50px 0px;
`;

const Panel = styled.div`
  width: 90%;
  background-image: url('${url}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const BackgroundBlurredImage = styled.div`
  position: fixed;
  top: -${blur}; right: -${blur}; bottom: -${blur}; left: -${blur};
  z-index: 1;

  display: flex;
  min-height: 100vh;
  background-image: url('${url}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  -webkit-filter: blur(${blur});
  -moz-filter: blur(${blur});
  -o-filter: blur(${blur});
  -ms-filter: blur(${blur});
  filter: blur(${blur});
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      currentInfo: null,
      weeklyInfo: null
    };
  }
  componentDidMount() {
    OpenWeather.getCityWeather('Madrid')
      .then(({ currentInfo, weeklyInfo }) => {
        console.log({ currentInfo, weeklyInfo });
        this.setState({ currentInfo, weeklyInfo, loading: false });
      })
      .catch(error => console.log({ error }));
  }

  render() {
    const { currentInfo, weeklyInfo } = this.state;
    return (
      <div>
        <BackgroundBlurredImage />
        <Container>
          <SearchBar placeholder="Search city..." />
          {currentInfo && (
            <Panel>
              <InfoPanel {...{ currentInfo }} />
              <WeekPanel {...{ weeklyInfo }} />
            </Panel>
          )}
        </Container>
      </div>
    );
  }
}

export default App;
