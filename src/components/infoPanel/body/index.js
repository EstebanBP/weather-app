import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { WiHail } from 'react-icons/wi';
import { IconContext } from 'react-icons';

const Container = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Temperature = styled.p`
  flex: 1;
  font-size: 6em;
  font-weight: 200;
  margin: 5px;
  text-align: right;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const InfoLine = ({ text }) => (
  <Line>
    <IconContext.Provider value={{ color: 'white', size: '2em' }}>
      <div>
        <WiHail />
      </div>
    </IconContext.Provider>
    <p style={{ margin: '5px',  }}>{text}</p>
  </Line>
);

const WeatherIcon = () => (
  <IconContext.Provider
    value={{
      color: 'white',
      size: '8em',
      style: { verticalAlign: 'middle' }
    }}
  >
    <WiHail />
  </IconContext.Provider>
);

const Body = ({ temperature }) => {
  return (
    <Container>
      <Temperature>{`${temperature}º`}</Temperature>
      <div
        style={{
          flex: 0,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <WeatherIcon />
      </div>
      <InfoContainer>
        <InfoLine text="743 mm Hg" />
        <InfoLine text="46% humidity" />
        <InfoLine text="2m/s NW" />
      </InfoContainer>
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
