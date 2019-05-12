import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import { fetchByCity } from '../../redux/actions/weather';
import InfoPanel from '../infoPanel';
import WeekPanel from '../weekPanel';
import SearchBar from '../searchBar';

const blur = '20px';

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
  padding: 25px 0px 25px 0px;
`;

const Panel = styled.div`
  width: 90%;
`;

const BackgroundBlurredImage = styled.div`
  position: fixed;
  top: -${blur}; right: -${blur}; bottom: -${blur}; left: -${blur};
  z-index: 1;

  background-image: url('${props => props.imageUrl}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  -webkit-filter: blur(${blur});
  -moz-filter: blur(${blur});
  -o-filter: blur(${blur});
  -ms-filter: blur(${blur});
  filter: blur(${blur});
`;

const WeatherInfo = ({ fetchByCity, imageUrl, error }) => {
  React.useEffect(() => {
    fetchByCity('Madrid');
  }, [fetchByCity]);
  React.useEffect(() => {
    if (error) {
      window.alert(error);
    }
  }, [error]);
  return (
    <AppWrapper>
      <BackgroundBlurredImage {...{ imageUrl }} />
      <Container>
        <SearchBar />
        <Panel>
          <InfoPanel />
          <WeekPanel />
        </Panel>
      </Container>
    </AppWrapper>
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
