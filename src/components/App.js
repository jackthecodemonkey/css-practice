import React from 'react';
import './App.scss';

import Nav from '../components/Layout/Nav';
import Section from '../components/Layout/Section';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Section className="main">
        <div className="container">
          Table comes here
        </div>
      </Section>
    </React.Fragment>
  );
}

export default App;
