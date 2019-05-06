import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Header from './header';
import Body from './body';
import Footer from './footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
`;

const InfoPanel = ({ currentInfo }) => {
  const { city, country } = currentInfo;
  return (
    <Container>
      <Header {...{ city, country }} />
      <Body />
      <Footer />
    </Container>
  );
};

export default InfoPanel;
