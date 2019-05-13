import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import Temperature from '../../common/Temperature';
import OpenWeatherIcon from '../../common/OpenWeatherIcon';
import getWeatherIcon from '../../../utils/getWeatherIcon';
import { FONT_SIZES, BACKGROUND_FONT_COLOR } from '../../../constants';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-left: 1px;
  padding: 15px;
  border-top: 3px solid ${props => props.colors.main};
  background-color: ${props => props.colors.background};
  transition: transform 0.3s ease-in-out;
  :hover {
    font-weight: 600;
    transform: scale(1.1);
    background-color: ${props => props.colors.hover};
    z-index: 10;
  }
`;

const Title = styled.p`
  text-align: center;
  font-size: ${FONT_SIZES.S};
`;

const temperatureStyle = {
  fontSize: FONT_SIZES.S,
  textAlign: 'center'
};

const openWeatherIconStyle = {
  borderRadius: '2em',
  backgroundColor: BACKGROUND_FONT_COLOR,
  padding: '5px'
};

const Day = ({ weekDayName, temperature, icon }) => {
  const colors = getWeatherIcon(icon).color;
  return (
    <Container {...{ colors }}>
      <Title>{weekDayName}</Title>
      <OpenWeatherIcon icon={icon} style={openWeatherIconStyle} />
      <Temperature {...{ temperature, style: temperatureStyle }} />
    </Container>
  );
};

Day.propTypes = {
  weekDayName: PropTypes.string.isRequired,
  temperature: PropTypes.number,
  icon: PropTypes.string
};

Day.defaultProps = {
  temperature: null,
  icon: null
};

export default Day;
