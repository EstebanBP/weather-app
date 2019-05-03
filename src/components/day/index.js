import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { IconContext } from 'react-icons';
import { WiHail } from 'react-icons/wi';

const Container = styled.div`
  border: 2px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
`;

const Title = styled.p`
  border: 2px solid blue;
  text-align: center;
`;

const Temperature = styled.p`
  border: 2px solid blue;
  text-align: center;
`;

const WeatherIcon = () => (
  <IconContext.Provider value={{ color: 'red' }}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: 'fit-content',
        border: '1px solid red'
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
      <Temperature>{temperature}</Temperature>
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
