import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { WiHail } from 'react-icons/wi';
import { IconContext } from 'react-icons';
import { FONT_SIZES } from '../../../constants';


const Container = styled.div`
  display: flex;
  border: 4px solid red;
`;

const Temperature = styled.h1`
  border: 4px solid green;
  font-size: 120px;
  font-weight: 200;
  // font-size: ${FONT_SIZES.XL};
  
`;

const InfoContainer = styled.h1`
  border: 4px solid green;
`;

const WeatherIcon = () => (
  <IconContext.Provider value={{ color: 'red' }}>
    <div style={{ border: '4px solid green' }}>
      <WiHail size={90} />
    </div>
  </IconContext.Provider>
);

const Body = ({ temperature }) => {
  return (
    <Container>
      <Temperature>{`${temperature}º`}</Temperature>
      <WeatherIcon />
      <InfoContainer>{'asd'}</InfoContainer>
    </Container>
  );
};

Body.propTypes = {
  temperature: PropTypes.string
};

Body.defaultProps = {
  temperature: '+25'
};

export default Body;
