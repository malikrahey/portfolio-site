import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExperienceContainer from './containers/ExperienceContainer';
import PortfolioHeader from './components/PortfolioHeader';
import SkillsContainer from './containers/SkillsContainer';


function App() {
  return (
    <div className="App">
      <ol className="content">
      <div className="header"><PortfolioHeader/></div>
      <ExperienceContainer/>
      <SkillsContainer/>
      </ol>
    </div>
  );
}

export default App;
