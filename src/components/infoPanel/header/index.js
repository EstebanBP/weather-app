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
  font-size: 1.5em;
  margin: 0;
`;

const H2 = styled.p`
  font-size: 0.7em;
`;

const Header = ({ city, country }) => {
  const title = `${city}${country ? '(' + country + ')' : ''}`;
  return (
    <Container>
      <H1>{title}</H1>
      <H2>{new Date().toDateString()}</H2>
    </Container>
  );
};

Header.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string
};

Header.defaultProps = {
  city: 'New York',
  country: null
};

export default Header;
