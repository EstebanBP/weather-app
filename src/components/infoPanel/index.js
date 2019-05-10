import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Header from './header';
import Body from './body';
import Footer from './footer';

const url =
  'https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-francisco-bay-area_web-f17b1f60e6.jpg';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  background-image: url('${url}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const InfoPanel = ({ currentInfo }) => {
  const { city, country, temperature, humidity, pressure, wind, weather } = currentInfo;
  const { icon, description } = weather;
  return (
    <Container>
      <Header {...{ city, country }} />
      <Body {...{ temperature, icon, humidity, pressure, wind }} />
      <Footer {...{ description }} />
    </Container>
  );
};

export default InfoPanel;
