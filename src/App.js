import React from 'react';
import styled from 'styled-components/macro';
import InfoPanel from './components/infoPanel';
import Day from './components/day';

const blur = '20px';
const url =
  'https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-francisco-bay-area_web-f17b1f60e6.jpg';
// const url = "bgImage2.jpg";
const Container = styled.div`
  min-height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
  padding: 0px 0px 50px 0px;
`;

const Panel = styled.div`
  width: 90%;
  background-image: url('${url}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const SearchBar = styled.input`
  min-height: 40px;
  width: 40%;
  min-width: 300px;
  font-size: 1em;
  padding-left: 0.5em;
  border-radius: 20px;
  border: 1px solid white;
  background: transparent;
`;

const DaysPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BackgroundBlurredImage = styled.div`
  position: fixed;
  top: -${blur}; right: -${blur}; bottom: -${blur}; left: -${blur};
  z-index: 1;

  display: flex;
  min-height: 100vh;
  background-image: url('${url}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  -webkit-filter: blur(${blur});
  -moz-filter: blur(${blur});
  -o-filter: blur(${blur});
  -ms-filter: blur(${blur});
  filter: blur(${blur});
`;

function App() {
  return (
    <div>
      <BackgroundBlurredImage />
      <Container>
        <SearchBar placeholder="Search city..." />
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
      </Container>
    </div>
  );
}

export default App;
