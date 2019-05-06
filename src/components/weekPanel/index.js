import React from 'react';
import styled from 'styled-components';
import Day from './day';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const WeekPanel = ({ weeklyInfo }) => (
  <Container>
    {weeklyInfo.map(dayInfo => {
      return <Day key={dayInfo.weekDayName} {...dayInfo} />;
    })}
  </Container>
);

export default WeekPanel;
