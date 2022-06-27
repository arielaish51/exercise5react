import React from 'react';
import './App.css';
import PlayerClass from './Components/PlayerClass/PlayerClass';
import PlayerFunction from './Components/PlayerFunction/PlayerFunction';

function App() {
  return (
    <div className="App">
      {/*Functional Component*/}
      <PlayerFunction name='Messi' goals={-6}/>
      <PlayerFunction name='Ronaldo' goals={800}/>
      {/* Class Component */}
      <PlayerClass name='Messi' goals={950}/>
      <PlayerClass name='Ronaldo' goals={1000}/>

    
    </div>
  );
}

export default App;
