import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
// import BackgroundAnimatedImage from '../../BackgroundAnimatedImage';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { currentWeatherShape } from '../../../utils/customPropTypes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 25px;
  background-image: url('${props => props.imageUrl}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const InfoPanel = ({ imageUrl, currentInfo }) => {
  if (!currentInfo) {
    return null;
  }
  const { city, country, date, temperature, humidity, pressure, wind, weather } = currentInfo;
  const { icon, description } = weather;
  return (
    <Container {...{ imageUrl }}>
      <Header {...{ city, country, date }} />
      <Body {...{ temperature, icon, humidity, pressure, wind }} />
      <Footer {...{ description }} />
    </Container>
  );
};

InfoPanel.propTypes = {
  imageUrl: PropTypes.string,
  currentInfo: PropTypes.shape(currentWeatherShape)
};

InfoPanel.defaultProps = {
  imageUrl: null,
  currentInfo: null
};

const mapStateToProps = ({ currentInfo, imageUrl }) => ({ currentInfo, imageUrl });

export default connect(mapStateToProps)(InfoPanel);
