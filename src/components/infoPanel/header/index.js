import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { FONT_SIZES } from '../../../constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px solid green;
`;

const H1 = styled.h1`
  font-size: ${FONT_SIZES.XL};
`;

const H2 = styled.h1`
  font-size: ${FONT_SIZES.M};
`;

const Header = ({ city }) => {
  return (
    <Container>
      <H1>{city}</H1>
      <H2>{new Date().toDateString()}</H2>
    </Container>
  );
};

Header.propTypes = {
  city: PropTypes.string
};

Header.defaultProps = {
  city: 'New York'
};

export default Header;
