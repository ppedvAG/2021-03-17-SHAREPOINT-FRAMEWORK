import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Rating } from './components/Rating';

function App() {
  return (
    <div className="App">      
      <Rating starsAmount={4}/>
    </div>
  );
}

export default App;
