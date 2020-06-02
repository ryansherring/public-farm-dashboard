import React from 'react';
import Climate from './Components/Climate';
import Fan from './Components/PlugStates/Fan/FanButton'
import Mister from './Components/PlugStates/Mister/MisterButton'
import './App.css';
import ToDoList from './Components/ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Send Help</h1>
      </header>
      <div>
        <Climate />
        <div>
          <Fan />
          <Mister />
        </div>
      </div>
      <div>
        <ToDoList />
      </div>
    </div>
  );
}

export default App;