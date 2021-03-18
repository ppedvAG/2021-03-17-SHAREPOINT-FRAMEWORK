import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Rating, Rating2 } from './components/Rating';

function App() {
  return (
    <div className="App">
      <h2>KOMPONENTE RATING</h2>    
      <Rating starsAmount={4}/>
      <h2>KOMPONENTE RATING2</h2>    
      <Rating2 starsAmount={4}/>
    </div>
  );
}

export default App;
