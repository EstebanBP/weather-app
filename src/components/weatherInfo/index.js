import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import { fetchByCity } from '../../redux/actions/weather';
import InfoPanel from './infoPanel';
import WeekPanel from './weekPanel';
import SearchBar from '../SearchBar';
// import BackgroundAnimatedImage from '../BackgroundAnimatedImage';

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
`;

const blur = '20px';
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

const WeatherInfo = ({ fetchByCity, imageUrl, error }) => {
  useEffect(() => {
    fetchByCity('Madrid');
  }, [fetchByCity]);

  useEffect(() => {
    if (error) {
      window.alert(error);
    }
  }, [error]);
  return (
    <AppWrapper>
      <BackgroundBlurredImage blurred {...{ imageUrl }} />
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

WeatherInfo.propTypes = {
  fetchByCity: PropTypes.func.isRequired,
  imageUrl: PropTypes.string,
  error: PropTypes.string
};

WeatherInfo.defaultProps = {
  imageUrl: null,
  error: null
};

const mapStateToProps = weather => {
  return { ...weather };
};

const mapDispatchToProps = { fetchByCity };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherInfo);
