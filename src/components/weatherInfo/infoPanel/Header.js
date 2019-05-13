import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { FONT_SIZES } from '../../../constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.p`
  font-size: ${FONT_SIZES.M};
  margin: 0;
`;

const H2 = styled.p`
  font-size: ${FONT_SIZES.S};
`;

const Header = ({ city, country, date }) => {
  const title = `${city}${country ? '(' + country + ')' : ''}`;
  return (
    <Container>
      <H1>{title}</H1>
      {date ? <H2>{date.toDateString()}</H2> : null}
    </Container>
  );
};

Header.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  date: PropTypes.instanceOf(Date)
};

Header.defaultProps = {
  city: 'New York',
  country: null,
  date: null
};

export default Header;
