import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExperienceContainer from './containers/ExperienceContainer';
import PortfolioHeader from './components/PortfolioHeader';


function App() {
  return (
    <div className="App">
      <ol className="content">
      <div className="header"><PortfolioHeader/></div>
      <div><ExperienceContainer/></div>
      </ol>
    </div>
  );
}

export default App;
