import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import Loader from './common/Loader';
import { fetchByCity } from '../redux/actions/weather';
import { FONT_COLOR, FONT_SIZES } from '../constants';

const Container = styled.div`
  display: flex;
  width: 40%;
  min-width: 300px;
  min-height: 40px;
  margin-bottom: 30px;
  border-radius: 20px;
  border: 1px solid ${FONT_COLOR};
`;

const Input = styled.input`
  flex: 1;
  font-size: ${FONT_SIZES.S};
  padding-left: 0.5em;
  background: transparent;
  border: none;
  &:focus {
    outline-width: 0;
  }
`;

const SearchBar = ({ fetchByCity, loading }) => {
  const handleKeyDown = React.useCallback(
    e => {
      if (e.key === 'Enter') {
        // e.target.blur();
        const text = e.target.value;
        if (text) {
          fetchByCity(text);
        }
      }
    },
    [fetchByCity]
  );
  return (
    <Container>
      <Input placeholder="Search city..." onKeyDown={handleKeyDown} />
      {loading && <Loader />}
    </Container>
  );
};

SearchBar.propTypes = {
  fetchByCity: PropTypes.func.isRequired,
  loading: PropTypes.bool
};

SearchBar.defaultProps = {
  loading: false
};

const mapStateToProps = ({ loading }) => ({ loading });

export default connect(
  mapStateToProps,
  { fetchByCity }
)(SearchBar);
