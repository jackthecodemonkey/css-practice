import React from 'react';
import './App.scss';
import Nav from '../components/Layout/Nav';
import Section from '../components/Layout/Section';
import { TenderContainer } from './TenderContainer';
import { SpinnerContainer } from './common';

function App() {
  return (
    <React.Fragment>
      <Nav>
        <SpinnerContainer minDisplay={300} />
      </Nav>
      <Section className="main">
        <TenderContainer />
      </Section>
    </React.Fragment>
  );
}

export default App;
