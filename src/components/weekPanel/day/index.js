import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import WeatherIcon from '../../common/weatherIcon';
import { getSymbol } from '../../../utils/misc';

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

const Day = ({ weekDayName, temperature, icon }) => {
  const symbol = getSymbol(temperature);
  return (
    <Container>
      <Title>{weekDayName}</Title>
      <WeatherIcon
        icon={icon}
        style={{ borderRadius: '1em', backgroundColor: 'rgba(100,100,100,0.6)' }}
      />
      <Temperature>{`${symbol}${temperature}°`}</Temperature>
    </Container>
  );
};

Day.propTypes = {
  weekDayName: PropTypes.string.isRequired,
  temperature: PropTypes.number
};

Day.defaultProps = {
  temperature: null
};

export default Day;
