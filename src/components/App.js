import React from 'react';
import './App.scss';

import Nav from '../components/Layout/Nav';
import Section from '../components/Layout/Section';
import TenderList from './TenderList/index';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Section className="main">
        <TenderList />
      </Section>
    </React.Fragment>
  );
}

export default App;
