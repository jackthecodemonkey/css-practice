import React from 'react';
import './App.scss';

import Nav from '../components/Layout/Nav';
import Section from '../components/Layout/Section';
import TenderList from './TenderList/index';
import { SpinnerContainer } from './common';

function App() {
  return (
    <React.Fragment>
      <Nav>
        <SpinnerContainer minDisplay={500} />
      </Nav>
      <Section className="main">
        <TenderList />
      </Section>
    </React.Fragment>
  );
}

export default App;
