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
        <div className="container">
          <TenderList />
          Table comes here
        </div>
      </Section>
    </React.Fragment>
  );
}

export default App;
