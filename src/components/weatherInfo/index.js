import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import { fetchByCity } from '../../redux/actions/weather';
import InfoPanel from '../infoPanel';
import WeekPanel from '../weekPanel';
import SearchBar from '../searchBar';

// TODO: Mirar rem en lugar de em para fuentes
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
  padding: 50px 0px 50px 0px;
`;

const Panel = styled.div`
  height: 90%;
  width: 90%;
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

const WeatherInfo = ({ currentInfo, weeklyInfo, fetchByCity }) => {
  React.useEffect(() => {
    fetchByCity('Barcelona');
  }, [fetchByCity]);
  return (
    <div>
      <BackgroundBlurredImage />
      <Container>
        <SearchBar />
        {currentInfo && (
          <Panel>
            <InfoPanel {...{ currentInfo }} />
            <WeekPanel {...{ weeklyInfo }} />
          </Panel>
        )}
      </Container>
    </div>
  );
};

const mapStateToProps = weather => {
  return { ...weather };
};

const mapDispatchToProps = { fetchByCity };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherInfo);
