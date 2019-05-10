import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import OpenWeatherIcon from '../../common/openWeatherIcon';
import { getSymbol } from '../../../utils/misc';
import getWeatherIcon from '../../../utils/getWeatherIcon';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 1px;
  padding: 10px;
  border-top: 3px solid ${props => props.colors.main};
  background-color: ${props => props.colors.background};
`;

const Title = styled.p`
  text-align: center;
  font-size: 0.8em;
`;

const Temperature = styled.p`
  text-align: center;
  font-size: 0.8em;
`;

const getColorsByIcon = icon => {
  const weatherIcon = getWeatherIcon(icon);
  return (weatherIcon && weatherIcon.color) || { main: 'blue', blurred: 'rgba(0, 0, 50, 0.8)' };
};

const Day = ({ weekDayName, temperature, icon }) => {
  const symbol = getSymbol(temperature);
  const colors = getColorsByIcon(icon);
  return (
    <Container {...{ colors }}>
      <Title>{weekDayName}</Title>
      <OpenWeatherIcon
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
