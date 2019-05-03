import React from 'react';
import './App.css';
import styled from 'styled-components/macro';
import InfoPanel from './components/infoPanel';
import Day from './components/day';

const Container = styled.div`
  border: 5px solid red;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
  /*   background-image: url("bgImage2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center; */
`;

const Panel = styled.div`
  border: 7px solid blue;
  width: 90%;
`;
const SearchBar = styled.input`
  min-height: 40px;
  width: 300px;
  border: 2px solid black;
  border-radius: 20px;
`;

const DaysPanel = styled.div`
  border: 7px solid pink;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <Panel>
        <InfoPanel />
        <DaysPanel>
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
        </DaysPanel>
      </Panel>
      <SearchBar />
    </Container>
  );
}

export default App;
