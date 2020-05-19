import React from 'react';
import Climate from './Components/Climate'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Send Help</h1>
      </header>
      <div>
      <Climate className="Climate" />
      </div>
    </div>
  );
}

export default App;
