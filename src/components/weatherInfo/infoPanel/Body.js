import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { WiBarometer, WiHumidity, WiStrongWind } from 'react-icons/wi';
import Temperature from '../../common/Temperature';
import WeatherIcon from '../../common/WeatherIcon';
import OpenWeatherIcon from '../../common/OpenWeatherIcon';
import { FONT_SIZES, ICON_SIZES } from '../../../constants';

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

const temperatureStyle = {
  fontSize: FONT_SIZES.XXL,
  fontWeight: 200,
  margin: '5px',
  textAlign: 'center'
};

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
  return (
    <Container>
      <Part>
        <Temperature {...{ temperature, style: temperatureStyle }} />
      </Part>
      <Part>
        <IconContainer>
          <OpenWeatherIcon size={ICON_SIZES.XL} icon={icon} />
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
  temperature: PropTypes.number,
  icon: PropTypes.string,
  humidity: PropTypes.number,
  pressure: PropTypes.number,
  wind: PropTypes.number
};

Body.defaultProps = {
  temperature: null,
  icon: null,
  humidity: null,
  pressure: null,
  wind: null
};

export default Body;
