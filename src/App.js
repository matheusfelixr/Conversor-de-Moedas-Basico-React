import React from 'react';
import './App.css';
import Converter from './components/Converter'

function App() {
  return (
    <div className="App">
      <Converter firstCoin = "USD" secondCoin = "BRL"></Converter>
 
    </div>
  );
}

export default App;
