import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { weeklyInfoPropType } from '../../../utils/customPropTypes';

import Day from './Day';

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

WeekPanel.propTypes = {
  weeklyInfo: weeklyInfoPropType
};

WeekPanel.defaultProps = {
  weeklyInfo: null
};

const mapStateToProps = ({ weeklyInfo }) => ({ weeklyInfo });
export default connect(mapStateToProps)(WeekPanel);
