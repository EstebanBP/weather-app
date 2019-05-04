import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { IconContext } from 'react-icons';
import { WiHail } from 'react-icons/wi';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  background-color: rgba(0, 0, 50, 0.8);
  padding: 10px;
`;

const Title = styled.p`
  text-align: center;
  font-size: 0.8em;
`;

const Temperature = styled.p`
  text-align: center;
  font-size: 0.8em;
`;

const WeatherIcon = () => (
  <IconContext.Provider value={{ color: 'white' }}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: 'fit-content',
        'border-radius': '100px',
        'background-color': 'rgba(100,100,100,0.6)'
      }}
    >
      <WiHail size={50} />
    </div>
  </IconContext.Provider>
);

const Day = ({ name, temperature }) => {
  return (
    <Container>
      <Title>{name}</Title>
      <WeatherIcon />
      <Temperature>{"+28º"}</Temperature>
    </Container>
  );
};

Day.propTypes = {
  name: PropTypes.string,
  temperature: PropTypes.number
};

Day.defaultProps = {
  name: 'Monday',
  temperature: 32
};

export default Day;
