import React from 'react';
import './Styles/App.css';
import Title from './Components/Title/Title';
import Subtitle from './Components/Subtitle/Subtitle';
import GamesSection from './Components/GamesSection/GamesSection';

function App() {
  return (
    <div className="App">
      <Title />
      <Subtitle />
      <GamesSection />

    </div>
  );
}

export default App;
