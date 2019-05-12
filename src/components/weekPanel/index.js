import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Day from './day';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const WeekPanel = ({ weeklyInfo }) => {
  if (!weeklyInfo) {
    return null;
  }
  return (
    <Container>
      {weeklyInfo.map(dayInfo => {
        return <Day key={dayInfo.weekDayName} {...dayInfo} />;
      })}
    </Container>
  );
};

const mapStateToProps = ({ weeklyInfo }) => ({ weeklyInfo });
export default connect(mapStateToProps)(WeekPanel);
