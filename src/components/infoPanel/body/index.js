import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { WiBarometer, WiHumidity, WiStrongWind } from 'react-icons/wi';
import WeatherIcon from '../../common/weatherIcon';
import OpenWeatherIcon from '../../common/openWeatherIcon';
import { getSymbol } from '../../../utils/misc';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Temperature = styled.p`
  font-size: 6em;
  font-weight: 200;
  margin: 5px;
  text-align: center;
  flex: 1;
`;

const IconContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const InfoLine = ({ text, icon }) => (
  <Line>
    <WeatherIcon Icon={icon} />
    <p style={{ margin: '5px', 'white-space': 'nowrap' }}>{text}</p>
  </Line>
);
const Body = ({ temperature, icon, humidity, pressure, wind }) => {
  const symbol = getSymbol(temperature);
  return (
    <Container>
      <Temperature>{`${symbol}${temperature}°`}</Temperature>
      <IconContainer>
        <OpenWeatherIcon size="8em" icon={icon} />
      </IconContainer>
      <InfoContainer>
        <InfoLine text={`${pressure} mm Hg`} icon={WiBarometer} />
        <InfoLine text={`${humidity}% humidity`} icon={WiHumidity} />
        <InfoLine text={`${wind}m/s NW`} icon={WiStrongWind} />
      </InfoContainer>
    </Container>
  );
};

Body.propTypes = {
  temperature: PropTypes.number
};

Body.defaultProps = {};

export default Body;
