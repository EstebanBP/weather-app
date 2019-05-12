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
  flex-wrap: wrap;
  width: 70%;
`;
const Part = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Temperature = styled.p`
  font-size: 5em;
  font-weight: 200;
  margin: 5px;
  text-align: center;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InfoContainer = styled.div``;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const InfoText = styled.p`
  margin: 5px;
  white-space: nowrap;
`;

const InfoLine = ({ text, icon }) => (
  <Line>
    <WeatherIcon Icon={icon} />
    <InfoText>{text}</InfoText>
  </Line>
);
const Body = ({ temperature, icon, humidity, pressure, wind }) => {
  const symbol = getSymbol(temperature);
  return (
    <Container>
      <Part>
        <Temperature>{`${symbol}${temperature}°`}</Temperature>
      </Part>
      <Part>
        <IconContainer>
          <OpenWeatherIcon size="8em" icon={icon} />
        </IconContainer>
      </Part>
      <Part>
        <InfoContainer>
          <InfoLine text={`${pressure} mm Hg`} icon={WiBarometer} />
          <InfoLine text={`${humidity}% humidity`} icon={WiHumidity} />
          <InfoLine text={`${wind}m/s NW`} icon={WiStrongWind} />
        </InfoContainer>
      </Part>
    </Container>
  );
};

Body.propTypes = {
  temperature: PropTypes.number
};

Body.defaultProps = {};

export default Body;
