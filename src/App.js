import React from 'react';
import './App.css';
import ExperienceContainer from './containers/ExperienceContainer';
import PortfolioHeader from './components/PortfolioHeader';
import SkillsContainer from './containers/SkillsContainer';
import ProjectsContainer from './containers/ProjectsContainer';

function App() {
  return (
    <div className="App">
      <ol className="content">
      <div className="header"><PortfolioHeader/></div>
      <ExperienceContainer/>
      <SkillsContainer/>
      <ProjectsContainer/>
      </ol>
    </div>
  );
}

export default App;
